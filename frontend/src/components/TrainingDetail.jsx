import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, CheckCircle2, Clock, Award, Briefcase, BookOpen, Users, IndianRupee } from 'lucide-react';
import { trainings } from '../mock';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const COURSE_FEE = 25000; // ₹25,000

const TrainingDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const training = trainings.find(t => t.slug === slug);

  if (!training) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Training Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    navigate('/#contact');
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load Razorpay SDK');
      }

      // Create order
      const orderResponse = await axios.post(`${API}/payment/create-order`, {
        amount: COURSE_FEE * 100, // Convert to paise
        currency: 'INR',
        receipt: `training_${training.slug}_${Date.now()}`
      });

      const { order_id, key_id } = orderResponse.data;

      // Razorpay options
      const options = {
        key: key_id,
        amount: COURSE_FEE * 100,
        currency: 'INR',
        name: 'ADIDAR TECH INDIA PRIVATE LIMITED',
        description: `${training.title} - Training Program`,
        order_id: order_id,
        handler: async function (response) {
          try {
            const verifyResponse = await axios.post(`${API}/payment/verify`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });

            if (verifyResponse.data.success) {
              toast({
                title: "Payment Successful!",
                description: `Enrollment confirmed for ${training.title}. We'll contact you shortly.`,
              });
              setTimeout(() => navigate('/#contact'), 2000);
            }
          } catch (error) {
            toast({
              title: "Payment Verification Failed",
              description: error.response?.data?.detail || "Please contact support",
              variant: "destructive"
            });
          }
        },
        prefill: {
          name: '',
          email: 'contact@adidartechnologies.com',
          contact: '+919944562638'
        },
        notes: {
          training: training.title,
          slug: training.slug
        },
        theme: {
          color: '#06b6d4'
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      setIsProcessing(false);

    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: error.response?.data?.detail || "Something went wrong. Please try again.",
        variant: "destructive"
      });
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="https://customer-assets.emergentagent.com/job_1cb238f1-67f4-4773-b5dd-94d6618d0eb9/artifacts/y3frjsns_adidar.png" 
              alt="Adidar Technologies" 
              className="h-20 md:h-24 w-auto"
              style={{ imageRendering: '-webkit-optimize-contrast', imageRendering: 'crisp-edges' }}
            />
          </div>
          <Button 
            onClick={() => navigate('/')} 
            variant="outline"
            className="border-gray-300 hover:border-cyan-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-4 mb-4">
            <span className="px-4 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full">{training.level}</span>
            <span className="px-4 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">{training.duration}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900">
            {training.title}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {training.overview}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            {training.certification && (
              <div className="flex items-center space-x-2 text-gray-700">
                <Award className="w-5 h-5 text-cyan-600" />
                <span>Certification Included</span>
              </div>
            )}
            {training.placementSupport && (
              <div className="flex items-center space-x-2 text-gray-700">
                <Briefcase className="w-5 h-5 text-cyan-600" />
                <span>Placement Support</span>
              </div>
            )}
            <div className="flex items-center space-x-2 text-gray-700">
              <Clock className="w-5 h-5 text-cyan-600" />
              <span>3 Months Duration</span>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <div className="text-center mb-4">
              <div className="text-sm text-gray-600 mb-2">Course Fee</div>
              <div className="flex items-center justify-center space-x-2">
                <IndianRupee className="w-8 h-8 text-cyan-600" />
                <span className="text-4xl font-light text-gray-900">25,000</span>
              </div>
              <div className="text-sm text-gray-500 mt-2">One-time payment • No hidden charges</div>
            </div>
            <Button 
              onClick={handlePayment}
              disabled={isProcessing}
              size="lg"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
            >
              {isProcessing ? 'Processing...' : 'Enroll Now & Pay'}
            </Button>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Why Choose This Training?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {training.highlights.map((highlight, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Course Curriculum</h2>
            <p className="text-xl text-gray-600">Comprehensive coverage of all essential topics</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {training.curriculum.map((module, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-medium">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-medium">{module}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">What You'll Achieve</h2>
          <div className="space-y-4">
            {training.outcomes.map((outcome, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <BookOpen className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-3">Prerequisites</h3>
                  <p className="text-gray-700 text-lg">{training.prerequisites}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of professionals who've transformed their careers with our training programs.
          </p>
          
          <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mb-6">
            <div className="text-center mb-4">
              <div className="text-sm text-gray-600 mb-2">Course Fee</div>
              <div className="flex items-center justify-center space-x-2">
                <IndianRupee className="w-6 h-6 text-cyan-600" />
                <span className="text-3xl font-light text-gray-900">25,000</span>
              </div>
            </div>
            <Button 
              onClick={handlePayment}
              disabled={isProcessing}
              size="lg"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
            >
              {isProcessing ? 'Processing...' : 'Pay Now & Enroll'}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={scrollToContact} 
              size="lg" 
              variant="outline"
              className="border-gray-300 hover:border-cyan-500 px-8 py-6"
            >
              Request Callback
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Limited seats available • Next batch starts soon
          </p>
        </div>
      </section>
    </div>
  );
};

export default TrainingDetail;
