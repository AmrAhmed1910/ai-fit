import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Switch } from '../components/ui/switch';
import { Input } from '../components/ui/input';
import { 
  Store, 
  Users, 
  DollarSign, 
  TrendingUp,
  BarChart3,
  FileText,
  Settings,
  Menu,
  X,
  CheckCircle,
  AlertCircle,
  Search,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TransactionsPage } from './admin/TransactionsPage';
import { ReportsLogsPage } from './admin/ReportsLogsPage';
import { SystemSettingsPage } from './admin/SystemSettingsPage';

const platformRevenueData = [
  { month: 'Jun', revenue: 45200, commission: 4520 },
  { month: 'Jul', revenue: 52800, commission: 5280 },
  { month: 'Aug', revenue: 61400, commission: 6140 },
  { month: 'Sep', revenue: 73900, commission: 7390 },
  { month: 'Oct', revenue: 86300, commission: 8630 },
  { month: 'Nov', revenue: 98700, commission: 9870 },
];

const topStoresData = [
  { name: 'Modern Threads', sales: 62400, orders: 1248, rating: 4.8 },
  { name: 'Urban Style Co', sales: 54200, orders: 987, rating: 4.6 },
  { name: 'Elegant Wardrobe', sales: 48900, orders: 823, rating: 4.9 },
  { name: 'Sport Fit', sales: 41500, orders: 756, rating: 4.7 },
];

const mockStoresAdmin = [
  { id: '1', name: 'Modern Threads', status: 'active', sizeChart: 'uploaded', sales: 62400, approval: true },
  { id: '2', name: 'Urban Style Co', status: 'active', sizeChart: 'uploaded', sales: 54200, approval: true },
  { id: '3', name: 'Elegant Wardrobe', status: 'active', sizeChart: 'uploaded', sales: 48900, approval: true },
  { id: '4', name: 'New Fashion Store', status: 'pending', sizeChart: 'pending', sales: 0, approval: false },
];

