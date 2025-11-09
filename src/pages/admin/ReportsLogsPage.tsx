import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { 
  Download, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  XCircle,
  Activity,
  Users,
  Store,
} from 'lucide-react';

const csvProcessingLogs = [
  {
    id: 'LOG-001',
    store: 'Modern Threads',
    file: 'size_chart_v2.csv',
    status: 'success',
    rows: 6,
    timestamp: '2025-11-07 14:32',
    message: 'Successfully processed 6 size entries',
  },
  {
    id: 'LOG-002',
    store: 'Urban Style Co',
    file: 'sizes_updated.csv',
    status: 'success',
    rows: 8,
    timestamp: '2025-11-07 10:15',
    message: 'Successfully processed 8 size entries',
  },
  {
    id: 'LOG-003',
    store: 'New Fashion Store',
    file: 'chart.csv',
    status: 'error',
    rows: 0,
    timestamp: '2025-11-06 16:45',
    message: 'Invalid CSV format: Missing required columns',
  },
  {
    id: 'LOG-004',
    store: 'Elegant Wardrobe',
    file: 'size_guide.csv',
    status: 'success',
    rows: 12,
    timestamp: '2025-11-05 09:20',
    message: 'Successfully processed 12 size entries',
  },
  {
    id: 'LOG-005',
    store: 'Sport Fit',
    file: 'athletic_sizes.csv',
    status: 'warning',
    rows: 5,
    timestamp: '2025-11-05 08:10',
    message: 'Processed with warnings: Some values out of range',
  },
];

const activityLogs = [
  {
    id: 'ACT-001',
    user: 'admin@aifit.com',
    action: 'Approved store',
    target: 'Urban Style Co',
    timestamp: '2025-11-07 15:30',
    type: 'store',
  },
  {
    id: 'ACT-002',
    user: 'admin@aifit.com',
    action: 'Updated commission rate',
    target: 'Platform Settings',
    timestamp: '2025-11-07 14:20',
    type: 'settings',
  },
  {
    id: 'ACT-003',
    user: 'john@modernthreads.com',
    action: 'Uploaded size chart',
    target: 'size_chart_v2.csv',
    timestamp: '2025-11-07 14:15',
    type: 'upload',
  },
  {
    id: 'ACT-004',
    user: 'admin@aifit.com',
    action: 'Generated report',
    target: 'Monthly Revenue Report',
    timestamp: '2025-11-07 10:00',
    type: 'report',
  },
  {
    id: 'ACT-005',
    user: 'sarah@elegantwardrobe.com',
    action: 'Updated store profile',
    target: 'Elegant Wardrobe',
    timestamp: '2025-11-06 16:45',
    type: 'store',
  },
];

const errorReports = [
  {
    id: 'ERR-001',
    type: 'CSV Processing',
    message: 'Invalid column headers in size chart',
    store: 'New Fashion Store',
    severity: 'high',
    timestamp: '2025-11-06 16:45',
    status: 'open',
  },
  {
    id: 'ERR-002',
    type: 'Payment Gateway',
    message: 'Payment timeout for order ORD-1240',
    store: 'Modern Threads',
    severity: 'medium',
    timestamp: '2025-11-05 12:30',
    status: 'resolved',
  },
  {
    id: 'ERR-003',
    type: 'AI Model',
    message: 'Size prediction confidence below threshold',
    store: 'Sport Fit',
    severity: 'low',
    timestamp: '2025-11-04 09:15',
    status: 'resolved',
  },
];

