import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

export function CookiePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-gray-900 dark:text-white mb-4">Cookie Policy</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Last Updated: November 8, 2025</p>

        <Card className="dark:bg-gray-800 dark:border-gray-700 mb-6">
          <CardContent className="pt-6 prose dark:prose-invert max-w-none">
            <h2 className="text-gray-900 dark:text-white">What Are Cookies?</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Cookies are small text files that are placed on your device when you visit our website. They 
              help us provide you with a better experience by remembering your preferences and understanding 
              how you use our site.
            </p>

            <h2 className="text-gray-900 dark:text-white">Types of Cookies We Use</h2>
            
            <h3 className="text-gray-900 dark:text-white">1. Essential Cookies</h3>
            <p className="text-gray-600 dark:text-gray-400">
              These cookies are necessary for the website to function properly. They enable core functionality 
              such as security, network management, and accessibility. You cannot opt-out of these cookies.
            </p>

            <h3 className="text-gray-900 dark:text-white">2. Performance Cookies</h3>
            <p className="text-gray-600 dark:text-gray-400">
              These cookies collect information about how visitors use our website, such as which pages are 
              visited most often. This data helps us improve the performance and user experience of our site.
            </p>

            <h3 className="text-gray-900 dark:text-white">3. Functionality Cookies</h3>
            <p className="text-gray-600 dark:text-gray-400">
              These cookies allow the website to remember choices you make (such as your language preference or 
              theme selection) and provide enhanced, personalized features.
            </p>

            <h3 className="text-gray-900 dark:text-white">4. Targeting/Advertising Cookies</h3>
            <p className="text-gray-600 dark:text-gray-400">
              These cookies are used to deliver content more relevant to you and your interests. They may be 
              used to deliver targeted advertising or to limit the number of times you see an advertisement.
            </p>

            <h2 className="text-gray-900 dark:text-white">Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b dark:border-gray-600">
                    <th className="text-left py-2 text-gray-900 dark:text-white">Cookie Name</th>
                    <th className="text-left py-2 text-gray-900 dark:text-white">Type</th>
                    <th className="text-left py-2 text-gray-900 dark:text-white">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-400">
                  <tr className="border-b dark:border-gray-700">
                    <td className="py-2">session_id</td>
                    <td className="py-2">Essential</td>
                    <td className="py-2">Maintains your session while using the site</td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="py-2">auth_token</td>
                    <td className="py-2">Essential</td>
                    <td className="py-2">Keeps you logged in to your account</td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="py-2">language_pref</td>
                    <td className="py-2">Functionality</td>
                    <td className="py-2">Remembers your language preference</td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="py-2">theme_mode</td>
                    <td className="py-2">Functionality</td>
                    <td className="py-2">Remembers your dark/light mode preference</td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="py-2">_ga</td>
                    <td className="py-2">Performance</td>
                    <td className="py-2">Google Analytics - tracks usage patterns</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-gray-900 dark:text-white">Managing Cookies</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Most web browsers allow you to control cookies through their settings. You can set your browser to:
            </p>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>Notify you when you receive a cookie</li>
              <li>Block all cookies</li>
              <li>Delete cookies after you close your browser</li>
              <li>Block third-party cookies</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400">
              Please note that blocking or deleting cookies may affect your ability to use certain features of 
              our website.
            </p>

            <h2 className="text-gray-900 dark:text-white">Third-Party Cookies</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We use third-party services that may set cookies on your device:
            </p>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>Google Analytics - for website analytics</li>
              <li>Payment processors - for secure payment processing</li>
              <li>Social media platforms - for social sharing features</li>
            </ul>

            <h2 className="text-gray-900 dark:text-white">Updates to This Policy</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for 
              other operational, legal, or regulatory reasons.
            </p>

            <h2 className="text-gray-900 dark:text-white">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400">
              If you have questions about our use of cookies, please contact us at privacy@aifitstore.com
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
