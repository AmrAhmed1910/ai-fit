import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { StoresPage } from './pages/StoresPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AIFitPage } from './pages/AIFitPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { UserAccountPage } from './pages/UserAccountPage';
import { StoreDashboardPage } from './pages/StoreDashboardPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { CookiePage } from './pages/CookiePage';
import { ShippingPage } from './pages/ShippingPage';
import { CareersPage } from './pages/CareersPage';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router basename={window.location.pathname.includes('.html') ? window.location.pathname : ''}>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/stores" element={<StoresPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/ai-fit" element={<AIFitPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/account" element={<UserAccountPage />} />
              <Route path="/store-dashboard" element={<StoreDashboardPage />} />
              <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/cookies" element={<CookiePage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/careers" element={<CareersPage />} />
            </Routes>
            <Toaster />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}