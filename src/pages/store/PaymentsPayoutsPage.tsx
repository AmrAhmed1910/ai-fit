import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { DollarSign, TrendingUp, Download, CreditCard } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const payoutHistory = [
  { id: 'PAY-001', date: '2025-11-01', amount: 12450.00, status: 'completed', method: 'Bank Transfer' },
  { id: 'PAY-002', date: '2025-10-15', amount: 10890.50, status: 'completed', method: 'Bank Transfer' },
  { id: 'PAY-003', date: '2025-10-01', amount: 9234.75, status: 'completed', method: 'Bank Transfer' },
  { id: 'PAY-004', date: '2025-11-15', amount: 8567.20, status: 'pending', method: 'Bank Transfer' },
];

const earningsData = [
  { month: 'Jun', earnings: 8200 },
  { month: 'Jul', earnings: 9800 },
  { month: 'Aug', earnings: 11400 },
  { month: 'Sep', earnings: 10900 },
  { month: 'Oct', earnings: 12450 },
  { month: 'Nov', earnings: 14200 },
];

export function PaymentsPayoutsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Payments & Payouts</h2>
        <p className="text-gray-600">Manage your earnings and payout settings</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Available Balance</p>
              <DollarSign className="w-5 h-5 text-teal-600" />
            </div>
            <p className="text-gray-900">$8,567.20</p>
            <p className="text-gray-600">Ready for payout</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Pending Clearance</p>
              <DollarSign className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-gray-900">$2,134.50</p>
            <p className="text-gray-600">In 7 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Total Earnings</p>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-gray-900">$62,400</p>
            <p className="text-gray-600">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">This Month</p>
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-gray-900">$14,200</p>
            <p className="text-green-600">+14.2%</p>
          </CardContent>
        </Card>
      </div>

      {/* Earnings Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Earnings Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="earnings" stroke="#14b8a6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payout History */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Payout History</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {payoutHistory.map((payout) => (
                <div key={payout.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-gray-900">{payout.id}</p>
                    <p className="text-gray-600">{payout.date}</p>
                    <p className="text-gray-600">{payout.method}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 mb-1">${payout.amount.toFixed(2)}</p>
                    <Badge variant={payout.status === 'completed' ? 'default' : 'secondary'}>
                      {payout.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payout Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Payout Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="text-gray-900">Bank Account</p>
                    <p className="text-gray-600">•••• •••• •••• 4242</p>
                  </div>
                </div>
                <Badge>Primary</Badge>
              </div>
              <Button variant="outline" size="sm">Edit</Button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Payout Schedule</span>
                <span className="text-gray-900">Bi-weekly</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Next Payout</span>
                <span className="text-gray-900">Nov 15, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Minimum Payout</span>
                <span className="text-gray-900">$100.00</span>
              </div>
            </div>

            <Button className="w-full bg-teal-600 hover:bg-teal-700">
              Request Payout
            </Button>

            <p className="text-gray-600 text-center">
              Platform Commission: 10%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Transaction Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 text-gray-900">Type</th>
                  <th className="text-left py-3 text-gray-900">Description</th>
                  <th className="text-left py-3 text-gray-900">Amount</th>
                  <th className="text-left py-3 text-gray-900">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 text-gray-600">Sale</td>
                  <td className="py-3 text-gray-900">Order #ORD-1234</td>
                  <td className="py-3 text-green-600">+$109.98</td>
                  <td className="py-3 text-gray-600">2025-11-07</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-gray-600">Commission</td>
                  <td className="py-3 text-gray-900">Platform Fee (10%)</td>
                  <td className="py-3 text-red-600">-$11.00</td>
                  <td className="py-3 text-gray-600">2025-11-07</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-gray-600">Sale</td>
                  <td className="py-3 text-gray-900">Order #ORD-1235</td>
                  <td className="py-3 text-green-600">+$199.99</td>
                  <td className="py-3 text-gray-600">2025-11-06</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-gray-600">Payout</td>
                  <td className="py-3 text-gray-900">Bank Transfer</td>
                  <td className="py-3 text-red-600">-$12,450.00</td>
                  <td className="py-3 text-gray-600">2025-11-01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
