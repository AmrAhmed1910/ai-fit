import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    home: 'Home',
    stores: 'Stores',
    products: 'Products',
    aiFit: 'AI Fit',
    cart: 'Cart',
    account: 'Account',
    signIn: 'Sign In',
    
    // Hero
    heroTitle: 'Find Your Perfect Fit with AI',
    heroDescription: 'Shop smarter with AI-powered size recommendations. Connect with partner stores and discover clothes that fit you perfectly every time.',
    tryAIFit: 'Try AI Fit Now',
    
    // How It Works
    howItWorks: 'How It Works',
    measure: 'Measure',
    measureDesc: 'Upload a photo or enter your measurements for AI analysis',
    match: 'Match',
    matchDesc: 'Our AI matches your measurements with store size charts',
    shop: 'Shop',
    shopDesc: 'Get personalized size recommendations for every product',
    
    // Featured
    featuredStores: 'Featured Partner Stores',
    viewAllStores: 'View All Stores',
    trendingProducts: 'Trending Products',
    viewAllProducts: 'View All Products',
    viewStore: 'View Store',
    viewDetails: 'View Details',
    
    // Portal Access
    partnerWithUs: 'Partner With Us',
    partnerDesc: 'Join our platform as a store partner or manage your account through our specialized portals',
    storeDashboard: 'Store Dashboard',
    storeDashboardDesc: 'Manage your products, orders, and analytics. Upload size charts and track your performance.',
    continueAsStore: 'Continue as Store Owner',
    adminDashboard: 'Admin Dashboard',
    adminDashboardDesc: 'Platform administration, manage stores and users, monitor transactions and system settings.',
    continueAsAdmin: 'Continue as Administrator',
    
    // Footer
    about: 'About',
    aboutUs: 'About Us',
    careers: 'Careers',
    press: 'Press',
    support: 'Support',
    contact: 'Contact',
    faq: 'FAQ',
    shipping: 'Shipping',
    legal: 'Legal',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    followUs: 'Follow Us',
    allRightsReserved: '© 2025 AI Fit Store. All rights reserved.',
  },
  ar: {
    // Header
    home: 'الرئيسية',
    stores: 'المتاجر',
    products: 'المنتجات',
    aiFit: 'قياس AI',
    cart: 'السلة',
    account: 'الحساب',
    signIn: 'تسجيل الدخول',
    
    // Hero
    heroTitle: 'اعثر على المقاس المثالي بالذكاء الاصطناعي',
    heroDescription: 'تسوق بذكاء مع توصيات المقاس المدعومة بالذكاء الاصطناعي. تواصل مع المتاجر الشريكة واكتشف الملابس التي تناسبك تمامًا في كل مرة.',
    tryAIFit: 'جرّب قياس AI الآن',
    
    // How It Works
    howItWorks: 'كيف يعمل',
    measure: 'القياس',
    measureDesc: 'قم بتحميل صورة أو أدخل قياساتك لتحليل الذكاء الاصطناعي',
    match: 'المطابقة',
    matchDesc: 'يطابق الذكاء الاصطناعي قياساتك مع جداول مقاسات المتاجر',
    shop: 'التسوق',
    shopDesc: 'احصل على توصيات مقاس شخصية لكل منتج',
    
    // Featured
    featuredStores: 'المتاجر الشريكة المميزة',
    viewAllStores: 'عرض جميع المتاجر',
    trendingProducts: 'المنتجات الرائجة',
    viewAllProducts: 'عرض جميع المنتجات',
    viewStore: 'عرض المتجر',
    viewDetails: 'عرض التفاصيل',
    
    // Portal Access
    partnerWithUs: 'كن شريكاً معنا',
    partnerDesc: 'انضم إلى منصتنا كمتجر شريك أو قم بإدارة حسابك من خلال بواباتنا المتخصصة',
    storeDashboard: 'لوحة تحكم المتجر',
    storeDashboardDesc: 'إدارة منتجاتك وطلباتك وتحليلاتك. قم بتحميل جداول المقاسات وتتبع أدائك.',
    continueAsStore: 'المتابعة كمالك متجر',
    adminDashboard: 'لوحة تحكم المسؤول',
    adminDashboardDesc: 'إدارة المنصة، إدارة المتاجر والمستخدمين، مراقبة المعاملات وإعدادات النظام.',
    continueAsAdmin: 'المتابعة كمسؤول',
    
    // Footer
    about: 'حول',
    aboutUs: 'من نحن',
    careers: 'الوظائف',
    press: 'الصحافة',
    support: 'الدعم',
    contact: 'اتصل بنا',
    faq: 'الأسئلة الشائعة',
    shipping: 'الشحن',
    legal: 'قانوني',
    terms: 'شروط الخدمة',
    privacy: 'سياسة الخصوصية',
    cookies: 'سياسة ملفات تعريف الارتباط',
    followUs: 'تابعنا',
    allRightsReserved: '© 2025 متجر AI Fit. جميع الحقوق محفوظة.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Apply RTL for Arabic
    if (language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