const mockUsersAdmin = [
  { id: '1', name: 'John Doe', email: 'john@example.com', orders: 12, lastActive: '2025-11-06' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', orders: 8, lastActive: '2025-11-05' },
  { id: '3', name: 'Mike Johnson', email: 'mike@example.com', orders: 15, lastActive: '2025-11-07' },
  { id: '4', name: 'Sarah Williams', email: 'sarah@example.com', orders: 6, lastActive: '2025-11-04' },
];

export function AdminDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r transition-transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6">
          <h2 className="text-gray-900 mb-1">AI Fit Store</h2>
          <p className="text-gray-600">Admin Dashboard</p>
        </div>
        
        <nav className="px-4 space-y-2">
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${currentTab === 'overview' ? 'bg-teal-50 text-teal-600' : ''}`}
            onClick={() => setCurrentTab('overview')}
          >
            <BarChart3 className="w-5 h-5 mr-3" />
            Overview
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${currentTab === 'stores' ? 'bg-teal-50 text-teal-600' : ''}`}
            onClick={() => setCurrentTab('stores')}
          >
            <Store className="w-5 h-5 mr-3" />
            Stores
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${currentTab === 'users' ? 'bg-teal-50 text-teal-600' : ''}`}
            onClick={() => setCurrentTab('users')}
          >
            <Users className="w-5 h-5 mr-3" />
            Users
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${currentTab === 'transactions' ? 'bg-teal-50 text-teal-600' : ''}`}
            onClick={() => setCurrentTab('transactions')}
          >
            <DollarSign className="w-5 h-5 mr-3" />
            Transactions
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${currentTab === 'analytics' ? 'bg-teal-50 text-teal-600' : ''}`}
            onClick={() => setCurrentTab('analytics')}
          >
            <TrendingUp className="w-5 h-5 mr-3" />
            Analytics
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${currentTab === 'reports' ? 'bg-teal-50 text-teal-600' : ''}`}
            onClick={() => setCurrentTab('reports')}
          >
            <FileText className="w-5 h-5 mr-3" />
            Reports
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${currentTab === 'settings' ? 'bg-teal-50 text-teal-600' : ''}`}
            onClick={() => setCurrentTab('settings')}
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64 p-8">
        {currentTab === 'overview' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-gray-600">Total Stores</CardTitle>
                  <Store className="w-5 h-5 text-teal-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-gray-900 mb-1">247</div>
                  <p className="text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+12 this month</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-gray-600">Total Customers</CardTitle>
                  <Users className="w-5 h-5 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-gray-900 mb-1">15,842</div>
                  <p className="text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+8.3% growth</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-gray-600">Platform Revenue</CardTitle>
                  <DollarSign className="w-5 h-5 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-gray-900 mb-1">$98,700</div>
                  <p className="text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+14.2%</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-gray-600">Pending Approvals</CardTitle>
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-gray-900 mb-1">8</div>
                  <p className="text-gray-600">Stores awaiting review</p>
                </CardContent>
              </Card>
            </div>

            {/* Revenue Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Revenue & Commission</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={platformRevenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#14b8a6" strokeWidth={2} name="Total Revenue" />
                    <Line type="monotone" dataKey="commission" stroke="#3b82f6" strokeWidth={2} name="Commission" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top Stores */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Stores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 text-gray-900">Store</th>
                        <th className="text-left py-3 text-gray-900">Sales</th>
                        <th className="text-left py-3 text-gray-900">Orders</th>
                        <th className="text-left py-3 text-gray-900">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topStoresData.map((store, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="py-3 text-gray-900">{store.name}</td>
                          <td className="py-3 text-gray-600">${store.sales.toLocaleString()}</td>
                          <td className="py-3 text-gray-600">{store.orders}</td>
                          <td className="py-3 text-gray-600">{store.rating}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentTab === 'stores' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-gray-900">Manage Stores</h2>
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    placeholder="Search stores..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 text-gray-900">Store Name</th>
                        <th className="text-left py-3 text-gray-900">Status</th>
                        <th className="text-left py-3 text-gray-900">Size Chart</th>
                        <th className="text-left py-3 text-gray-900">Sales</th>
                        <th className="text-left py-3 text-gray-900">Approved</th>
                        <th className="text-left py-3 text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockStoresAdmin.map((store) => (
                        <tr key={store.id} className="border-b">
                          <td className="py-3 text-gray-900">{store.name}</td>
                          <td className="py-3">
                            <Badge variant={store.status === 'active' ? 'default' : 'secondary'}>
                              {store.status}
                            </Badge>
                          </td>
                          <td className="py-3">
                            {store.sizeChart === 'uploaded' ? (
                              <span className="flex items-center gap-1 text-green-600">
                                <CheckCircle className="w-4 h-4" />
                                Uploaded
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-orange-600">
                                <AlertCircle className="w-4 h-4" />
                                Pending
                              </span>
                            )}
                          </td>
                          <td className="py-3 text-gray-600">
                            ${store.sales.toLocaleString()}
                          </td>
                          <td className="py-3">
                            <Switch checked={store.approval} />
                          </td>
                          <td className="py-3">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentTab === 'users' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-gray-900">Manage Users</h2>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input 
                  placeholder="Search users..." 
                  className="pl-10"
                />
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 text-gray-900">Name</th>
                        <th className="text-left py-3 text-gray-900">Email</th>
                        <th className="text-left py-3 text-gray-900">Orders</th>
                        <th className="text-left py-3 text-gray-900">Last Active</th>
                        <th className="text-left py-3 text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockUsersAdmin.map((user) => (
                        <tr key={user.id} className="border-b">
                          <td className="py-3 text-gray-900">{user.name}</td>
                          <td className="py-3 text-gray-600">{user.email}</td>
                          <td className="py-3 text-gray-600">{user.orders}</td>
                          <td className="py-3 text-gray-600">{user.lastActive}</td>
                          <td className="py-3">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentTab === 'transactions' && <TransactionsPage />}
        
        {currentTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-gray-900">Platform Analytics</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Model Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      data={[
                        { month: 'Jun', accuracy: 89 },
                        { month: 'Jul', accuracy: 91 },
                        { month: 'Aug', accuracy: 92 },
                        { month: 'Sep', accuracy: 94 },
                        { month: 'Oct', accuracy: 95 },
                        { month: 'Nov', accuracy: 96 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[80, 100]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="accuracy" stroke="#14b8a6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Search Keywords</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={[
                        { keyword: 'Jeans', searches: 2450 },
                        { keyword: 'T-Shirts', searches: 2100 },
                        { keyword: 'Jackets', searches: 1820 },
                        { keyword: 'Shoes', searches: 1650 },
                        { keyword: 'Suits', searches: 1340 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="keyword" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="searches" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* CSV Processing Logs */}
            <Card>
              <CardHeader>
                <CardTitle>Recent CSV Processing Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { store: 'Modern Threads', file: 'size_chart_v2.csv', status: 'success', time: '2 hours ago' },
                    { store: 'Urban Style Co', file: 'sizes_updated.csv', status: 'success', time: '5 hours ago' },
                    { store: 'New Fashion Store', file: 'chart.csv', status: 'error', time: '1 day ago' },
                    { store: 'Elegant Wardrobe', file: 'size_guide.csv', status: 'success', time: '2 days ago' },
                  ].map((log, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {log.status === 'success' ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-600" />
                        )}
                        <div>
                          <p className="text-gray-900">{log.store}</p>
                          <p className="text-gray-600">{log.file}</p>
                        </div>
                      </div>
                      <span className="text-gray-600">{log.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        {currentTab === 'reports' && <ReportsLogsPage />}
        {currentTab === 'settings' && <SystemSettingsPage />}
      </div>
    </div>
  );
}