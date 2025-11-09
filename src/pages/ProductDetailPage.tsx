import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Star, ShoppingCart, Heart, Sparkles } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { toast } from 'sonner@2.0.3';

export function ProductDetailPage() {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    toast.success('Added to cart!');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-lg mb-4"
            />
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`${product.name} ${idx + 1}`}
                  className={`w-full h-24 object-cover rounded-lg cursor-pointer border-2 ${
                    selectedImage === idx ? 'border-teal-600' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.storeName}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) 
                        ? 'text-yellow-500 fill-yellow-500' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-900">{product.rating}</span>
              <span className="text-gray-600">(127 reviews)</span>
            </div>

            <div className="mb-6">
              <span className="text-gray-900">${product.price}</span>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="text-gray-900 mb-2 block">Select Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    className={selectedSize === size ? 'bg-teal-600 hover:bg-teal-700' : ''}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* AI Fit CTA */}
            <Card className="mb-6 border-teal-200 bg-teal-50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-teal-600" />
                    <div>
                      <p className="text-gray-900">Not sure about your size?</p>
                      <p className="text-gray-600">Try our AI Fit tool for personalized recommendations</p>
                    </div>
                  </div>
                  <Link to="/ai-fit">
                    <Button variant="outline" className="border-teal-600 text-teal-600">
                      Try AI Fit
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-4">
              <Button 
                className="flex-1 bg-teal-600 hover:bg-teal-700"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Store Info */}
            <Card className="mt-6">
              <CardContent className="p-4">
                <h3 className="text-gray-900 mb-2">Store Information</h3>
                <p className="text-gray-600 mb-2">{product.storeName}</p>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-900">4.8 Store Rating</span>
                </div>
                <Button variant="outline" className="w-full">
                  View Store
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
