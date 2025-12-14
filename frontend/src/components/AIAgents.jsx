import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useNavigate } from 'react-router-dom';
import {
  Bot,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Brain,
  Network,
  Zap,
  Clock,
  Shield,
  TrendingUp
} from 'lucide-react';

const AIAgents = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'Autonomous agents that analyze data, learn patterns, and make informed decisions without human intervention.'
    },
    {
      icon: Network,
      title: 'Multi-Agent Systems',
      description: 'Coordinated networks of specialized agents working together to solve complex business problems.'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process and respond to events instantly, enabling immediate action on critical business scenarios.'
    },
    {
      icon: Clock,
      title: '24/7 Autonomous Operation',
      description: 'Agents work around the clock, handling tasks and making decisions even outside business hours.'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Built with enterprise-grade security and compliance standards for sensitive business operations.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Agents improve over time through reinforcement learning and feedback loops.'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support Automation',
      description: 'AI agents handle customer inquiries, resolve issues, escalate complex cases, and maintain conversation context across multiple channels.'
    },
    {
      title: 'Intelligent Task Orchestration',
      description: 'Coordinate complex workflows across systems, manage dependencies, and optimize task execution based on priorities and resources.'
    },
    {
      title: 'Predictive Monitoring & Alerting',
      description: 'Monitor systems and data streams, predict potential issues before they occur, and trigger automated remediation actions.'
    },
    {
      title: 'Personalized Content Delivery',
      description: 'Analyze user behavior and preferences to deliver personalized content, recommendations, and experiences at scale.'
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
              <Bot className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900">
            AI Agents
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Autonomous intelligent systems that think, act, and adapt to achieve your business goals without constant human oversight.
          </p>
        </div>
      </section>

      {/* What Are AI Agents Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center">
            What Are AI Agents?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              AI Agents are sophisticated software systems powered by artificial intelligence that can perceive their environment, make decisions, and take actions autonomously to achieve specific goals. Unlike traditional automation that follows rigid rules, AI agents adapt and learn from their experiences.
            </p>
            <p>
              At Adidar Technologies, we build multi-agent systems where specialized agents collaborate, communicate, and coordinate to solve complex business challenges. Our agents leverage cutting-edge technologies including large language models (LLMs), reinforcement learning, and advanced reasoning capabilities.
            </p>
            <p>
              These intelligent agents can handle everything from customer service interactions and data analysis to workflow orchestration and predictive decision-making—all while continuously improving through feedback and learning.
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
            Our AI agents are designed to deliver exceptional value across your organization
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
            See how AI agents transform businesses across industries
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

      {/* Our Approach */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center">
            Our Approach to Building AI Agents
          </h2>
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">1. Discovery & Goal Definition</h3>
                <p className="text-gray-600 leading-relaxed">
                  We begin by understanding your business objectives, workflows, and pain points to define clear goals for your AI agents.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">2. Agent Architecture Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  We design the agent architecture, defining roles, capabilities, communication protocols, and decision-making frameworks tailored to your needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">3. Development & Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team builds and trains agents using state-of-the-art AI models, integrating them seamlessly with your existing systems and data sources.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">4. Testing & Optimization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rigorous testing ensures agents perform reliably. We fine-tune behavior, optimize performance, and establish monitoring systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">5. Deployment & Continuous Improvement</h3>
                <p className="text-gray-600 leading-relaxed">
                  We deploy agents into production and establish feedback loops for continuous learning and improvement based on real-world performance.
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
            Ready to Deploy Intelligent Agents?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss how AI agents can transform your business operations and drive unprecedented efficiency.
          </p>
          <Button 
            onClick={() => navigate('/#contact')} 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg"
          >
            Start Your AI Agent Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIAgents;