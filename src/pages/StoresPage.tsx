import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Star, Upload } from 'lucide-react';
import { mockStores } from '../data/mockData';

export function StoresPage() {
  const [selectedStore, setSelectedStore] = useState<typeof mockStores[0] | null>(null);
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-gray-900 mb-8">Partner Stores</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="streetwear">Streetwear</SelectItem>
              <SelectItem value="formal">Formal</SelectItem>
              <SelectItem value="athletic">Athletic</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockStores.map((store) => (
            <Card key={store.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img 
                  src={store.logo} 
                  alt={store.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-gray-900 mb-2">{store.name}</h3>
                <p className="text-gray-600 mb-2">{store.category} • {store.country}</p>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-900">{store.rating}</span>
                  <span className="text-gray-600 ml-1">(234 reviews)</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setSelectedStore(store)}
                >
                  View Store
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Store Detail Modal */}
      <Dialog open={!!selectedStore} onOpenChange={() => setSelectedStore(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedStore?.name}</DialogTitle>
          </DialogHeader>
          
          {selectedStore && (
            <div className="space-y-6">
              <img 
                src={selectedStore.banner} 
                alt={selectedStore.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div>
                <h3 className="text-gray-900 mb-2">About</h3>
                <p className="text-gray-600">{selectedStore.about}</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-900">{selectedStore.rating} Rating</span>
                  <span className="text-gray-600">• {selectedStore.country}</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-gray-900 mb-4">Product Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['T-Shirts', 'Jeans', 'Jackets', 'Accessories'].map((cat) => (
                    <Card key={cat}>
                      <CardContent className="p-4 text-center">
                        <p className="text-gray-900">{cat}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-gray-900 mb-4">Size Chart Management</h3>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-gray-900">Upload Size Chart (CSV)</p>
                    <p className="text-gray-600">Upload your store's size chart for AI matching</p>
                  </div>
                  <Button>Upload CSV</Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
