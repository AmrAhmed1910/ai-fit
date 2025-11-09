import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

export function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Last Updated: November 8, 2025</p>

        <Card className="dark:bg-gray-800 dark:border-gray-700 mb-6">
          <CardContent className="pt-6 prose dark:prose-invert max-w-none">
            <h2 className="text-gray-900 dark:text-white">1. Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We collect information you provide directly to us, including:
            </p>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>Personal information (name, email, phone number)</li>
              <li>Body measurements and photos for AI analysis</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Shopping preferences and purchase history</li>
              <li>Device and usage information</li>
            </ul>

            <h2 className="text-gray-900 dark:text-white">2. How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We use the information we collect to:
            </p>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>Provide accurate AI-powered size recommendations</li>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your account and orders</li>
              <li>Improve our AI algorithms and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Detect and prevent fraud</li>
            </ul>

            <h2 className="text-gray-900 dark:text-white">3. Information Sharing</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>Partner stores (only order and shipping information)</li>
              <li>Service providers who assist our operations</li>
              <li>Law enforcement when required by law</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400">
              Your body measurements and photos are never shared with partner stores or third parties.
            </p>

            <h2 className="text-gray-900 dark:text-white">4. Data Security</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Restricted access to personal information</li>
              <li>Secure payment processing through PCI-compliant providers</li>
            </ul>

            <h2 className="text-gray-900 dark:text-white">5. Your Rights and Choices</h2>
            <p className="text-gray-600 dark:text-gray-400">
              You have the right to:
            </p>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>Access and download your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies (may affect functionality)</li>
            </ul>

            <h2 className="text-gray-900 dark:text-white">6. Cookies and Tracking</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We use cookies and similar technologies to improve your experience, analyze usage, and deliver 
              personalized content. You can control cookies through your browser settings.
            </p>

            <h2 className="text-gray-900 dark:text-white">7. Data Retention</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We retain your information for as long as your account is active or as needed to provide services. 
              You can request deletion of your data at any time through your account settings.
            </p>

            <h2 className="text-gray-900 dark:text-white">8. Children's Privacy</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our service is not intended for children under 13. We do not knowingly collect information from 
              children under 13. If you believe we have collected such information, please contact us.
            </p>

            <h2 className="text-gray-900 dark:text-white">9. International Data Transfers</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Your information may be transferred to and processed in countries other than your own. We ensure 
              appropriate safeguards are in place to protect your information.
            </p>

            <h2 className="text-gray-900 dark:text-white">10. Changes to Privacy Policy</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We may update this privacy policy from time to time. We will notify you of any material changes 
              via email or through our platform.
            </p>

            <h2 className="text-gray-900 dark:text-white">11. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400">
              For questions about this Privacy Policy or to exercise your rights, contact us at 
              privacy@aifitstore.com or through our contact page.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
