import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Badge } from '../../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { mockStoreProducts } from '../../data/mockData';
import { toast } from 'sonner@2.0.3';

export function ManageProductsPage() {
  const [products, setProducts] = useState(mockStoreProducts);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    toast.success('Product deleted successfully');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-gray-900 mb-1">Manage Products</h2>
          <p className="text-gray-600">Add, edit, or remove products from your store</p>
        </div>
        <Button 
          className="bg-teal-600 hover:bg-teal-700"
          onClick={() => setIsAddDialogOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search products..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="tshirts">T-Shirts</SelectItem>
            <SelectItem value="jeans">Jeans</SelectItem>
            <SelectItem value="jackets">Jackets</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 text-gray-900">Product</th>
                  <th className="text-left py-3 text-gray-900">Units Sold</th>
                  <th className="text-left py-3 text-gray-900">Revenue</th>
                  <th className="text-left py-3 text-gray-900">Stock</th>
                  <th className="text-left py-3 text-gray-900">Status</th>
                  <th className="text-left py-3 text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="py-3 text-gray-900">{product.name}</td>
                    <td className="py-3 text-gray-600">{product.unitsSold}</td>
                    <td className="py-3 text-gray-600">${product.revenue.toFixed(2)}</td>
                    <td className="py-3">
                      {product.stock < 20 ? (
                        <Badge variant="destructive">Low: {product.stock}</Badge>
                      ) : (
                        <span className="text-gray-600">{product.stock}</span>
                      )}
                    </td>
                    <td className="py-3">
                      <Badge>Active</Badge>
                    </td>
                    <td className="py-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add Product Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label htmlFor="productName">Product Name</Label>
                <Input id="productName" placeholder="Classic White T-Shirt" />
              </div>
              
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tshirts">T-Shirts</SelectItem>
                    <SelectItem value="jeans">Jeans</SelectItem>
                    <SelectItem value="jackets">Jackets</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="price">Price</Label>
                <Input id="price" type="number" placeholder="29.99" />
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Enter product description..."
                  rows={4}
                />
              </div>
              
              <div>
                <Label htmlFor="stock">Stock Quantity</Label>
                <Input id="stock" type="number" placeholder="100" />
              </div>
              
              <div>
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" placeholder="TS-WHT-001" />
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="sizes">Available Sizes</Label>
                <Input id="sizes" placeholder="XS, S, M, L, XL, XXL" />
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="colors">Available Colors</Label>
                <Input id="colors" placeholder="White, Black, Navy" />
              </div>
              
              <div className="col-span-2">
                <Label>Product Images</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button 
                className="bg-teal-600 hover:bg-teal-700"
                onClick={() => {
                  toast.success('Product added successfully');
                  setIsAddDialogOpen(false);
                }}
              >
                Add Product
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
