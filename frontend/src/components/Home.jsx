import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PayNow from './PayNow';
import {
  Brain,
  Bot,
  Sparkles,
  Zap,
  Network,
  Lightbulb,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { services, portfolio, testimonials, stats, clients } from '../mock';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const iconMap = {
  brain: Brain,
  bot: Bot,
  sparkles: Sparkles,
  zap: Zap,
  network: Network,
  lightbulb: Lightbulb
};

const Home = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: "Message Sent!",
          description: response.data.message,
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.detail || "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_1cb238f1-67f4-4773-b5dd-94d6618d0eb9/artifacts/y3frjsns_adidar.png" 
              alt="Adidar Technologies" 
              className="h-20 md:h-24 w-auto"
              style={{ imageRendering: '-webkit-optimize-contrast', imageRendering: 'crisp-edges' }}
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-sm text-gray-700 hover:text-cyan-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm text-gray-700 hover:text-cyan-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('clients')} className="text-sm text-gray-700 hover:text-cyan-600 transition-colors">
              Clients
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm text-gray-700 hover:text-cyan-600 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm text-gray-700 hover:text-cyan-600 transition-colors">
              Testimonials
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant="outline"
              className="border-gray-300 hover:border-cyan-500"
            >
              Contact
            </Button>
            <PayNow />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="relative w-32 h-32 mx-auto mb-8 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
              <div className="relative w-full h-full border-4 border-cyan-500 rounded-full flex items-center justify-center">
                <Brain className="w-16 h-16 text-cyan-600" strokeWidth={1.5} />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-gray-900">
            Intelligence
            <br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Amplified</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Specialized AI solutions for the future. We build AI agents, co-pilots, and automation tools that transform businesses globally.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              onClick={() => scrollToSection('contact')} 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('services')} 
              size="lg" 
              variant="outline"
              className="border-gray-300 hover:border-cyan-500 hover:text-cyan-600 px-8 py-6 text-lg"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              const serviceLinks = {
                1: '/ai-product',
                2: '/ai-agents',
                3: '/ai-copilots',
                4: '/ai-automation',
                5: '/machine-learning',
                6: '/ai-product'
              };
              
              return (
                <Card 
                  key={service.id} 
                  className="group border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                  onClick={() => navigate(serviceLinks[service.id])}
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-light text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="pt-2 flex items-center text-cyan-600 group-hover:text-cyan-700">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900">
            About Adidar
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              At Adidar Technologies, we believe artificial intelligence is not just a tool—it's a transformation catalyst. We specialize exclusively in AI solutions, bringing deep expertise and innovative thinking to every project.
            </p>
            <p>
              Our global team of AI engineers, data scientists, and strategists work at the cutting edge of machine learning, natural language processing, and autonomous systems. We don't just build AI products; we craft intelligent experiences that adapt, learn, and scale.
            </p>
            <p>
              From Fortune 500 enterprises to ambitious startups, we partner with organizations worldwide to turn AI possibilities into measurable business outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-light text-gray-900">AI-First Approach</h3>
              <p className="text-gray-600">Every solution built with AI at its core</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-light text-gray-900">Global Expertise</h3>
              <p className="text-gray-600">Serving clients across continents</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-light text-gray-900">Proven Results</h3>
              <p className="text-gray-600">150+ successful AI deployments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id="clients" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900">
              Our Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading businesses across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {clients.map((client) => (
              <Card 
                key={client.id} 
                className="group border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="h-20 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-medium text-gray-900 mb-1">
                        {client.name}
                      </div>
                      <div className="text-sm text-cyan-600">
                        {client.location}
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">
                    {client.industry}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {client.description}
                  </p>
                  {client.website && (
                    <a 
                      href={client.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:text-cyan-700 text-sm inline-flex items-center"
                    >
                      Visit Website
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  )}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="text-xs text-gray-500 mb-2">Services Provided:</div>
                    <div className="flex flex-wrap gap-2">
                      {client.services.map((service, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900">
              Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real AI solutions delivering measurable impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project) => (
              <Card 
                key={project.id} 
                className="group border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-light text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading organizations worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <span className="text-2xl font-light text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm italic">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t border-gray-100 text-center">
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{testimonial.role}</div>
                    {testimonial.company && (
                      <div className="text-xs text-cyan-600 mt-2">
                        {testimonial.company}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900">
              Let's Build Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business with AI? Get in touch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">Our Global Offices</h3>
                
                {/* United Kingdom Office */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-start space-x-3 mb-3">
                    <MapPin className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 mb-2">United Kingdom</div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        50, Toronto Road, Gillingham<br />
                        ME7 2EN, Kent, United Kingdom
                      </p>
                      <a href="tel:+447440283178" className="text-cyan-600 hover:text-cyan-700 text-sm mt-2 inline-block">
                        +44 7440 283178
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Hyderabad Office */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-start space-x-3 mb-3">
                    <MapPin className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 mb-2">Hyderabad, India</div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        252A, 11th Cross, Western Hills<br />
                        Addagutta Society, KPHB<br />
                        Hyderabad – 500072
                      </p>
                      <a href="tel:+919944562638" className="text-cyan-600 hover:text-cyan-700 text-sm mt-2 inline-block">
                        +91-9944562638
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Chennai Office */}
                <div className="mb-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <MapPin className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 mb-2">Chennai, India</div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        ADIDAR TECH INDIA PVT LTD<br />
                        P. No. 2B, Kakkanji Street, Tharapakkam<br />
                        Pallavaram TK, Kanchipuram<br />
                        Chennai – 600128
                      </p>
                      <a href="tel:+919944562638" className="text-cyan-600 hover:text-cyan-700 text-sm mt-2 inline-block">
                        +91-9944562638
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Email</div>
                      <a href="mailto:contact@adidartechnologies.com" className="text-cyan-600 hover:text-cyan-700 text-sm">
                        contact@adidartechnologies.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <Input 
                      name="email"
                      type="email" 
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <Input 
                      name="company"
                      placeholder="Company Name" 
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <Textarea 
                      name="message"
                      placeholder="Tell us about your AI project..." 
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-cyan-500"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_1cb238f1-67f4-4773-b5dd-94d6618d0eb9/artifacts/y3frjsns_adidar.png" 
                alt="Adidar Technologies" 
                className="h-16 md:h-20 w-auto brightness-0 invert"
                style={{ imageRendering: '-webkit-optimize-contrast', imageRendering: 'crisp-edges' }}
              />
              <p className="text-gray-400 text-sm">
                Specialized AI solutions for the future.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">AI Products</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">AI Agents</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">Co-Pilots</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">Automation</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-cyan-400 transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-cyan-400 transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:contact@adidartechnologies.com" className="hover:text-cyan-400 transition-colors">contact@adidartechnologies.com</a></li>
                <li><a href="tel:+919944562638" className="hover:text-cyan-400 transition-colors">+91-9944562638</a></li>
                <li className="pt-2 text-xs">India • Singapore • UK • USA</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2025 Adidar Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;