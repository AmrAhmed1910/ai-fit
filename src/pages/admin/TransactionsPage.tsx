import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Search, Download, DollarSign, TrendingUp, RefreshCw } from 'lucide-react';

const mockTransactions = [
  {
    id: 'TXN-1001',
    store: 'Modern Threads',
    order: 'ORD-1234',
    amount: 109.98,
    commission: 10.99,
    status: 'completed',
    date: '2025-11-07',
    method: 'Credit Card',
  },
  {
    id: 'TXN-1002',
    store: 'Urban Style Co',
    order: 'ORD-1235',
    amount: 199.99,
    commission: 19.99,
    status: 'completed',
    date: '2025-11-06',
    method: 'Credit Card',
  },
  {
    id: 'TXN-1003',
    store: 'Elegant Wardrobe',
    order: 'ORD-1236',
    amount: 399.99,
    commission: 39.99,
    status: 'pending',
    date: '2025-11-06',
    method: 'PayPal',
  },
  {
    id: 'TXN-1004',
    store: 'Sport Fit',
    order: 'ORD-1237',
    amount: 129.99,
    commission: 12.99,
    status: 'completed',
    date: '2025-11-05',
    method: 'STC Pay',
  },
  {
    id: 'TXN-1005',
    store: 'Modern Threads',
    order: 'ORD-1238',
    amount: 79.99,
    commission: 7.99,
    status: 'refunded',
    date: '2025-11-04',
    method: 'Credit Card',
  },
];

export function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredTransactions = mockTransactions.filter(txn => {
    const matchesSearch = txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         txn.store.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         txn.order.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || txn.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalRevenue = mockTransactions.reduce((sum, txn) => sum + txn.amount, 0);
  const totalCommission = mockTransactions.reduce((sum, txn) => sum + txn.commission, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Transactions</h2>
        <p className="text-gray-600">Monitor all platform transactions and commissions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Total Revenue</p>
              <DollarSign className="w-5 h-5 text-teal-600" />
            </div>
            <p className="text-gray-900">${totalRevenue.toFixed(2)}</p>
            <p className="text-green-600 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              +12.5%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Platform Commission</p>
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-gray-900">${totalCommission.toFixed(2)}</p>
            <p className="text-gray-600">10% average</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Pending</p>
              <DollarSign className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-gray-900">$399.99</p>
            <p className="text-gray-600">1 transaction</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Refunds</p>
              <RefreshCw className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-gray-900">$79.99</p>
            <p className="text-gray-600">1 this week</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search transactions..." 
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
            <SelectItem value="all">All Transactions</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="refunded">Refunded</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 text-gray-900">Transaction ID</th>
                  <th className="text-left py-3 text-gray-900">Store</th>
                  <th className="text-left py-3 text-gray-900">Order</th>
                  <th className="text-left py-3 text-gray-900">Amount</th>
                  <th className="text-left py-3 text-gray-900">Commission</th>
                  <th className="text-left py-3 text-gray-900">Status</th>
                  <th className="text-left py-3 text-gray-900">Method</th>
                  <th className="text-left py-3 text-gray-900">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((txn) => (
                  <tr key={txn.id} className="border-b">
                    <td className="py-3 text-gray-900">{txn.id}</td>
                    <td className="py-3 text-gray-600">{txn.store}</td>
                    <td className="py-3 text-gray-600">{txn.order}</td>
                    <td className="py-3 text-gray-900">${txn.amount.toFixed(2)}</td>
                    <td className="py-3 text-teal-600">${txn.commission.toFixed(2)}</td>
                    <td className="py-3">
                      <Badge variant={
                        txn.status === 'completed' ? 'default' : 
                        txn.status === 'pending' ? 'secondary' : 
                        'destructive'
                      }>
                        {txn.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-gray-600">{txn.method}</td>
                    <td className="py-3 text-gray-600">{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Commission Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Commission by Store</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { store: 'Modern Threads', commission: 624.50, percentage: 10 },
                { store: 'Urban Style Co', commission: 542.30, percentage: 10 },
                { store: 'Elegant Wardrobe', commission: 489.20, percentage: 10 },
                { store: 'Sport Fit', commission: 415.70, percentage: 10 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-gray-900">{item.store}</p>
                    <p className="text-gray-600">{item.percentage}% commission</p>
                  </div>
                  <p className="text-gray-900">${item.commission.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { method: 'Credit Card', transactions: 3, amount: 589.96 },
                { method: 'PayPal', transactions: 1, amount: 399.99 },
                { method: 'STC Pay', transactions: 1, amount: 129.99 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-gray-900">{item.method}</p>
                    <p className="text-gray-600">{item.transactions} transactions</p>
                  </div>
                  <p className="text-gray-900">${item.amount.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
