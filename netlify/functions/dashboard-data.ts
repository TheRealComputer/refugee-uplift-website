import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

interface DashboardRow {
  id?: string;
  timestamp?: string;
  type: 'request' | 'donor';
  status?: string;
  [key: string]: unknown;
}

interface DashboardData {
  requests: DashboardRow[];
  donors: DashboardRow[];
}

const handler: Handler = async (event: HandlerEvent, _context: HandlerContext) => {
  // CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const authHeader = event.headers.authorization;
  const token = authHeader?.replace(/^Bearer\s+/i, '');

  if (!token) {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ error: 'Missing authorization token' }),
    };
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Server misconfigured: Supabase credentials missing' }),
    };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data: { user }, error: authError } = await supabase.auth.getUser(token);

  if (authError || !user) {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ error: 'Invalid or expired token' }),
    };
  }

  const sheetsUrl = process.env.SHEETS_DATA_URL ?? process.env.APPS_SCRIPT_URL;

  if (!sheetsUrl) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        requests: [],
        donors: [],
        message: 'SHEETS_DATA_URL not configured. Add your Google Apps Script or Sheets API endpoint to Netlify env vars.',
      } as DashboardData & { message?: string }),
    };
  }

  try {
    const res = await fetch(sheetsUrl);
    if (!res.ok) throw new Error(`Sheets endpoint returned ${res.status}`);
    const data = (await res.json()) as DashboardData;
    return { statusCode: 200, headers, body: JSON.stringify(data) };
  } catch (err) {
    console.error('Dashboard data fetch error:', err);
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({
        error: 'Failed to fetch dashboard data',
        requests: [],
        donors: [],
      }),
    };
  }
};

export { handler };
