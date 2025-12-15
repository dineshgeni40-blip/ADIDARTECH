// Mock data for Adidar Technologies website

export const services = [
  {
    id: 1,
    title: "AI Product Development",
    description: "End-to-end development of intelligent products powered by cutting-edge AI models. From concept to deployment, we build AI solutions that scale.",
    icon: "brain"
  },
  {
    id: 2,
    title: "AI Agents",
    description: "Autonomous AI agents that think, act, and adapt. We create intelligent agents that automate complex workflows and make decisions in real-time.",
    icon: "bot"
  },
  {
    id: 3,
    title: "AI Co-Pilots",
    description: "Enhance human capabilities with AI-powered assistants. Co-pilots that understand context, assist decision-making, and amplify productivity.",
    icon: "sparkles"
  },
  {
    id: 4,
    title: "AI Automation Tools",
    description: "Streamline operations with intelligent automation. From data processing to customer interactions, we automate what matters.",
    icon: "zap"
  },
  {
    id: 5,
    title: "Machine Learning Solutions",
    description: "Custom ML models trained on your data. Predictive analytics, pattern recognition, and intelligent insights that drive business value.",
    icon: "network"
  },
  {
    id: 6,
    title: "AI Consulting & Strategy",
    description: "Navigate your AI transformation with expert guidance. We help you identify opportunities, build roadmaps, and implement AI at scale.",
    icon: "lightbulb"
  }
];

export const clients = [
  {
    id: 1,
    name: 'JK Automotive Private Limited',
    location: 'Chennai, India',
    industry: 'Automotive Parts & E-Commerce',
    description: 'Leading automobile spare parts supplier specializing in high-quality components for major automotive brands.',
    website: 'https://jkautomotive.co.in',
    services: ['AI Product Development', 'E-Commerce Solutions']
  },
  {
    id: 2,
    name: 'Sri Yanam Steels Private Limited',
    location: 'Pondicherry, India',
    industry: 'Iron & Steel Castings',
    description: 'Established steel manufacturing company with over 40 years of expertise in iron and steel castings.',
    services: ['AI Automation', 'Process Optimization']
  },
  {
    id: 3,
    name: 'Sri AquaTech India Private Limited',
    location: 'India',
    industry: 'Water Technology & Solutions',
    description: 'Innovative water technology solutions provider focused on sustainable aquaculture and water management.',
    services: ['AI Solutions', 'Data Analytics']
  }
];

export const portfolio = [
  {
    id: 1,
    title: "Enterprise AI Agent Platform",
    category: "AI Agents",
    description: "Multi-agent system for Fortune 500 company automating customer support across 12 languages."
  },
  {
    id: 2,
    title: "Healthcare Diagnostic Co-Pilot",
    category: "AI Co-Pilots",
    description: "AI assistant helping radiologists detect anomalies 40% faster with 99.2% accuracy."
  },
  {
    id: 3,
    title: "Financial Trading Automation",
    category: "AI Automation",
    description: "Real-time market analysis and automated trading system processing 10M+ data points daily."
  },
  {
    id: 4,
    title: "Legal Document Intelligence",
    category: "AI Product",
    description: "Contract analysis platform reducing legal review time from weeks to hours."
  },
  {
    id: 5,
    title: "Manufacturing Quality AI",
    category: "Machine Learning",
    description: "Computer vision system detecting defects with 99.7% precision, saving $2M annually."
  },
  {
    id: 6,
    title: "Retail Personalization Engine",
    category: "AI Product",
    description: "Recommendation system increasing conversion rates by 67% for global e-commerce brand."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Director, JK Automotive Private Limited",
    company: "JK Automotive Private Limited, Chennai",
    content: "Adidar Technologies developed an exceptional AI-powered e-commerce platform for our automotive spare parts business. Their solution streamlined our inventory management and significantly improved our customer experience. The team's expertise in AI product development is truly impressive."
  },
  {
    id: 2,
    name: "Venkatesh Reddy",
    role: "Managing Director, Sri Yanam Steels",
    company: "Sri Yanam Steels Private Limited, Pondicherry",
    content: "The AI automation solutions implemented by Adidar have revolutionized our steel casting operations. We've seen a 40% improvement in process efficiency and significant reduction in quality control issues. Their team understood our manufacturing needs perfectly."
  },
  {
    id: 3,
    name: "Suresh Babu",
    role: "CEO, Sri AquaTech India",
    company: "Sri AquaTech India Private Limited",
    content: "Adidar's AI analytics platform transformed how we analyze water quality data and manage our aquaculture operations. Their innovative approach to data science and machine learning has given us a competitive edge in the market. Highly recommended!"
  }
];

