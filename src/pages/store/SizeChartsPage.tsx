import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Upload, FileText, CheckCircle, AlertCircle, Download } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function SizeChartsPage() {
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: '1',
      name: 'mens_tshirts_sizes.csv',
      uploadedAt: '2025-11-05',
      status: 'active',
      rows: 6,
      categories: ['T-Shirts', 'Shirts'],
    },
    {
      id: '2',
      name: 'jeans_size_chart.csv',
      uploadedAt: '2025-11-03',
      status: 'active',
      rows: 8,
      categories: ['Jeans', 'Pants'],
    },
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast.success(`${file.name} uploaded successfully`);
      setUploadedFiles([
        {
          id: Date.now().toString(),
          name: file.name,
          uploadedAt: new Date().toISOString().split('T')[0],
          status: 'active',
          rows: 0,
          categories: [],
        },
        ...uploadedFiles,
      ]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Size Chart Management</h2>
        <p className="text-gray-600">Upload and manage CSV size charts for AI fitting</p>
      </div>

      {/* Upload Section */}
      <Card className="border-2 border-dashed border-teal-200 bg-teal-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <Upload className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-gray-900 mb-2">Upload Size Chart (CSV)</h3>
            <p className="text-gray-600 mb-4">
              Upload your size chart in CSV format for AI-powered size matching
            </p>
            
            <label htmlFor="csv-upload">
              <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                <span>
                  <Upload className="w-4 h-4 mr-2" />
                  Choose CSV File
                </span>
              </Button>
              <input 
                id="csv-upload"
                type="file" 
                accept=".csv"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        </CardContent>
      </Card>

      {/* CSV Format Guide */}
      <Card>
        <CardHeader>
          <CardTitle>CSV Format Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-gray-900 mb-2">Required Columns:</h4>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-gray-600">
                Size, Chest (cm), Waist (cm), Hips (cm), Height (cm), Weight (kg)
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-900 mb-2">Example Format:</h4>
              <div className="overflow-x-auto">
                <table className="w-full bg-gray-50 rounded-lg text-gray-600">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Size</th>
                      <th className="text-left p-2">Chest</th>
                      <th className="text-left p-2">Waist</th>
                      <th className="text-left p-2">Hips</th>
                      <th className="text-left p-2">Height</th>
                      <th className="text-left p-2">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">S</td>
                      <td className="p-2">86-91</td>
                      <td className="p-2">71-76</td>
                      <td className="p-2">86-91</td>
                      <td className="p-2">165-172</td>
                      <td className="p-2">55-65</td>
                    </tr>
                    <tr>
                      <td className="p-2">M</td>
                      <td className="p-2">91-97</td>
                      <td className="p-2">76-81</td>
                      <td className="p-2">91-97</td>
                      <td className="p-2">170-178</td>
                      <td className="p-2">65-75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Template
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      <Card>
        <CardHeader>
          <CardTitle>Uploaded Size Charts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-teal-600" />
                  <div>
                    <p className="text-gray-900">{file.name}</p>
                    <p className="text-gray-600">
                      Uploaded {file.uploadedAt} • {file.rows} size rows
                    </p>
                    {file.categories.length > 0 && (
                      <p className="text-gray-600">Categories: {file.categories.join(', ')}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {file.status === 'active' ? (
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span>Active</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-orange-600">
                      <AlertCircle className="w-5 h-5" />
                      <span>Processing</span>
                    </div>
                  )}
                  <Button variant="ghost" size="sm">View</Button>
                  <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
