import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useNavigate } from 'react-router-dom';
import {
  Zap,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  DollarSign,
  BarChart3,
  Shield,
  Workflow,
  Settings
} from 'lucide-react';

const AIAutomation = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Workflow,
      title: 'End-to-End Process Automation',
      description: 'Automate complete business processes from data capture to decision execution across multiple systems.'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Reduce manual task time by 70-90% through intelligent automation of repetitive workflows.'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Lower operational costs significantly while improving accuracy and throughput.'
    },
    {
      icon: BarChart3,
      title: 'Scalability',
      description: 'Handle 10x workload increases without proportional resource increases through smart automation.'
    },
    {
      icon: Shield,
      title: 'Error Reduction',
      description: 'Eliminate human errors in repetitive tasks with consistent, reliable automated execution.'
    },
    {
      icon: Settings,
      title: 'Adaptive Intelligence',
      description: 'Automation that learns and improves over time, handling exceptions and edge cases intelligently.'
    }
  ];

  const useCases = [
    {
      title: 'Document Processing & Data Entry',
      description: 'Automatically extract, validate, and process information from invoices, contracts, forms, and documents using AI-powered OCR and NLP.'
    },
    {
      title: 'Customer Onboarding Automation',
      description: 'Streamline KYC verification, document collection, account setup, and welcome communications with intelligent workflow automation.'
    },
    {
      title: 'Report Generation & Distribution',
      description: 'Automate data collection, analysis, report creation, and distribution with customized formatting and scheduling.'
    },
    {
      title: 'Email & Communication Automation',
      description: 'Intelligently classify, route, and respond to emails and messages based on content, sentiment, and urgency.'
    }
  ];

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
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Zap className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900">
            AI Automation
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Transform repetitive tasks into intelligent workflows that run themselves, freeing your team for strategic work.
          </p>
        </div>
      </section>

      {/* What Is AI Automation Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center">
            What Is AI Automation?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              AI Automation combines artificial intelligence with business process automation to create intelligent systems that don't just execute tasks—they understand context, make decisions, and adapt to changing conditions. Unlike traditional automation that follows rigid if-then rules, AI automation can handle variability, exceptions, and unstructured data.
            </p>
            <p>
              At Adidar Technologies, we design and implement AI automation solutions that integrate seamlessly with your existing systems. Our automation tools leverage machine learning, natural language processing, and computer vision to automate complex workflows that previously required human judgment.
            </p>
            <p>
              From processing thousands of documents daily to orchestrating multi-step approval workflows, our AI automation solutions operate 24/7 with consistency, speed, and accuracy that manual processes simply cannot match.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center">
            Key Capabilities
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Powerful automation that drives measurable business impact
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center">
            Real-World Applications
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            See how AI automation transforms operations across industries
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 text-center">
            The Business Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl font-light text-cyan-600">70-90%</div>
                <div className="text-gray-900 font-medium">Time Reduction</div>
                <p className="text-gray-600 text-sm">On repetitive manual tasks</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl font-light text-cyan-600">50-70%</div>
                <div className="text-gray-900 font-medium">Cost Savings</div>
                <p className="text-gray-600 text-sm">Through operational efficiency</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl font-light text-cyan-600">99%+</div>
                <div className="text-gray-900 font-medium">Accuracy Rate</div>
                <p className="text-gray-600 text-sm">Eliminating human errors</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center">
            Our Implementation Process
          </h2>
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">1. Process Analysis & Opportunity Identification</h3>
                <p className="text-gray-600 leading-relaxed">
                  We map your current workflows, identify automation opportunities, and prioritize based on ROI and complexity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">2. Solution Design & Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Design intelligent automation workflows that integrate with your existing systems and handle exceptions gracefully.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">3. Development & Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build and train AI models, develop automation logic, and integrate with your technology stack.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">4. Testing & Validation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Thoroughly test automation accuracy, performance, and error handling before production deployment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">5. Deployment & Monitoring</h3>
                <p className="text-gray-600 leading-relaxed">
                  Roll out automation gradually, monitor performance metrics, and continuously optimize based on results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Ready to Automate with Intelligence?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's identify your highest-impact automation opportunities and build solutions that deliver immediate ROI.
          </p>
          <Button 
            onClick={() => navigate('/#contact')} 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg"
          >
            Start Your Automation Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;