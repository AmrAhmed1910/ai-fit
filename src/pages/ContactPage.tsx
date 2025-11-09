import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">support@aifitstore.com</p>
              <p className="text-gray-600 dark:text-gray-400">We'll respond within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">+1 (555) 123-4567</p>
              <p className="text-gray-600 dark:text-gray-400">Mon-Fri, 9am-6pm EST</p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Visit Us</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">123 Tech Street</p>
              <p className="text-gray-600 dark:text-gray-400">San Francisco, CA 94105</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <h2 className="text-gray-900 dark:text-white">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 dark:text-white mb-2">First Name</label>
                  <Input 
                    required 
                    placeholder="John"
                    className="dark:bg-gray-900 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 dark:text-white mb-2">Last Name</label>
                  <Input 
                    required 
                    placeholder="Doe"
                    className="dark:bg-gray-900 dark:border-gray-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white mb-2">Email</label>
                <Input 
                  type="email" 
                  required 
                  placeholder="john@example.com"
                  className="dark:bg-gray-900 dark:border-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white mb-2">Subject</label>
                <Input 
                  required 
                  placeholder="How can we help?"
                  className="dark:bg-gray-900 dark:border-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white mb-2">Message</label>
                <Textarea 
                  required 
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  className="dark:bg-gray-900 dark:border-gray-600"
                />
              </div>

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
