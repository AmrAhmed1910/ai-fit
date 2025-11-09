import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Sparkles, Target, Users, TrendingUp } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-gray-900 dark:text-white mb-6">About AI Fit Store</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're revolutionizing online shopping by combining artificial intelligence with fashion retail. 
            Our mission is to eliminate the guesswork from online clothing purchases and ensure every customer 
            finds their perfect fit, every time.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-2">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    To make online clothing shopping as reliable and personalized as in-store experiences 
                    through cutting-edge AI technology and accurate size matching.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-2">Our Vision</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    To become the world's leading AI-powered fashion platform, where every shopper enjoys 
                    a personalized, confident, and sustainable shopping experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-gray-900 dark:text-white mb-6">Our Story</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Founded in 2023, AI Fit Store was born from a simple frustration: too many online purchases 
              ending in disappointment due to poor fit. Our founders, a team of AI engineers and fashion 
              retail veterans, recognized that the solution lay in combining advanced machine learning with 
              traditional garment sizing data.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We developed a proprietary AI algorithm that analyzes body measurements from simple photos 
              and matches them against thousands of size charts from partner stores. Today, we serve over 
              15,000 customers and work with 250+ partner stores worldwide.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="dark:bg-gray-800 dark:border-gray-700 text-center">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto mb-4" />
              <div className="text-gray-900 dark:text-white mb-2">15,000+</div>
              <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700 text-center">
            <CardContent className="pt-6">
              <TrendingUp className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <div className="text-gray-900 dark:text-white mb-2">250+</div>
              <p className="text-gray-600 dark:text-gray-400">Partner Stores</p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700 text-center">
            <CardContent className="pt-6">
              <Sparkles className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <div className="text-gray-900 dark:text-white mb-2">96%</div>
              <p className="text-gray-600 dark:text-gray-400">AI Accuracy Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-gray-900 dark:text-white mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6">
                <h3 className="text-gray-900 dark:text-white mb-2">Innovation First</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We continuously improve our AI algorithms to provide the most accurate sizing recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6">
                <h3 className="text-gray-900 dark:text-white mb-2">Customer Obsessed</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every decision we make is guided by what's best for our customers and their shopping experience.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6">
                <h3 className="text-gray-900 dark:text-white mb-2">Sustainability</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  By reducing returns through better fit prediction, we help minimize fashion's environmental impact.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6">
                <h3 className="text-gray-900 dark:text-white mb-2">Partnership</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We believe in growing together with our partner stores, creating mutual value and success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
