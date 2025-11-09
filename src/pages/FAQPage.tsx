import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Card, CardContent } from '../components/ui/card';

export function FAQPage() {
  const faqs = [
    {
      category: 'AI Fit Technology',
      questions: [
        {
          q: 'How does the AI Fit technology work?',
          a: 'Our AI analyzes your body measurements from photos or manual input and matches them against our database of size charts from partner stores. The algorithm uses machine learning to continuously improve accuracy based on feedback from thousands of customers.',
        },
        {
          q: 'How accurate is the AI sizing recommendation?',
          a: 'Our AI has a 96% accuracy rate. We achieve this through continuous learning from customer feedback, returns data, and partnerships with stores to validate size charts.',
        },
        {
          q: 'Do I need to upload a photo?',
          a: 'No, you can either upload a photo for automatic measurement or manually enter your measurements. However, photo upload tends to be more accurate and convenient.',
        },
      ],
    },
    {
      category: 'Shopping & Orders',
      questions: [
        {
          q: 'Can I return items if they don\'t fit?',
          a: 'Yes, all items can be returned within 30 days of purchase. However, our AI recommendations are so accurate that our return rate is less than 4%.',
        },
        {
          q: 'How long does shipping take?',
          a: 'Shipping times vary by store and location, but most orders arrive within 3-7 business days. You\'ll receive tracking information once your order ships.',
        },
        {
          q: 'Can I shop from multiple stores at once?',
          a: 'Yes! You can add items from different partner stores to your cart. Items will be shipped separately from each store.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.',
        },
      ],
    },
    {
      category: 'Account & Privacy',
      questions: [
        {
          q: 'Is my data secure?',
          a: 'Absolutely. We use industry-standard encryption and never share your personal information or measurements with third parties. Your data is used solely to provide size recommendations.',
        },
        {
          q: 'Do I need an account to shop?',
          a: 'No, you can check out as a guest. However, creating an account saves your measurements and preferences for faster future shopping.',
        },
        {
          q: 'Can I delete my account and data?',
          a: 'Yes, you can delete your account and all associated data at any time from your account settings.',
        },
      ],
    },
    {
      category: 'For Store Partners',
      questions: [
        {
          q: 'How do I become a partner store?',
          a: 'Click on "Continue as Store Owner" on our homepage and complete the registration process. You\'ll need to upload your size charts in CSV format and provide basic business information.',
        },
        {
          q: 'What is the commission structure?',
          a: 'We charge a 10% commission on all sales made through the platform. There are no upfront costs or monthly fees.',
        },
        {
          q: 'How do I upload my size charts?',
          a: 'From your store dashboard, navigate to "Size Charts" and upload a CSV file with your sizing information. We support standard sizing formats and provide templates.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Find answers to common questions about AI Fit Store
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, idx) => (
            <Card key={idx} className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6">
                <h2 className="text-gray-900 dark:text-white mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, qIdx) => (
                    <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                      <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-400">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="pt-6 text-center">
            <h3 className="text-gray-900 dark:text-white mb-2">Still have questions?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our support team is here to help you
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
