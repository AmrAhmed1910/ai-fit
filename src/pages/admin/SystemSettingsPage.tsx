import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Slider } from '../../components/ui/slider';
import { toast } from 'sonner@2.0.3';

export function SystemSettingsPage() {
  const handleSave = () => {
    toast.success('Settings saved successfully');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">System Settings</h2>
        <p className="text-gray-600">Configure platform-wide settings and preferences</p>
      </div>

      {/* Platform Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="platformName">Platform Name</Label>
            <Input id="platformName" defaultValue="AI Fit Store" />
          </div>

          <div>
            <Label htmlFor="supportEmail">Support Email</Label>
            <Input id="supportEmail" type="email" defaultValue="support@aifitstore.com" />
          </div>

          <div>
            <Label htmlFor="defaultCurrency">Default Currency</Label>
            <Select defaultValue="usd">
              <SelectTrigger id="defaultCurrency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD - US Dollar</SelectItem>
                <SelectItem value="eur">EUR - Euro</SelectItem>
                <SelectItem value="gbp">GBP - British Pound</SelectItem>
                <SelectItem value="egp">EGP - Egyptian Pound</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Maintenance Mode</p>
              <p className="text-gray-600">Temporarily disable the platform</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Store Approvals Required</p>
              <p className="text-gray-600">New stores need admin approval</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Payment Gateway Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Gateway Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Stripe</p>
              <p className="text-gray-600">Enable Stripe payment processing</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="stripePublic">Stripe Public Key</Label>
              <Input id="stripePublic" placeholder="pk_live_..." />
            </div>
            <div>
              <Label htmlFor="stripeSecret">Stripe Secret Key</Label>
              <Input id="stripeSecret" type="password" placeholder="sk_live_..." />
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">PayPal</p>
              <p className="text-gray-600">Enable PayPal payment processing</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">STC Pay</p>
              <p className="text-gray-600">Enable STC Pay (Saudi Arabia)</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Commission Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Commission & Fees</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <Label htmlFor="commission">Platform Commission (%)</Label>
              <span className="text-gray-900">10%</span>
            </div>
            <Slider 
              id="commission"
              defaultValue={[10]} 
              max={30} 
              step={1}
            />
            <p className="text-gray-600 mt-2">Commission charged on each transaction</p>
          </div>

          <div>
            <Label htmlFor="minPayout">Minimum Payout Amount</Label>
            <Input id="minPayout" type="number" defaultValue="100" />
            <p className="text-gray-600 mt-2">Minimum amount required for store payouts</p>
          </div>

          <div>
            <Label htmlFor="payoutSchedule">Payout Schedule</Label>
            <Select defaultValue="biweekly">
              <SelectTrigger id="payoutSchedule">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="biweekly">Bi-weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* AI Settings */}
      <Card>
        <CardHeader>
          <CardTitle>AI Model Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="aiModel">AI Model Version</Label>
            <Select defaultValue="v2.1">
              <SelectTrigger id="aiModel">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="v2.1">v2.1 (Current)</SelectItem>
                <SelectItem value="v2.0">v2.0 (Stable)</SelectItem>
                <SelectItem value="v1.9">v1.9 (Legacy)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label htmlFor="confidence">Minimum Confidence Threshold (%)</Label>
              <span className="text-gray-900">85%</span>
            </div>
            <Slider 
              id="confidence"
              defaultValue={[85]} 
              max={100} 
              step={1}
            />
            <p className="text-gray-600 mt-2">Minimum confidence level for size recommendations</p>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Auto-retrain Model</p>
              <p className="text-gray-600">Automatically retrain with new data</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div>
            <Label htmlFor="apiEndpoint">AI API Endpoint</Label>
            <Input id="apiEndpoint" defaultValue="https://api.aifitstore.com/v2/predict" />
          </div>

          <div>
            <Label htmlFor="apiKey">AI API Key</Label>
            <Input id="apiKey" type="password" placeholder="Enter API key" />
          </div>
        </CardContent>
      </Card>

      {/* User Permissions */}
      <Card>
        <CardHeader>
          <CardTitle>User Permissions & Roles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Allow Customer Reviews</p>
              <p className="text-gray-600">Customers can review products and stores</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Store Dashboard Analytics</p>
              <p className="text-gray-600">Stores can view detailed analytics</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Store Product Limits</p>
              <p className="text-gray-600">Limit number of products per store</p>
            </div>
            <Switch />
          </div>

          <div>
            <Label htmlFor="maxProducts">Maximum Products per Store</Label>
            <Input id="maxProducts" type="number" defaultValue="1000" />
          </div>
        </CardContent>
      </Card>

      {/* Email & Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Email & Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="smtpHost">SMTP Host</Label>
            <Input id="smtpHost" placeholder="smtp.gmail.com" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="smtpPort">SMTP Port</Label>
              <Input id="smtpPort" type="number" defaultValue="587" />
            </div>
            <div>
              <Label htmlFor="smtpUser">SMTP Username</Label>
              <Input id="smtpUser" placeholder="noreply@aifitstore.com" />
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Send Welcome Emails</p>
              <p className="text-gray-600">Automatically send welcome emails to new users</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Order Confirmation Emails</p>
              <p className="text-gray-600">Send order confirmation to customers</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Reset to Defaults</Button>
        <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleSave}>
          Save All Settings
        </Button>
      </div>
    </div>
  );
}
