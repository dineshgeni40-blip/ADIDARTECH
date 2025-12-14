import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useNavigate } from 'react-router-dom';
import {
  Network,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Brain,
  TrendingUp,
  Target,
  Database,
  Cpu,
  BarChart3
} from 'lucide-react';

const MachineLearning = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'Custom ML Models',
      description: 'Bespoke models trained on your data for your specific business problems and use cases.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends, predict outcomes, and anticipate customer behavior with high accuracy.'
    },
    {
      icon: Target,
      title: 'Classification & Segmentation',
      description: 'Automatically categorize data, segment customers, and identify patterns in complex datasets.'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines that collect, clean, transform, and prepare data for ML.'
    },
    {
      icon: Cpu,
      title: 'Model Optimization',
      description: 'Fine-tune models for optimal accuracy, speed, and resource efficiency in production.'
    },
    {
      icon: BarChart3,
      title: 'MLOps & Monitoring',
      description: 'Deploy, monitor, and maintain ML models with automated retraining and drift detection.'
    }
  ];

  const useCases = [
    {
      title: 'Demand Forecasting',
      description: 'Predict future demand with precision using historical data, seasonality, and external factors to optimize inventory and resource planning.'
    },
    {
      title: 'Churn Prediction',
      description: 'Identify customers at risk of churning before it happens, enabling proactive retention strategies and reducing customer loss.'
    },
    {
      title: 'Fraud Detection',
      description: 'Real-time anomaly detection to identify suspicious transactions, patterns, and behaviors with minimal false positives.'
    },
    {
      title: 'Recommendation Systems',
      description: 'Personalized product, content, or service recommendations that increase engagement, conversion, and customer lifetime value.'
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
              <Network className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900">
            Machine Learning Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Custom ML models that uncover insights, predict outcomes, and drive data-informed decisions.
          </p>
        </div>
      </section>

      {/* What Is Machine Learning Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center">
            What Is Machine Learning?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Machine Learning is the science of building systems that learn from data to make predictions, identify patterns, and improve performance over time without explicit programming. It's the foundation of modern AI, powering everything from recommendation engines to fraud detection systems.
            </p>
            <p>
              At Adidar Technologies, we specialize in building custom ML solutions tailored to your unique business challenges. We don't rely on generic off-the-shelf models—we train algorithms on your data, in your domain, to solve your specific problems with precision.
            </p>
            <p>
              Our ML expertise spans supervised learning (classification, regression), unsupervised learning (clustering, dimensionality reduction), reinforcement learning, time series forecasting, natural language processing, computer vision, and deep learning. We handle the entire ML lifecycle from data preparation to model deployment and monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center">
            Our ML Capabilities
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive machine learning services from concept to production
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
            See how ML drives business value across industries
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

      {/* ML Process */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 text-center">
            Our ML Development Process
          </h2>
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">1. Problem Definition & Data Assessment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clearly define business objectives, success metrics, and assess data availability, quality, and readiness for ML.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">2. Data Preparation & Feature Engineering</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clean, transform, and engineer features from raw data. Handle missing values, outliers, and create meaningful representations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">3. Model Selection & Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experiment with multiple algorithms, train models, tune hyperparameters, and validate performance using rigorous methodologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">4. Evaluation & Validation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Test models on holdout data, assess performance metrics, check for bias, and ensure generalization to new data.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">5. Deployment & Monitoring</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deploy models to production, set up monitoring for performance and data drift, and establish automated retraining pipelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 text-center">
            ML Technologies & Frameworks
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Frameworks</h3>
              <p className="text-gray-600">TensorFlow, PyTorch, Scikit-learn, XGBoost, LightGBM, Keras</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Languages</h3>
              <p className="text-gray-600">Python, R, Julia, SQL, Scala</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Platforms</h3>
              <p className="text-gray-600">AWS SageMaker, Google Vertex AI, Azure ML, Databricks</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Data Tools</h3>
              <p className="text-gray-600">Pandas, NumPy, Spark, Dask, Apache Airflow</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Visualization</h3>
              <p className="text-gray-600">Matplotlib, Seaborn, Plotly, Tableau, Power BI</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">MLOps</h3>
              <p className="text-gray-600">MLflow, Kubeflow, DVC, Weights & Biases, Neptune</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 text-center">
            Proven Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl font-light text-cyan-600">95%+</div>
                <div className="text-gray-900 font-medium">Model Accuracy</div>
                <p className="text-gray-600 text-sm">On production ML models</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl font-light text-cyan-600">30-50%</div>
                <div className="text-gray-900 font-medium">Cost Reduction</div>
                <p className="text-gray-600 text-sm">Through ML-driven optimization</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 text-center">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl font-light text-cyan-600">10x</div>
                <div className="text-gray-900 font-medium">Faster Insights</div>
                <p className="text-gray-600 text-sm">Compared to manual analysis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's build custom ML models that transform your data into actionable insights and competitive advantage.
          </p>
          <Button 
            onClick={() => navigate('/#contact')} 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg"
          >
            Start Your ML Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MachineLearning;
