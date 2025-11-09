import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-900 dark:text-white mb-4">{t('about')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">{t('aboutUs')}</Link></li>
              <li><Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">{t('careers')}</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">{t('press')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-white mb-4">{t('support')}</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">{t('contact')}</Link></li>
              <li><Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">{t('faq')}</Link></li>
              <li><Link to="/shipping" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">{t('shipping')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-white mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">{t('terms')}</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">{t('privacy')}</Link></li>
              <li><Link to="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">{t('cookies')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-white mb-4">{t('followUs')}</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>{t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}