export function ReportsLogsPage() {
  const [reportType, setReportType] = useState('revenue');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Reports & Logs</h2>
        <p className="text-gray-600">Monitor system activity and generate reports</p>
      </div>

      <Tabs defaultValue="csv" className="space-y-6">
        <TabsList>
          <TabsTrigger value="csv">CSV Logs</TabsTrigger>
          <TabsTrigger value="activity">Activity Logs</TabsTrigger>
          <TabsTrigger value="errors">Error Reports</TabsTrigger>
          <TabsTrigger value="reports">Generate Reports</TabsTrigger>
        </TabsList>

        {/* CSV Processing Logs */}
        <TabsContent value="csv">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>CSV Processing Logs</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Logs
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {csvProcessingLogs.map((log) => (
                  <div key={log.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start gap-3 flex-1">
                      {log.status === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      ) : log.status === 'warning' ? (
                        <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <p className="text-gray-900">{log.store}</p>
                          <span className="text-gray-600">{log.timestamp}</span>
                        </div>
                        <p className="text-gray-600 mb-1">{log.file}</p>
                        <p className="text-gray-600">{log.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Activity Logs */}
        <TabsContent value="activity">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>System Activity Logs</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Logs
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activityLogs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {log.type === 'store' ? (
                        <Store className="w-5 h-5 text-teal-600" />
                      ) : log.type === 'upload' ? (
                        <FileText className="w-5 h-5 text-blue-600" />
                      ) : log.type === 'report' ? (
                        <FileText className="w-5 h-5 text-purple-600" />
                      ) : (
                        <Activity className="w-5 h-5 text-gray-600" />
                      )}
                      <div>
                        <p className="text-gray-900">{log.action}</p>
                        <p className="text-gray-600">{log.user} • {log.target}</p>
                      </div>
                    </div>
                    <span className="text-gray-600">{log.timestamp}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Error Reports */}
        <TabsContent value="errors">
          <Card>
            <CardHeader>
              <CardTitle>Error Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 text-gray-900">Error ID</th>
                      <th className="text-left py-3 text-gray-900">Type</th>
                      <th className="text-left py-3 text-gray-900">Message</th>
                      <th className="text-left py-3 text-gray-900">Severity</th>
                      <th className="text-left py-3 text-gray-900">Status</th>
                      <th className="text-left py-3 text-gray-900">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {errorReports.map((error) => (
                      <tr key={error.id} className="border-b">
                        <td className="py-3 text-gray-900">{error.id}</td>
                        <td className="py-3 text-gray-600">{error.type}</td>
                        <td className="py-3 text-gray-900">{error.message}</td>
                        <td className="py-3">
                          <Badge variant={
                            error.severity === 'high' ? 'destructive' : 
                            error.severity === 'medium' ? 'secondary' : 
                            'default'
                          }>
                            {error.severity}
                          </Badge>
                        </td>
                        <td className="py-3">
                          <Badge variant={error.status === 'resolved' ? 'default' : 'secondary'}>
                            {error.status}
                          </Badge>
                        </td>
                        <td className="py-3 text-gray-600">{error.timestamp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Generate Reports */}
        <TabsContent value="reports">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate Report</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-gray-900 mb-2 block">Report Type</label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="revenue">Revenue Report</SelectItem>
                      <SelectItem value="stores">Store Performance</SelectItem>
                      <SelectItem value="customers">Customer Analytics</SelectItem>
                      <SelectItem value="ai">AI Model Performance</SelectItem>
                      <SelectItem value="transactions">Transactions Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-gray-900 mb-2 block">Date Range</label>
                  <Select defaultValue="month">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Last 7 Days</SelectItem>
                      <SelectItem value="month">Last 30 Days</SelectItem>
                      <SelectItem value="quarter">Last Quarter</SelectItem>
                      <SelectItem value="year">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-gray-900 mb-2 block">Format</label>
                  <Select defaultValue="pdf">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <Download className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'November Revenue Report', date: '2025-11-07', type: 'PDF' },
                    { name: 'Store Performance Q4', date: '2025-11-01', type: 'Excel' },
                    { name: 'Customer Analytics Oct', date: '2025-10-31', type: 'PDF' },
                    { name: 'Transactions Summary', date: '2025-10-15', type: 'CSV' },
                  ].map((report, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-gray-900">{report.name}</p>
                          <p className="text-gray-600">{report.date}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
