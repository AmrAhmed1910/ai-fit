import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Users, 
  Package,
  Upload,
  Settings,
  BarChart3,
  Menu,
  X,
  CreditCard,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  mockStoreSalesData,
  mockCategoryRevenue,
  mockTrafficSources,
  mockStoreProducts,
  mockRecentOrders,
} from '../data/mockData';
import { ManageProductsPage } from './store/ManageProductsPage';
import { SizeChartsPage } from './store/SizeChartsPage';
import { OrdersManagementPage } from './store/OrdersManagementPage';
import { PaymentsPayoutsPage } from './store/PaymentsPayoutsPage';
import { StoreSettingsPage } from './store/StoreSettingsPage';

const COLORS = ['#14b8a6', '#3b82f6', '#8b5cf6', '#f59e0b'];

export function StoreDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
          <h2 className="text-gray-900 mb-1">Modern Threads</h2>
          <p className="text-gray-600">Store Dashboard</p>
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
            className={`w-full justify-start ${currentTab === 'products' ? 'bg-teal-50 text-teal-600' : ''}`}
            onClick={() => setCurrentTab('products')}
          >
            <Package className="w-5 h-5 mr-3" />
            Products
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${currentTab === 'orders' ? 'bg-teal-50 text-teal-600' : ''}`}
            onClick={() => setCurrentTab('orders')}
          >
            <ShoppingBag className="w-5 h-5 mr-3" />
            Orders
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${currentTab === 'size-charts' ? 'bg-teal-50 text-teal-600' : ''}`}
            onClick={() => setCurrentTab('size-charts')}
          >
            <Upload className="w-5 h-5 mr-3" />
            Size Charts
          </Button>
          <Button 
            variant="ghost" 
            className={`w-full justify-start ${currentTab === 'payments' ? 'bg-teal-50 text-teal-600' : ''}`}
            onClick={() => setCurrentTab('payments')}
          >
            <CreditCard className="w-5 h-5 mr-3" />
            Payments
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
                  <CardTitle className="text-gray-600">Total Revenue</CardTitle>
                  <DollarSign className="w-5 h-5 text-teal-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-gray-900 mb-1">$62,400</div>
                  <p className="text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+12.5%</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-gray-600">Units Sold</CardTitle>
                  <ShoppingBag className="w-5 h-5 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-gray-900 mb-1">1,248</div>
                  <p className="text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+8.2%</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-gray-600">Avg Order Value</CardTitle>
                  <DollarSign className="w-5 h-5 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-gray-900 mb-1">$50.00</div>
                  <p className="text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+3.8%</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-gray-600">Conversion Rate</CardTitle>
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-gray-900 mb-1">3.2%</div>
                  <p className="text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+0.4%</span>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mockStoreSalesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke="#14b8a6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={mockCategoryRevenue}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {mockCategoryRevenue.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={mockTrafficSources}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#14b8a6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockStoreProducts.slice(0, 5).map((product) => (
                      <div key={product.id} className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-900">{product.name}</p>
                          <p className="text-gray-600">{product.unitsSold} sold</p>
                        </div>
                        <p className="text-gray-900">${product.revenue.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentTab === 'products' && <ManageProductsPage />}
        {currentTab === 'orders' && <OrdersManagementPage />}
        {currentTab === 'size-charts' && <SizeChartsPage />}
        {currentTab === 'payments' && <PaymentsPayoutsPage />}
        {currentTab === 'settings' && <StoreSettingsPage />}
      </div>
    </div>
  );
}