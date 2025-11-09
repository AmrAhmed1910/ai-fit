import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Upload, Loader2, CheckCircle, Sparkles } from 'lucide-react';
import { mockStores } from '../data/mockData';

export function AIFitPage() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [measurements, setMeasurements] = useState({
    height: '',
    weight: '',
    chest: '',
    waist: '',
    hips: '',
  });

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(3);
      }, 3000);
    }
  };

  const handleReset = () => {
    setStep(1);
    setMeasurements({
      height: '',
      weight: '',
      chest: '',
      waist: '',
      hips: '',
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">AI Fit Analysis</h1>
          <p className="text-gray-600">Get personalized size recommendations using AI</p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 1 ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
            </div>
            <div className={`w-24 h-1 ${step >= 2 ? 'bg-teal-600' : 'bg-gray-200'}`} />
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 2 ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
            </div>
            <div className={`w-24 h-1 ${step >= 3 ? 'bg-teal-600' : 'bg-gray-200'}`} />
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 3 ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              3
            </div>
          </div>
        </div>

        {/* Step 1: Input */}
        {step === 1 && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-gray-900 mb-6">Enter Your Measurements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input 
                    id="height"
                    type="number"
                    value={measurements.height}
                    onChange={(e) => setMeasurements({...measurements, height: e.target.value})}
                    placeholder="175"
                  />
                </div>
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input 
                    id="weight"
                    type="number"
                    value={measurements.weight}
                    onChange={(e) => setMeasurements({...measurements, weight: e.target.value})}
                    placeholder="70"
                  />
                </div>
                <div>
                  <Label htmlFor="chest">Chest (cm)</Label>
                  <Input 
                    id="chest"
                    type="number"
                    value={measurements.chest}
                    onChange={(e) => setMeasurements({...measurements, chest: e.target.value})}
                    placeholder="95"
                  />
                </div>
                <div>
                  <Label htmlFor="waist">Waist (cm)</Label>
                  <Input 
                    id="waist"
                    type="number"
                    value={measurements.waist}
                    onChange={(e) => setMeasurements({...measurements, waist: e.target.value})}
                    placeholder="80"
                  />
                </div>
                <div>
                  <Label htmlFor="hips">Hips (cm)</Label>
                  <Input 
                    id="hips"
                    type="number"
                    value={measurements.hips}
                    onChange={(e) => setMeasurements({...measurements, hips: e.target.value})}
                    placeholder="95"
                  />
                </div>
              </div>

              <div className="border-t pt-6 mb-6">
                <h3 className="text-gray-900 mb-4">Or Upload a Photo</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-600 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-900 mb-2">Upload a full-body photo</p>
                  <p className="text-gray-600">Our AI will analyze your measurements</p>
                </div>
              </div>

              <Button 
                className="w-full bg-teal-600 hover:bg-teal-700"
                onClick={handleNext}
              >
                Continue to Analysis
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Processing */}
        {step === 2 && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Loader2 className="w-16 h-16 text-teal-600 animate-spin mx-auto mb-6" />
                <h2 className="text-gray-900 mb-4">Analyzing Your Measurements</h2>
                <p className="text-gray-600">Our AI is matching your measurements with store size charts...</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Results */}
        {step === 3 && (
          <div className="space-y-6">
            <Card className="border-teal-200 bg-teal-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-teal-600" />
                  <h2 className="text-gray-900">Analysis Complete!</h2>
                </div>
                <p className="text-gray-600">Here are your personalized size recommendations from our partner stores:</p>
              </CardContent>
            </Card>

            <h3 className="text-gray-900">Your Best Fit Sizes</h3>

            {mockStores.map((store) => (
              <Card key={store.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <img 
                      src={store.logo} 
                      alt={store.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-2">{store.name}</h4>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <div>
                          <span className="text-gray-600">Shirts: </span>
                          <span className="text-gray-900">M (Medium)</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Pants: </span>
                          <span className="text-gray-900">32</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Jackets: </span>
                          <span className="text-gray-900">L (Large)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Sparkles className="w-4 h-4 text-teal-600" />
                          <span className="text-teal-600">95% Match Confidence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex gap-4">
              <Button 
                className="flex-1 bg-teal-600 hover:bg-teal-700"
                onClick={() => {}}
              >
                Save Measurement Profile
              </Button>
              <Button 
                variant="outline"
                onClick={handleReset}
              >
                Start Over
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
