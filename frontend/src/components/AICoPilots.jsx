import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  Lightbulb,
  Target,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';

const AICoPilots = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamlessly integrate AI assistance into human workflows, augmenting capabilities rather than replacing them.'
    },
    {
      icon: Lightbulb,
      title: 'Contextual Intelligence',
      description: 'Co-pilots understand context, history, and intent to provide relevant suggestions and insights.'
    },
    {
      icon: Target,
      title: 'Task-Specific Assistance',
      description: 'Specialized co-pilots trained for specific domains like coding, writing, analysis, or design.'
    },
    {
      icon: Zap,
      title: 'Real-Time Suggestions',
      description: 'Get instant recommendations, autocomplete, and intelligent predictions as you work.'
    },
    {
      icon: Shield,
      title: 'Privacy & Control',
      description: 'You maintain full control with transparent AI suggestions that you can accept, modify, or reject.'
    },
    {
      icon: TrendingUp,
      title: 'Productivity Amplification',
      description: 'Increase output quality and speed by 40-60% through intelligent automation of routine tasks.'
    }
  ];

  const useCases = [
    {
      title: 'Code Generation & Review',
      description: 'AI co-pilots assist developers by generating code snippets, suggesting optimizations, catching bugs, and explaining complex logic in real-time.'
    },
    {
      title: 'Content Creation Assistant',
      description: 'Help writers, marketers, and creators generate ideas, draft content, refine messaging, and maintain brand voice consistency.'
    },
    {
      title: 'Data Analysis Companion',
      description: 'Guide analysts through data exploration, suggest relevant visualizations, identify patterns, and generate insights from complex datasets.'
    },
    {
      title: 'Sales & Customer Success',
      description: 'Provide sales teams with real-time customer insights, conversation suggestions, deal risk analysis, and next-best-action recommendations.'
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
              <Sparkles className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900">
            AI Co-Pilots
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Intelligent assistants that work alongside your team, amplifying human capabilities and accelerating every task.
          </p>
        </div>
      </section>

      {/* What Are AI Co-Pilots Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center">
            What Are AI Co-Pilots?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              AI Co-Pilots are intelligent assistants embedded directly into your workflows, providing real-time suggestions, automating repetitive tasks, and enhancing human decision-making. Think of them as your expert teammate who's always available, never tired, and continuously learning.
            </p>
            <p>
              Unlike standalone AI tools that require context switching, co-pilots work within your existing applications and processes. They understand what you're trying to achieve, anticipate your needs, and offer relevant assistance at exactly the right moment.
            </p>
            <p>
              At Adidar Technologies, we build custom AI co-pilots tailored to your specific industry, workflows, and business processes. From helping developers write better code faster to assisting analysts in uncovering insights from data, our co-pilots become indispensable members of your team.
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
            Empower your team with AI that understands and enhances their work
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
            See how AI co-pilots transform productivity across functions
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

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 text-center">
            Why Choose AI Co-Pilots?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-gray-900">For Your Team</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Reduce time spent on repetitive tasks by 50%+</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Focus on high-value creative and strategic work</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Learn best practices through AI suggestions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Make faster, more informed decisions</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-gray-900">For Your Business</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Increase output quality and consistency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Accelerate onboarding and training</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Scale operations without proportional headcount</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Maintain competitive advantage through innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Ready to Amplify Your Team?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's build an AI co-pilot tailored to your workflows and optimized for your team's success.
          </p>
          <Button 
            onClick={() => navigate('/#contact')} 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg"
          >
            Start Your Co-Pilot Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AICoPilots;