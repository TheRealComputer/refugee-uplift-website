# Admin Dashboard Setup

The `/admin` route provides a protected dashboard for viewing car donation requests and donors.

## 1. Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **Authentication** → **Providers** → **Email** and ensure Email auth is enabled
3. **Disable** "Confirm email" if you want immediate access (or keep it and verify emails)
4. Go to **Settings** → **API** and copy:
   - Project URL → `VITE_SUPABASE_URL`
   - anon public key → `VITE_SUPABASE_ANON_KEY`
5. Create an admin user: **Authentication** → **Users** → **Add user** (email + password)

## 2. Environment Variables

### Local development

Create `.env` in the project root:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Netlify

In **Site settings** → **Environment variables**, add:

| Variable | Value |
|----------|-------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `SHEETS_DATA_URL` | (Optional) Google Apps Script web app URL for form data |

## 3. Running Locally with Netlify Functions

To test the admin dashboard and API locally:

```bash
npm install -g netlify-cli
netlify dev
```

This runs both the Vite dev server and Netlify functions. The admin page will be at `http://localhost:8888/admin`.

## 4. Connecting Google Sheets (Optional)

To show real requests/donors from your form:

1. Open the Google Sheet linked to your form
2. **Extensions** → **Apps Script**
3. Create a script that reads the sheet and returns `{ requests: [...], donors: [...] }`
4. Deploy as **Web app** (Execute as: me, Who has access: Anyone)
5. Add the deployment URL to Netlify env as `SHEETS_DATA_URL`

The function expects JSON in this shape:

```json
{
  "requests": [
    { "timestamp": "...", "name": "...", "email": "...", "status": "New", ... }
  ],
  "donors": [
    { "timestamp": "...", "name": "...", "status": "Pending", ... }
  ]
}
```

## 5. Restricting Admin Access

In Supabase **Authentication** → **Policies**, you can restrict sign-ins to specific emails, or use Supabase's invite-only flow. For a small team, creating users manually in the Supabase dashboard is sufficient.
