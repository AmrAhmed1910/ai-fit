import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Search, Eye, Package } from 'lucide-react';

const mockOrders = [
  {
    id: 'ORD-1234',
    customer: 'John Doe',
    email: 'john@example.com',
    items: 2,
    total: 109.98,
    status: 'pending',
    date: '2025-11-07',
    products: [
      { name: 'Classic White T-Shirt', quantity: 2, price: 29.99, size: 'M' },
      { name: 'Slim Fit Jeans', quantity: 1, price: 79.99, size: '32' },
    ],
  },
  {
    id: 'ORD-1235',
    customer: 'Jane Smith',
    email: 'jane@example.com',
    items: 1,
    total: 199.99,
    status: 'processing',
    date: '2025-11-06',
    products: [
      { name: 'Leather Jacket', quantity: 1, price: 199.99, size: 'L' },
    ],
  },
  {
    id: 'ORD-1236',
    customer: 'Mike Johnson',
    email: 'mike@example.com',
    items: 3,
    total: 189.97,
    status: 'shipped',
    date: '2025-11-05',
    products: [
      { name: 'Classic White T-Shirt', quantity: 3, price: 29.99, size: 'L' },
      { name: 'Cotton Hoodie', quantity: 1, price: 49.99, size: 'M' },
    ],
  },
  {
    id: 'ORD-1237',
    customer: 'Sarah Williams',
    email: 'sarah@example.com',
    items: 1,
    total: 79.99,
    status: 'delivered',
    date: '2025-11-03',
    products: [
      { name: 'Slim Fit Jeans', quantity: 1, price: 79.99, size: '28' },
    ],
  },
];

export function OrdersManagementPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<typeof mockOrders[0] | null>(null);

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Orders Management</h2>
        <p className="text-gray-600">View and manage customer orders</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Total Orders</p>
                <p className="text-gray-900">1,248</p>
              </div>
              <Package className="w-8 h-8 text-teal-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Pending</p>
                <p className="text-gray-900">23</p>
              </div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Processing</p>
                <p className="text-gray-900">45</p>
              </div>
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Shipped</p>
                <p className="text-gray-900">67</p>
              </div>
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search by order ID or customer..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <Card>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 text-gray-900">Order ID</th>
                  <th className="text-left py-3 text-gray-900">Customer</th>
                  <th className="text-left py-3 text-gray-900">Items</th>
                  <th className="text-left py-3 text-gray-900">Total</th>
                  <th className="text-left py-3 text-gray-900">Status</th>
                  <th className="text-left py-3 text-gray-900">Date</th>
                  <th className="text-left py-3 text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-3 text-gray-900">{order.id}</td>
                    <td className="py-3">
                      <div>
                        <p className="text-gray-900">{order.customer}</p>
                        <p className="text-gray-600">{order.email}</p>
                      </div>
                    </td>
                    <td className="py-3 text-gray-600">{order.items}</td>
                    <td className="py-3 text-gray-900">${order.total.toFixed(2)}</td>
                    <td className="py-3">
                      <Badge className={getStatusColor(order.status)}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-3 text-gray-600">{order.date}</td>
                    <td className="py-3">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setSelectedOrder(order)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Order Detail Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Order Details - {selectedOrder?.id}</DialogTitle>
          </DialogHeader>
          
          {selectedOrder && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 mb-1">Customer</p>
                  <p className="text-gray-900">{selectedOrder.customer}</p>
                  <p className="text-gray-600">{selectedOrder.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Order Date</p>
                  <p className="text-gray-900">{selectedOrder.date}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Status</p>
                  <Badge className={getStatusColor(selectedOrder.status)}>
                    {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Total</p>
                  <p className="text-gray-900">${selectedOrder.total.toFixed(2)}</p>
                </div>
              </div>

              <div>
                <h4 className="text-gray-900 mb-3">Order Items</h4>
                <div className="space-y-3">
                  {selectedOrder.products.map((product, idx) => (
                    <div key={idx} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-gray-900">{product.name}</p>
                        <p className="text-gray-600">Size: {product.size} • Qty: {product.quantity}</p>
                      </div>
                      <p className="text-gray-900">${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t">
                <Select defaultValue={selectedOrder.status}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Update Status
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
