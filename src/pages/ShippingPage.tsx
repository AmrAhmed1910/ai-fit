import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Truck, Package, MapPin, Clock } from 'lucide-react';

export function ShippingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-gray-900 dark:text-white mb-4">Shipping Information</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Learn about our shipping options, delivery times, and policies
          </p>
        </div>

        {/* Shipping Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="dark:bg-gray-800 dark:border-gray-700 text-center">
            <CardContent className="pt-6">
              <Truck className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto mb-4" />
              <h3 className="text-gray-900 dark:text-white mb-2">Standard Shipping</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">5-7 Business Days</p>
              <p className="text-gray-900 dark:text-white">$4.99</p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700 text-center">
            <CardContent className="pt-6">
              <Package className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-gray-900 dark:text-white mb-2">Express Shipping</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">2-3 Business Days</p>
              <p className="text-gray-900 dark:text-white">$9.99</p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700 text-center">
            <CardContent className="pt-6">
              <Clock className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-gray-900 dark:text-white mb-2">Next Day Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">1 Business Day</p>
              <p className="text-gray-900 dark:text-white">$19.99</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <Card className="dark:bg-gray-800 dark:border-gray-700 mb-6">
          <CardContent className="pt-6 prose dark:prose-invert max-w-none">
            <h2 className="text-gray-900 dark:text-white">Shipping Policies</h2>
            
            <h3 className="text-gray-900 dark:text-white">Free Shipping</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Enjoy free standard shipping on all orders over $50. This offer applies to orders shipped within 
              the continental United States.
            </p>

            <h3 className="text-gray-900 dark:text-white">Processing Time</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Orders are typically processed within 1-2 business days. You will receive a confirmation email 
              once your order has been shipped, which includes tracking information.
            </p>

            <h3 className="text-gray-900 dark:text-white">Delivery Time</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Delivery times begin after your order has been processed and shipped. Business days are Monday 
              through Friday, excluding holidays.
            </p>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>Standard Shipping: 5-7 business days</li>
              <li>Express Shipping: 2-3 business days</li>
              <li>Next Day Delivery: 1 business day (order before 2 PM EST)</li>
            </ul>

            <h3 className="text-gray-900 dark:text-white">International Shipping</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We currently ship to over 50 countries worldwide. International shipping costs and delivery 
              times vary by destination. Customers are responsible for any customs duties, taxes, or fees.
            </p>

            <h3 className="text-gray-900 dark:text-white">Order Tracking</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Once your order ships, you'll receive a tracking number via email. You can track your package 
              through our website or directly on the carrier's website.
            </p>

            <h3 className="text-gray-900 dark:text-white">Shipping Carriers</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We partner with reliable shipping carriers including:
            </p>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>USPS (United States Postal Service)</li>
              <li>UPS (United Parcel Service)</li>
              <li>FedEx</li>
              <li>DHL (International orders)</li>
            </ul>

            <h3 className="text-gray-900 dark:text-white">Multiple Items</h3>
            <p className="text-gray-600 dark:text-gray-400">
              When ordering from multiple partner stores, items will be shipped separately. Each store handles 
              its own fulfillment, so you may receive multiple packages with different tracking numbers.
            </p>

            <h3 className="text-gray-900 dark:text-white">Address Accuracy</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Please ensure your shipping address is correct and complete. We cannot be responsible for 
              packages delivered to incorrect addresses provided by the customer. If you need to change your 
              shipping address, contact us immediately after placing your order.
            </p>

            <h3 className="text-gray-900 dark:text-white">Delivery Issues</h3>
            <p className="text-gray-600 dark:text-gray-400">
              If your package is lost, damaged, or delayed beyond the expected delivery window, please contact 
              our customer support team at support@aifitstore.com. We'll work with the carrier to resolve the 
              issue as quickly as possible.
            </p>

            <h3 className="text-gray-900 dark:text-white">Holidays</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Please note that shipping and delivery times may be extended during peak holiday seasons. We 
              recommend placing orders early to ensure timely delivery.
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="pt-6 text-center">
            <MapPin className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto mb-4" />
            <h3 className="text-gray-900 dark:text-white mb-2">Need Help?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Have questions about shipping? Our support team is here to assist you.
            </p>
            <a href="/contact" className="text-teal-600 dark:text-teal-400 hover:underline">
              Contact Support →
            </a>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
