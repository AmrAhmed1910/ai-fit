import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { User, Package, Heart, CreditCard, Settings, Star } from 'lucide-react';
import { mockOrders, mockSavedItems } from '../data/mockData';
import { Link } from 'react-router-dom';

export function UserAccountPage() {
  const [orderFilter, setOrderFilter] = useState('all');

  const filteredOrders = orderFilter === 'all' 
    ? mockOrders 
    : mockOrders.filter(order => order.status.toLowerCase() === orderFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-gray-900 mb-8">My Account</h1>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Saved</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Payment</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-gray-900 mb-1">John Doe</h2>
                    <p className="text-gray-600">john.doe@example.com</p>
                  </div>
                </div>

                <h3 className="text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>

                <Button className="mt-6 bg-teal-600 hover:bg-teal-700">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <div className="mb-6">
              <Select value={orderFilter} onValueChange={setOrderFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter orders" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Orders</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="canceled">Canceled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-gray-900 mb-1">Order {order.id}</h3>
                        <p className="text-gray-600">Placed on {order.date}</p>
                      </div>
                      <Badge 
                        variant={order.status === 'Completed' ? 'default' : 'secondary'}
                        className={order.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {order.status}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4">
                      {order.products.map((product, idx) => (
                        <div key={idx} className="flex justify-between text-gray-600">
                          <span>{product.name} x{product.quantity}</span>
                          <span>${product.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-gray-900">Total: ${order.total.toFixed(2)}</span>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Saved Items Tab */}
          <TabsContent value="saved">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockSavedItems.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-gray-600 mb-2">{product.storeName}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-900">${product.price}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                      <Link to={`/products/${product.id}`}>
                        <Button variant="outline" className="w-full">
                          View Product
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-6">Saved Payment Methods</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-gray-400" />
                      <div>
                        <p className="text-gray-900">•••• •••• •••• 4242</p>
                        <p className="text-gray-600">Expires 12/25</p>
                      </div>
                    </div>
                    <Button variant="ghost">Remove</Button>
                  </div>
                </div>

                <Button variant="outline">
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-6">Account Settings</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-gray-900 mb-4">Change Password</h4>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Update Password
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-gray-900 mb-4">Notifications</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-900">Email Notifications</p>
                          <p className="text-gray-600">Receive updates about your orders</p>
                        </div>
                        <input type="checkbox" defaultChecked className="toggle" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-900">Promotional Emails</p>
                          <p className="text-gray-600">Get deals and special offers</p>
                        </div>
                        <input type="checkbox" className="toggle" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
