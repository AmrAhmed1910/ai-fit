import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Briefcase, Code, Palette, TrendingUp, Users, Heart } from 'lucide-react';

export function CareersPage() {
  const openPositions = [
    {
      title: 'Senior Machine Learning Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Support',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-gray-900 dark:text-white mb-6">Join Our Team</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Help us revolutionize online shopping with AI. We're looking for talented, passionate individuals 
            who want to make a real impact in the fashion and technology industry.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="text-gray-900 dark:text-white text-center mb-12">Why Work at AI Fit Store?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6 text-center">
                <Code className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto mb-4" />
                <h3 className="text-gray-900 dark:text-white mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Work with the latest AI and machine learning technologies to solve real-world problems.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-gray-900 dark:text-white mb-2">Growth Opportunities</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fast-paced environment with clear paths for career advancement and skill development.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                <h3 className="text-gray-900 dark:text-white mb-2">Collaborative Culture</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Work with a talented, diverse team that values creativity and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-gray-900 dark:text-white text-center mb-12">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gray-900 dark:text-white mb-1">Health & Wellness</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Comprehensive health, dental, and vision insurance for you and your family
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gray-900 dark:text-white mb-1">Flexible Work</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Remote-friendly culture with flexible hours and unlimited PTO
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gray-900 dark:text-white mb-1">Equity & Bonuses</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Competitive salary, stock options, and performance bonuses
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Palette className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-gray-900 dark:text-white mb-1">Learning & Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Education stipend, conference attendance, and professional development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-gray-900 dark:text-white text-center mb-12">Open Positions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, idx) => (
              <Card key={idx} className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-gray-900 dark:text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                        <span>📁 {position.department}</span>
                        <span>📍 {position.location}</span>
                        <span>⏰ {position.type}</span>
                      </div>
                    </div>
                    <Button className="bg-teal-600 hover:bg-teal-700 md:w-auto w-full">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="dark:bg-gray-800 dark:border-gray-700 text-center">
          <CardContent className="pt-6">
            <h3 className="text-gray-900 dark:text-white mb-2">Don't see a position that fits?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We're always looking for exceptional talent. Send us your resume and let us know how you can contribute.
            </p>
            <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
              Send General Application
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
