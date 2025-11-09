import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

export function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-gray-900 dark:text-white mb-4">Terms of Service</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Last Updated: November 8, 2025</p>

        <Card className="dark:bg-gray-800 dark:border-gray-700 mb-6">
          <CardContent className="pt-6 prose dark:prose-invert max-w-none">
            <h2 className="text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-400">
              By accessing and using AI Fit Store, you accept and agree to be bound by the terms and provision 
              of this agreement. If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-gray-900 dark:text-white">2. Use of Service</h2>
            <p className="text-gray-600 dark:text-gray-400">
              You agree to use AI Fit Store only for lawful purposes. You are responsible for all activity 
              conducted through your account and must maintain the security of your account credentials.
            </p>

            <h2 className="text-gray-900 dark:text-white">3. AI Fit Technology</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our AI sizing recommendations are provided as a service to help you find better-fitting clothes. 
              While we strive for accuracy, we cannot guarantee perfect fit for every item. Size recommendations 
              are based on data provided by partner stores and your measurements.
            </p>

            <h2 className="text-gray-900 dark:text-white">4. User Content</h2>
            <p className="text-gray-600 dark:text-gray-400">
              When you upload photos or measurements, you retain all ownership rights. However, you grant us 
              a license to use this data to provide and improve our AI sizing service. We will never share 
              your personal photos or measurements with third parties without your consent.
            </p>

            <h2 className="text-gray-900 dark:text-white">5. Purchases and Payments</h2>
            <p className="text-gray-600 dark:text-gray-400">
              All purchases are subject to availability and acceptance. Prices are subject to change without 
              notice. We reserve the right to refuse or cancel any order. Payment processing is handled 
              securely through our payment partners.
            </p>

            <h2 className="text-gray-900 dark:text-white">6. Returns and Refunds</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Returns are handled according to each partner store's return policy. Generally, items can be 
              returned within 30 days of purchase. Refunds are processed within 5-10 business days after 
              we receive the returned item.
            </p>

            <h2 className="text-gray-900 dark:text-white">7. Intellectual Property</h2>
            <p className="text-gray-600 dark:text-gray-400">
              All content on AI Fit Store, including text, graphics, logos, and software, is the property 
              of AI Fit Store or its content suppliers and is protected by copyright laws.
            </p>

            <h2 className="text-gray-900 dark:text-white">8. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-400">
              AI Fit Store shall not be liable for any indirect, incidental, special, or consequential 
              damages arising out of or in connection with the use of our service.
            </p>

            <h2 className="text-gray-900 dark:text-white">9. Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We reserve the right to modify these terms at any time. We will notify users of any material 
              changes via email or through our platform. Continued use of the service after changes constitutes 
              acceptance of the new terms.
            </p>

            <h2 className="text-gray-900 dark:text-white">10. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-400">
              For questions about these Terms of Service, please contact us at legal@aifitstore.com
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
