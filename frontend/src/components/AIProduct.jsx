import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useNavigate } from 'react-router-dom';
import {
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Rocket,
  Users,
  Code,
  Layers,
  Gauge,
  RefreshCw
} from 'lucide-react';

const AIProduct = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Rocket,
      title: 'Full Product Lifecycle',
      description: 'From ideation to launch and beyond—we handle strategy, design, development, deployment, and maintenance.'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Products built with deep user research, intuitive interfaces, and seamless experiences that drive adoption.'
    },
    {
      icon: Code,
      title: 'Scalable Architecture',
      description: 'Cloud-native, microservices-based architecture that scales from MVP to millions of users.'
    },
    {
      icon: Layers,
      title: 'AI-First Approach',
      description: 'Intelligence woven into every feature, not bolted on as an afterthought.'
    },
    {
      icon: Gauge,
      title: 'Performance Optimized',
      description: 'Fast, responsive products with <200ms latency and 99.9% uptime guarantees.'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Innovation',
      description: 'Regular updates, feature releases, and improvements based on user feedback and market trends.'
    }
  ];

  const useCases = [
    {
      title: 'SaaS Platforms',
      description: 'Build subscription-based software platforms with AI-powered features, user management, billing, analytics, and enterprise integrations.'
    },
    {
      title: 'Mobile Applications',
      description: 'Native iOS and Android apps with offline capabilities, push notifications, and AI-driven personalization for exceptional mobile experiences.'
    },
    {
      title: 'Enterprise Tools',
      description: 'Internal tools and dashboards that streamline operations, provide real-time insights, and integrate with existing enterprise systems.'
    },
    {
      title: 'Consumer AI Products',
      description: 'Consumer-facing applications leveraging generative AI, computer vision, NLP, and recommendation systems for engaging experiences.'
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
              <Lightbulb className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900">
            AI Product Development
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            End-to-end development of intelligent products that delight users and drive business growth.
          </p>
        </div>
      </section>

      {/* What Is AI Product Development Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center">
            What Is AI Product Development?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              AI Product Development is the complete journey from concept to market-ready product, with artificial intelligence as the core differentiator. We don't just build software—we create intelligent experiences that learn, adapt, and improve over time.
            </p>
            <p>
              At Adidar Technologies, our product development process combines product strategy, user experience design, software engineering, AI/ML development, and DevOps into a unified workflow. We work as your extended product team, bringing both technical excellence and product thinking to every project.
            </p>
            <p>
              Whether you're a startup with a bold vision or an enterprise launching a new digital product, we build scalable, reliable, and user-loved products that leverage the latest AI capabilities—from generative AI and natural language processing to computer vision and predictive analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center">
            Our Product Development Approach
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive capabilities to bring your vision to life
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
            What We Build
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            From MVPs to enterprise-scale platforms
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

      {/* Development Process */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 text-center">
            Our Development Process
          </h2>
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">1. Discovery & Strategy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Define product vision, target users, key features, and success metrics. Conduct market research and competitive analysis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">2. UX/UI Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create user flows, wireframes, and high-fidelity designs. Build interactive prototypes and conduct user testing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">3. AI/ML Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Design AI architecture, train models, and build intelligent features that provide real value to users.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">4. Full-Stack Engineering</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build scalable backend services, responsive frontends, and mobile apps with clean, maintainable code.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">5. Testing & QA</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive testing including unit, integration, performance, security, and user acceptance testing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">6. Launch & Scale</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deploy to production, monitor performance, gather user feedback, and continuously improve the product.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 text-center">
            Technologies We Use
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">AI & ML</h3>
              <p className="text-gray-600">OpenAI GPT, Claude, Gemini, TensorFlow, PyTorch, Hugging Face, LangChain</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Backend</h3>
              <p className="text-gray-600">Python, Node.js, FastAPI, Django, PostgreSQL, MongoDB, Redis</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Frontend</h3>
              <p className="text-gray-600">React, Next.js, TypeScript, Tailwind CSS, React Native</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Cloud & DevOps</h3>
              <p className="text-gray-600">AWS, Google Cloud, Azure, Docker, Kubernetes, CI/CD</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Data & Analytics</h3>
              <p className="text-gray-600">BigQuery, Snowflake, Databricks, Mixpanel, Amplitude</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Mobile</h3>
              <p className="text-gray-600">React Native, iOS Swift, Android Kotlin, Flutter</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Ready to Build Your AI Product?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's turn your vision into a market-ready product that users love and investors notice.
          </p>
          <Button 
            onClick={() => navigate('/#contact')} 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg"
          >
            Start Your Product Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIProduct;