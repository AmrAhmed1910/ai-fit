import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Star, Upload, Zap, ShoppingBag, TrendingUp, Store, UserCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockStores, mockProducts } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

export function LandingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 dark:text-white mb-6">
            {t('heroTitle')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {t('heroDescription')}
          </p>
          <Link to="/ai-fit">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              {t('tryAIFit')}
              <Zap className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 dark:text-white text-center mb-12">{t('howItWorks')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{t('measure')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('measureDesc')}</p>
              </CardContent>
            </Card>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{t('match')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('matchDesc')}</p>
              </CardContent>
            </Card>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{t('shop')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('shopDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-gray-900 dark:text-white">{t('featuredStores')}</h2>
            <Link to="/stores">
              <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">{t('viewAllStores')}</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockStores.map((store) => (
              <Card key={store.id} className="hover:shadow-lg transition-shadow dark:bg-gray-900 dark:border-gray-700">
                <CardContent className="pt-6">
                  <img 
                    src={store.logo} 
                    alt={store.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-gray-900 dark:text-white mb-2">{store.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{store.category}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-900 dark:text-white">{store.rating}</span>
                  </div>
                  <Link to="/stores">
                    <Button variant="outline" className="w-full mt-4 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                      {t('viewStore')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-gray-900 dark:text-white">{t('trendingProducts')}</h2>
            <Link to="/products">
              <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">{t('viewAllProducts')}</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockProducts.slice(0, 4).map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2 bg-teal-600 text-white px-2 py-1 rounded">
                      AI Fit
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-900 dark:text-white mb-1">{product.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{product.storeName}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 dark:text-white">${product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-gray-900 dark:text-white">{product.rating}</span>
                      </div>
                    </div>
                    <Link to={`/products/${product.id}`}>
                      <Button variant="outline" className="w-full mt-4 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                        {t('viewDetails')}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Access Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-center mb-4">{t('partnerWithUs')}</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            {t('partnerDesc')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Store Portal */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all dark:bg-white/5 dark:hover:bg-white/10">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white mb-2">{t('storeDashboard')}</h3>
                <p className="text-gray-300 mb-6">
                  {t('storeDashboardDesc')}
                </p>
                <Link to="/store-dashboard">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    {t('continueAsStore')}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Admin Portal */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all dark:bg-white/5 dark:hover:bg-white/10">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCog className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white mb-2">{t('adminDashboard')}</h3>
                <p className="text-gray-300 mb-6">
                  {t('adminDashboardDesc')}
                </p>
                <Link to="/admin-dashboard">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {t('continueAsAdmin')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}