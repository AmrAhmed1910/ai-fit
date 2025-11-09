import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Switch } from '../../components/ui/switch';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

export function StoreSettingsPage() {
  const handleSave = () => {
    toast.success('Settings saved successfully');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Store Settings</h2>
        <p className="text-gray-600">Manage your store profile and preferences</p>
      </div>

      {/* Store Profile */}
      <Card>
        <CardHeader>
          <CardTitle>Store Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="storeName">Store Name</Label>
            <Input id="storeName" defaultValue="Modern Threads" />
          </div>

          <div>
            <Label htmlFor="storeDescription">Description</Label>
            <Textarea 
              id="storeDescription" 
              defaultValue="Premium fashion store offering contemporary styles for the modern individual."
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Category</Label>
              <Select defaultValue="fashion">
                <SelectTrigger id="category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="streetwear">Streetwear</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                  <SelectItem value="athletic">Athletic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="country">Country</Label>
              <Select defaultValue="usa">
                <SelectTrigger id="country">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="france">France</SelectItem>
                  <SelectItem value="germany">Germany</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Store Logo</Label>
            <div className="flex items-center gap-4 mt-2">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400"
                alt="Store logo"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <Button variant="outline">Change Logo</Button>
            </div>
          </div>

          <div>
            <Label>Store Banner</Label>
            <div className="mt-2">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200"
                alt="Store banner"
                className="w-full h-32 rounded-lg object-cover"
              />
              <Button variant="outline" className="mt-2">Change Banner</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="contact@modernthreads.com" />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" defaultValue="123 Fashion Street, New York, NY 10001" />
          </div>

          <div>
            <Label htmlFor="website">Website</Label>
            <Input id="website" type="url" defaultValue="https://modernthreads.com" />
          </div>
        </CardContent>
      </Card>

      {/* Business Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Business Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="currency">Currency</Label>
            <Select defaultValue="usd">
              <SelectTrigger id="currency">
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

          <div>
            <Label htmlFor="taxId">Tax ID / VAT Number</Label>
            <Input id="taxId" placeholder="Enter your tax ID" />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Enable Tax Collection</p>
              <p className="text-gray-600">Automatically calculate and collect taxes</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Offer Free Shipping</p>
              <p className="text-gray-600">Free shipping on all orders</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Order Notifications</p>
              <p className="text-gray-600">Get notified when you receive new orders</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Low Stock Alerts</p>
              <p className="text-gray-600">Receive alerts when inventory is low</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Customer Reviews</p>
              <p className="text-gray-600">Get notified of new customer reviews</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Payout Notifications</p>
              <p className="text-gray-600">Updates about payouts and earnings</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Store Status */}
      <Card>
        <CardHeader>
          <CardTitle>Store Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Store Active</p>
              <p className="text-gray-600">Your store is visible to customers</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Vacation Mode</p>
              <p className="text-gray-600">Temporarily pause new orders</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleSave}>
          Save All Changes
        </Button>
      </div>
    </div>
  );
}