export const stats = [
  {
    id: 1,
    number: "150+",
    label: "AI Projects Delivered"
  },
  {
    id: 2,
    number: "40+",
    label: "Global Clients"
  },
  {
    id: 3,
    number: "99.2%",
    label: "Client Satisfaction"
  },
  {
    id: 4,
    number: "24/7",
    label: "Global Support"
  }
];

export const trainings = [
  {
    id: 1,
    slug: 'ai-fundamentals',
    title: 'AI Fundamentals & Applications',
    shortDesc: 'Master the basics of Artificial Intelligence and its real-world applications',
    duration: '3 Months',
    level: 'Beginner',
    certification: true,
    placementSupport: true,
    overview: 'Comprehensive introduction to AI concepts, techniques, and practical applications. Perfect for beginners looking to start a career in AI.',
    highlights: [
      'Industry-recognized certification',
      '100% placement assistance',
      'Live projects & case studies',
      'Expert instructors from top AI companies',
      'Flexible weekend & weekday batches'
    ],
    curriculum: [
      'Introduction to AI & Machine Learning',
      'Python Programming for AI',
      'Data Analysis & Visualization',
      'Supervised & Unsupervised Learning',
      'Neural Networks Basics',
      'AI Tools & Frameworks (TensorFlow, PyTorch)',
      'Real-world AI Projects',
      'Interview Preparation & Soft Skills'
    ],
    prerequisites: 'Basic computer knowledge. No prior programming experience required.',
    outcomes: [
      'Build and deploy AI models',
      'Understand core AI algorithms',
      'Work on 5+ real-world projects',
      'Get certified by Adidar Technologies',
      'Receive placement support for 6 months'
    ]
  },
  {
    id: 2,
    slug: 'machine-learning',
    title: 'Advanced Machine Learning',
    shortDesc: 'Deep dive into ML algorithms, model optimization, and production deployment',
    duration: '3 Months',
    level: 'Intermediate',
    certification: true,
    placementSupport: true,
    overview: 'Advanced training in machine learning algorithms, feature engineering, and deploying ML models to production environments.',
    highlights: [
      'Hands-on with 10+ ML algorithms',
      'MLOps & model deployment training',
      'Kaggle competition participation',
      'Industry-expert mentorship',
      'Guaranteed interview opportunities'
    ],
    curriculum: [
      'Advanced Regression & Classification',
      'Ensemble Methods (Random Forest, XGBoost)',
      'Feature Engineering & Selection',
      'Model Evaluation & Hyperparameter Tuning',
      'Time Series Forecasting',
      'Recommendation Systems',
      'MLOps & Model Deployment',
      'Portfolio Building & Interview Prep'
    ],
    prerequisites: 'Basic Python and statistics knowledge recommended.',
    outcomes: [
      'Master 10+ ML algorithms',
      'Deploy models to production',
      'Build a strong ML portfolio',
      'Industry-ready certification',
      'Direct referrals to partner companies'
    ]
  },
  {
    id: 3,
    slug: 'deep-learning',
    title: 'Deep Learning & Neural Networks',
    shortDesc: 'Master deep learning architectures and build cutting-edge AI applications',
    duration: '3 Months',
    level: 'Advanced',
    certification: true,
    placementSupport: true,
    overview: 'Comprehensive training in deep learning, covering CNNs, RNNs, Transformers, and state-of-the-art architectures for computer vision and NLP.',
    highlights: [
      'Work with GPUs & cloud platforms',
      'Build production-grade deep learning models',
      'Research paper implementation',
      'Capstone project on latest AI trends',
      'Priority placement with AI startups'
    ],
    curriculum: [
      'Neural Networks Deep Dive',
      'Convolutional Neural Networks (CNNs)',
      'Recurrent Neural Networks (RNNs, LSTMs)',
      'Transformers & Attention Mechanisms',
      'Generative AI (GANs, VAEs)',
      'Transfer Learning & Fine-tuning',
      'Large Language Models (LLMs)',
      'Research Project & Publication Guidance'
    ],
    prerequisites: 'Strong Python skills and basic ML knowledge required.',
    outcomes: [
      'Build state-of-the-art AI models',
      'Implement research papers',
      'Work on cutting-edge projects',
      'Advanced certification',
      'Access to exclusive job opportunities'
    ]
  },
  {
    id: 4,
    slug: 'nlp',
    title: 'Natural Language Processing',
    shortDesc: 'Build intelligent NLP applications using modern language models',
    duration: '3 Months',
    level: 'Intermediate',
    certification: true,
    placementSupport: true,
    overview: 'Specialized training in NLP covering text processing, sentiment analysis, chatbots, and working with large language models like GPT and BERT.',
    highlights: [
      'Work with OpenAI GPT, BERT, T5',
      'Build chatbots & virtual assistants',
      'Industry NLP projects',
      'LangChain & vector databases',
      'NLP-focused placement assistance'
    ],
    curriculum: [
      'Text Processing & Feature Extraction',
      'Sentiment Analysis & Classification',
      'Named Entity Recognition (NER)',
      'Language Models (BERT, GPT, T5)',
      'Chatbot Development',
      'LangChain & RAG Systems',
      'Prompt Engineering',
      'NLP Portfolio Projects'
    ],
    prerequisites: 'Python programming and basic ML concepts.',
    outcomes: [
      'Build advanced NLP applications',
      'Master modern language models',
      'Create production-ready chatbots',
      'NLP specialist certification',
      'Connect with NLP-hiring companies'
    ]
  },
  {
    id: 5,
    slug: 'computer-vision',
    title: 'Computer Vision & Image Processing',
    shortDesc: 'Create AI systems that can see and understand visual information',
    duration: '3 Months',
    level: 'Intermediate',
    certification: true,
    placementSupport: true,
    overview: 'Master computer vision techniques including object detection, image segmentation, facial recognition, and video analysis using deep learning.',
    highlights: [
      'Work with YOLO, ResNet, U-Net',
      'Real-time video processing',
      'Drone & robotics vision projects',
      'OpenCV & advanced CV libraries',
      'CV-focused job placement'
    ],
    curriculum: [
      'Image Processing Fundamentals',
      'Object Detection & Tracking',
      'Image Segmentation',
      'Facial Recognition Systems',
      'Video Analysis & Processing',
      'Generative Models for Images',
      '3D Vision & Depth Estimation',
      'Industry CV Projects'
    ],
    prerequisites: 'Python and basic understanding of neural networks.',
    outcomes: [
      'Build computer vision applications',
      'Implement object detection systems',
      'Create real-time video processing apps',
      'Computer vision certification',
      'Access to CV-focused job roles'
    ]
  },
  {
    id: 6,
    slug: 'ai-business',
    title: 'AI for Business Leaders',
    shortDesc: 'Strategic AI implementation for executives and business professionals',
    duration: '3 Months',
    level: 'Executive',
    certification: true,
    placementSupport: false,
    overview: 'Non-technical AI training focused on business strategy, AI adoption, ROI analysis, and leading AI transformation in organizations.',
    highlights: [
      'No coding required',
      'AI strategy & implementation',
      'Case studies from Fortune 500',
      'Network with AI leaders',
      'Executive certification'
    ],
    curriculum: [
      'AI Business Fundamentals',
      'AI Use Cases Across Industries',
      'Building AI Strategy & Roadmap',
      'AI ROI & Value Assessment',
      'Managing AI Teams & Projects',
      'AI Ethics & Governance',
      'Change Management for AI',
      'Executive Capstone Project'
    ],
    prerequisites: 'Business or management background. No technical skills needed.',
    outcomes: [
      'Lead AI transformation initiatives',
      'Make informed AI investment decisions',
      'Build AI implementation roadmaps',
      'Executive leadership certification',
      'Join exclusive AI leaders network'
    ]
  },
  {
    id: 7,
    slug: 'java-fullstack',
    title: 'Java Full Stack Development',
    shortDesc: 'Master Java backend and modern frontend frameworks to become a full stack developer',
    duration: '3 Months',
    level: 'Intermediate',
    certification: true,
    placementSupport: true,
    overview: 'Comprehensive Java full stack training covering Spring Boot, Hibernate, React/Angular, microservices, and cloud deployment for enterprise applications.',
    highlights: [
      'Spring Boot & Spring Framework',
      'React/Angular frontend development',
      'Microservices architecture',
      'Real-time enterprise projects',
      '100% placement assistance'
    ],
    curriculum: [
      'Core Java & Advanced Java',
      'Spring Framework & Spring Boot',
      'Hibernate & JPA',
      'RESTful Web Services',
      'React/Angular Frontend',
      'Microservices Architecture',
      'Database Design & SQL',
      'DevOps & Cloud Deployment'
    ],
    prerequisites: 'Basic programming knowledge helpful but not required.',
    outcomes: [
      'Build enterprise-grade applications',
      'Master Java ecosystem',
      'Deploy full stack applications',
      'Industry-recognized certification',
      'Direct placement in top IT companies'
    ]
  },
  {
    id: 8,
    slug: 'mern-stack',
    title: 'MERN Stack Development',
    shortDesc: 'Build modern web applications using MongoDB, Express, React, and Node.js',
    duration: '3 Months',
    level: 'Beginner',
    certification: true,
    placementSupport: true,
    overview: 'Complete MERN stack training to build scalable, high-performance web applications using JavaScript across the entire stack.',
    highlights: [
      'Full JavaScript stack',
      'Real-time application development',
      'MERN portfolio projects',
      'Industry best practices',
      'Startup & product company placements'
    ],
    curriculum: [
      'JavaScript ES6+ Fundamentals',
      'React.js & Redux',
      'Node.js & Express.js',
      'MongoDB & Mongoose',
      'RESTful API Development',
      'Authentication & Authorization',
      'Real-time with Socket.io',
      'Deployment & Production Best Practices'
    ],
    prerequisites: 'Basic HTML/CSS knowledge. No prior programming required.',
    outcomes: [
      'Build full stack web applications',
      'Master MERN technologies',
      'Create real-time applications',
      'MERN stack certification',
      'Placement in tech startups & MNCs'
    ]
  },
  {
    id: 9,
    slug: 'devops-cloud',
    title: 'DevOps & Cloud (AWS & Azure)',
    shortDesc: 'Master DevOps practices and cloud platforms for modern infrastructure management',
    duration: '3 Months',
    level: 'Intermediate',
    certification: true,
    placementSupport: true,
    overview: 'Comprehensive DevOps training covering CI/CD, containerization, Kubernetes, AWS, Azure, and infrastructure as code for cloud-native deployments.',
    highlights: [
      'AWS & Azure dual certification track',
      'Docker & Kubernetes mastery',
      'CI/CD pipeline implementation',
      'Infrastructure as Code (Terraform)',
      'High-demand DevOps placements'
    ],
    curriculum: [
      'Linux & Shell Scripting',
      'Git & Version Control',
      'Docker & Containerization',
      'Kubernetes Orchestration',
      'AWS Services & Architecture',
      'Azure Cloud Platform',
      'CI/CD with Jenkins/GitLab',
      'Terraform & Infrastructure as Code'
    ],
    prerequisites: 'Basic understanding of software development and Linux.',
    outcomes: [
      'Implement CI/CD pipelines',
      'Deploy on AWS & Azure',
      'Master containerization',
      'AWS & Azure certifications',
      'DevOps engineer placement support'
    ]
  },
  {
    id: 10,
    slug: 'oracle-dba',
    title: 'Oracle Database Administrator',
    shortDesc: 'Become an expert Oracle DBA managing enterprise database systems',
    duration: '3 Months',
    level: 'Advanced',
    certification: true,
    placementSupport: true,
    overview: 'Advanced Oracle DBA training covering database architecture, performance tuning, backup/recovery, security, and enterprise database management.',
    highlights: [
      'Oracle 19c & 21c coverage',
      'Real production scenarios',
      'Performance tuning expertise',
      'Backup & disaster recovery',
      'Enterprise DBA placements'
    ],
    curriculum: [
      'Oracle Architecture & Installation',
      'Database Administration Basics',
      'Backup & Recovery Strategies',
      'Performance Tuning & Optimization',
      'Security & User Management',
      'RAC & Data Guard',
      'Oracle Cloud Infrastructure',
      'Troubleshooting & Best Practices'
    ],
    prerequisites: 'Basic database knowledge and SQL fundamentals required.',
    outcomes: [
      'Manage enterprise Oracle databases',
      'Optimize database performance',
      'Implement backup/recovery solutions',
      'Oracle DBA certification',
      'Senior DBA role placements'
    ]
  },
  {
    id: 11,
    slug: 'selenium-automation',
    title: 'Selenium Automation Testing',
    shortDesc: 'Master automated testing with Selenium, TestNG, and modern testing frameworks',
    duration: '3 Months',
    level: 'Beginner',
    certification: true,
    placementSupport: true,
    overview: 'Complete Selenium automation testing training covering test automation frameworks, CI/CD integration, and advanced testing strategies.',
    highlights: [
      'Selenium WebDriver mastery',
      'Test automation frameworks',
      'BDD with Cucumber',
      'API testing with RestAssured',
      'QA automation placements'
    ],
    curriculum: [
      'Manual Testing Fundamentals',
      'Java for Automation',
      'Selenium WebDriver',
      'TestNG & JUnit Frameworks',
      'Page Object Model (POM)',
      'Cucumber BDD Framework',
      'API Testing with RestAssured',
      'CI/CD Integration & Jenkins'
    ],
    prerequisites: 'No prior programming experience required. Basic computer skills needed.',
    outcomes: [
      'Automate web application testing',
      'Build test automation frameworks',
      'Integrate tests with CI/CD',
      'Selenium certification',
      'QA automation engineer placements'
    ]
  }
];