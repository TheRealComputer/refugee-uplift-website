import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { LogOut, Car, Key, Loader2 } from 'lucide-react';
import Navigation from '@/components/Navigation';

interface DashboardRow {
  id?: string;
  timestamp?: string;
  type?: string;
  status?: string;
  [key: string]: unknown;
}

interface DashboardData {
  requests: DashboardRow[];
  donors: DashboardRow[];
  message?: string;
}

const getApiBase = () => '';

const Admin = () => {
  const { user, session, loading: authLoading, signIn, signOut } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<DashboardData | null>(null);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataError, setDataError] = useState('');

  useEffect(() => {
    if (!authLoading && !user) {
      // Stay on admin page to show login form
    }
  }, [authLoading, user]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    const { error: err } = await signIn(email, password);
    setSubmitting(false);
    if (err) {
      setError(err.message ?? 'Invalid email or password');
    }
  };

  const fetchDashboardData = async () => {
    if (!session?.access_token) return;
    setDataLoading(true);
    setDataError('');
    try {
      const base = getApiBase();
      const res = await fetch(`${base}/api/dashboard-data`, {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      const json = (await res.json()) as DashboardData & { error?: string };
      if (!res.ok) {
        setDataError(json.error ?? 'Failed to load data');
        setData({ requests: [], donors: [] });
      } else {
        setData(json);
      }
    } catch {
      setDataError('Failed to connect to server');
      setData({ requests: [], donors: [] });
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    if (user && session?.access_token) {
      fetchDashboardData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, session?.access_token]);

  const handleSignOut = async () => {
    await signOut();
  };

  const getStatusVariant = (status: string | undefined) => {
    if (!status) return 'secondary';
    const s = String(status).toLowerCase();
    if (s.includes('complete') || s.includes('matched')) return 'default';
    if (s.includes('review') || s.includes('progress')) return 'secondary';
    return 'outline';
  };

  const renderTable = (rows: DashboardRow[], emptyMessage: string) => {
    if (!rows.length) {
      return <p className="text-sm text-muted-foreground py-8">{emptyMessage}</p>;
    }
    const first = rows[0];
    const keys = Object.keys(first).filter(
      (k) => k !== 'type' && typeof first[k] !== 'object' && first[k] !== null
    );
    const priorityKeys = ['timestamp', 'Timestamp', 'status', 'Status', 'name', 'Name', 'email', 'Email'];
    const ordered = [
      ...priorityKeys.filter((k) => keys.includes(k)),
      ...keys.filter((k) => !priorityKeys.includes(k)),
    ];
    return (
      <Table>
        <TableHeader>
          <TableRow>
            {ordered.map((k) => (
              <TableHead key={k} className="capitalize">
                {k.replace(/([A-Z])/g, ' $1').trim()}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.id ?? i}>
              {ordered.map((k) => (
                <TableCell key={k}>
                  {k.toLowerCase() === 'status' ? (
                    <Badge variant={getStatusVariant(String(row[k]))}>{String(row[k] ?? '-')}</Badge>
                  ) : (
                    String(row[k] ?? '-')
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-surface">
        <Navigation />
        <div className="pt-16 min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-trust" />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-surface">
        <Navigation />
        <div className="pt-16 min-h-[60vh] flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Admin Dashboard</CardTitle>
              <CardDescription>Sign in to view car donation requests and donors</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Password</label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button type="submit" disabled={submitting} className="w-full">
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Sign in'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navigation />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between border-b border-border bg-white/50">
          <h1 className="text-xl font-bold text-trust">Car Donations Admin</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-1" />
              Sign out
            </Button>
          </div>
        </div>
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList>
            <TabsTrigger value="requests" className="gap-2">
              <Car className="w-4 h-4" />
              Requests ({data?.requests?.length ?? 0})
            </TabsTrigger>
            <TabsTrigger value="donors" className="gap-2">
              <Key className="w-4 h-4" />
              Donors ({data?.donors?.length ?? 0})
            </TabsTrigger>
          </TabsList>
          {data?.message && (
            <p className="text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-lg p-3">
              {data.message}
            </p>
          )}
          {dataError && (
            <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg p-3">
              {dataError}
            </p>
          )}
          <TabsContent value="requests" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Requests</CardTitle>
                <CardDescription>Families requesting a vehicle</CardDescription>
              </CardHeader>
              <CardContent>
                {dataLoading ? (
                  <div className="py-12 flex justify-center">
                    <Loader2 className="w-8 h-8 animate-spin text-trust" />
                  </div>
                ) : (
                  renderTable(
                    data?.requests ?? [],
                    'No requests yet. Data will appear when SHEETS_DATA_URL is configured and returns data.'
                  )
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="donors" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Donors</CardTitle>
                <CardDescription>Donors offering vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                {dataLoading ? (
                  <div className="py-12 flex justify-center">
                    <Loader2 className="w-8 h-8 animate-spin text-trust" />
                  </div>
                ) : (
                  renderTable(
                    data?.donors ?? [],
                    'No donors yet. Data will appear when SHEETS_DATA_URL is configured and returns data.'
                  )
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="mt-6 flex justify-end">
          <Button variant="outline" size="sm" onClick={fetchDashboardData} disabled={dataLoading}>
            Refresh data
          </Button>
        </div>
      </main>
      </div>
    </div>
  );
};

export default Admin;
