// This file holds all portfolio content in one place so it is easy to update later.
export const portfolio = {
  brand: 'NV',
  resume: {
    label: 'Resume',
    url: '/Nithin_V_Resume.pdf',
    downloadName: 'Nithin_V_Resume.pdf',
  },
  links: [
    {
      label: 'Website',
      shortLabel: 'Web',
      url: 'https://nithinsprofile.vercel.app/',
    },
    {
      label: 'GitHub',
      shortLabel: 'GitHub',
      url: 'https://github.com/Nithin-joshua',
    },
    {
      label: 'LinkedIn',
      shortLabel: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nithin-v-b13949198',
    },
    {
      label: 'Email',
      shortLabel: 'Email',
      url: 'mailto:nithinjoshua005@gmail.com',
    },
  ],
  navigation: [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    id: 'hero',
    headline: 'Full-Stack Developer | AI/ML Systems | Open to Opportunities',
    availability: 'Available immediately for full-time opportunities',
    titleLines: ['Nithin V'],
    intro:
      'Developer based in Bangalore, finishing my MCA. I design and build end-to-end full-stack applications, delivering robust backend systems, data pipelines, and intuitive interfaces; lately that has meant engineering an enterprise-grade AI document processing platform and a voice authentication system, both focused on solving complex problems with high performance and clean architecture.',
    primaryAction: {
      label: 'Download Resume',
      url: '/Nithin_V_Resume.pdf',
      downloadName: 'Nithin_V_Resume.pdf',
    },
    secondaryAction: {
      label: 'View Projects',
      target: 'projects',
    },
    board: {
      sectionTabs: ['Profile', 'Projects', 'Experience', 'Contact'],
      cardLabel: 'Recruiter View',
      cardTitle: 'Full-Stack Fit',
      cardText:
        'Versatile developer with internship experience across UI/UX (Next.js/React), backend APIs (FastAPI/Spring Boot), databases (PostgreSQL/SQLAlchemy), testing, and applied AI/ML pipelines (LLMs/SpeechBrain/LSTM).',
      featureLabel: 'Featured build',
      featureTitle: 'Bio.VAN',
      featureText:
        'Voice authentication platform using speaker embeddings, similarity search, and a lightweight backend pipeline.',
      featureTags: ['Python', 'FastAPI', 'AI'],
      secondaryFeature: {
        label: 'Also featured',
        title: 'DocIntel Platform',
        text:
          'Enterprise AI document processing platform automating OCR, classification, and structured data generation.',
        tags: ['FastAPI', 'LLMs', 'Next.js'],
        status: 'Active',
      },
      featureAction: 'Project details',
      stats: [
        { label: 'Education', value: 'MCA, Bangalore' },
        { label: 'Experience', value: '3 internships' },
        { label: 'Focus', value: 'Full-Stack + AI/ML' },
        { label: 'Location', value: 'Bangalore, Karnataka' },
      ],
      quote:
        'I focus on building software that is reliable, clean, easy to understand, and useful from day one.',
    },
  },
  skills: {
    id: 'skills',
    kicker: 'Skills',
    title: 'Core Skills',
    intro:
      'Hands-on technologies I use across frontend, backend, databases, and DevOps practices.',
    skillGroups: [
      {
        title: 'Programming Languages',
        items: [
          { name: 'Python', level: 85 },
          { name: 'Java', level: 75 },
          { name: 'JavaScript', level: 70 },
          { name: 'C', level: 60 },
        ],
      },
      {
        title: 'Frontend',
        items: [
          { name: 'HTML', level: 90 },
          { name: 'CSS', level: 85 },
          { name: 'React', level: 70 },
          { name: 'Tailwind CSS', level: 80 },
          { name: 'Next.js', level: 75 },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'FastAPI', level: 85 },
          { name: 'Django', level: 75 },
        ],
      },
      {
        title: 'Databases',
        items: [
          { name: 'PostgreSQL', level: 80 },
          { name: 'MongoDB', level: 65 },
        ],
      },
      {
        title: 'DevOps',
        items: [
          { name: 'Docker', level: 75 },
        ],
      },
    ],
  },
  experience: {
    id: 'experience',
    kicker: 'Experience',
    title: 'Internships and Practical Experience',
    intro:
      'Internship experience spanning business application delivery, full-stack development, and process automation in production environments.',
    roles: [
      {
        company: 'Asista Software Solutions Pvt Ltd',
        role: 'Software Developer Intern',
        location: 'Bangalore',
        start: '2026-05',
        end: 'Present',
        focus: 'FastAPI, PostgreSQL, Next.js, Docker, AI',
        summary:
          'Contributed to the development of an enterprise-grade, AI-powered Accounts Payable (AP) Automation System.',
        bullets: [
          'Contributed to the development of an AI-powered Accounts Payable (AP) Automation System.',
          'Developed backend APIs using FastAPI and managed PostgreSQL databases with SQLAlchemy.',
          'Built frontend components using Next.js and TypeScript.',
          'Integrated AI-based invoice data extraction and used Docker for containerized development.',
        ],
        tools: ['FastAPI', 'PostgreSQL', 'Next.js', 'TypeScript', 'Docker', 'AI/LLMs'],
      },
      {
        company: 'Dyashin Technosoft Pvt. Ltd.',
        role: 'Java Full Stack Intern',
        location: 'Bangalore',
        start: '2025-09',
        end: '2025-10',
        focus: 'Java, Spring Boot, React',
        summary:
          'Worked across Java backend services and React interfaces to support application delivery in a client-facing development environment.',
        bullets: [
          'Built and refined 4+ full-stack modules using Java, Spring Boot, and React, helping accelerate feature delivery for client requirements.',
          'Integrated 10+ UI flows with backend APIs, reducing manual data handling and improving consistency across the application experience.',
          'Supported debugging, deployment, and issue resolution during test cycles, shortening turnaround time for defect fixes by an estimated 25%.',
        ],
        tools: ['Java', 'Spring Boot', 'React'],
      },
      {
        company: 'Evobi Automation Pvt. Ltd.',
        role: 'Robotics Production Intern',
        location: 'Bangalore',
        start: '2024-03',
        end: '2024-04',
        focus: 'Automation, QA, embedded systems',
        summary:
          'Contributed to automation, testing, and production debugging in a robotics environment where reliability and repeatability mattered.',
        bullets: [
          'Assisted in tuning robotic control logic to improve workflow stability and reduce repeat calibration issues by an estimated 15%.',
          'Supported embedded testing and validation across 20+ production scenarios to identify failures earlier and improve system performance.',
          'Strengthened QA checks and troubleshooting workflows, helping reduce shop-floor errors and rework by an estimated 18%.',
        ],
        tools: ['Testing', 'Automation', 'Embedded systems'],
      },
    ],
  },
  projects: {
    id: 'projects',
    kicker: 'Projects',
    title: 'Selected Projects',
    intro:
      'Projects that show range across backend engineering, applied AI/ML, and real-world problem solving.',
    list: [
      {
        name: 'Biometric Voice Authentication System',
        shortName: 'Bio.VAN',
        start: '2025-11',
        end: '2026-02',
        description:
          'Voice-based authentication system using speaker recognition, FastAPI, and fast similarity search.',
        stack: ['Python', 'FastAPI', 'Milvus', 'SpeechBrain', 'Docker'],
        github: 'https://github.com/Nithin-joshua/Bio.VAN',
        videoUrl: '/project_preview.mp4',
        steps: ['Voice sample', 'Embedding', 'Similarity search', 'Authentication'],
        labels: [
          {
            title: 'Recognition',
            text: 'SpeechBrain-based speaker recognition for voice matching.',
          },
          {
            title: 'Search',
            text: 'Milvus-powered similarity search for quick authentication checks using cosine similarity and encrypted embeddings.',
          },
          {
            title: 'Backend',
            text: 'FastAPI backend designed for modular testing, optimized with lightweight preprocessing and modular architecture.',
          },
        ],
        bullets: [
          'Built speaker verification with ECAPA-TDNN embeddings and SpeechBrain.',
          'Developed backend with FastAPI + Milvus, using cosine similarity and encrypted embeddings.',
          'Optimized with lightweight preprocessing and modular architecture for efficient deployment.',
        ],
      },
      {
        name: 'AI Document Intelligent Platform',
        shortName: 'DocIntel',
        start: '2026-06',
        end: 'Present',
        description:
          'Engineered an enterprise-grade AI document processing platform using FastAPI, PostgreSQL, React/Next.js, Docker, and LLMs.',
        stack: ['Python', 'FastAPI', 'PostgreSQL', 'React/Next.js', 'Docker', 'LLMs'],
        github: 'https://github.com/Nithin-joshua',
        videoUrl: '',
        steps: ['Document Ingestion', 'OCR & Extraction', 'Confidence Scoring', 'Human Review & Approval'],
        labels: [
          {
            title: 'Extraction',
            text: 'Automated OCR-based extraction, document classification, and structured data generation.',
          },
          {
            title: 'Workflow',
            text: 'Designed a modular workflow supporting document ingestion, human review, approval workflows, and audit logging.',
          },
          {
            title: 'API',
            text: 'Built scalable REST APIs and integrated asynchronous background processing for high-volume document workflows.',
          },
        ],
        bullets: [
          'Engineered an enterprise-grade AI document processing platform using FastAPI, PostgreSQL, React/Next.js, Docker, and LLMs.',
          'Automated OCR-based extraction, document classification, structured data generation, confidence scoring, and rule-based validation.',
          'Designed a modular workflow supporting document ingestion, human review, approval workflows, audit logging, and analytics dashboards.',
          'Built scalable REST APIs and integrated asynchronous background processing for efficient handling of high-volume document workflows.',
        ],
      },
      {
        name: 'Smart Electricity Grid Anomaly Detection System',
        shortName: 'SmartGrid',
        start: '2026-03',
        end: 'Present',
        description:
          'IoT-based anomaly detection system that flags unusual electricity usage patterns using LSTM autoencoders and TensorFlow Lite.',
        stack: ['Python', 'IoT', 'LSTM Autoencoders', 'TensorFlow Lite', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
        github: 'https://github.com/Nithin-joshua/Smart-Electricity-Grid-Anomaly-Detection-System',
        videoUrl: '',
        steps: ['Data Streaming', 'LSTM Autoencoder', 'Anomaly Detection', 'Grafana Alerting'],
        labels: [
          {
            title: 'Core Engine',
            text: 'Detects energy theft and abnormal consumption patterns in real time using an LSTM Autoencoder and TensorFlow Lite.',
          },
          {
            title: 'Simulation',
            text: 'Simulates 50 smart electricity meters with sub-5-second anomaly detection.',
          },
          {
            title: 'Monitoring',
            text: 'Leveraged MQTT for data streaming, InfluxDB and Grafana for monitoring, and Docker Compose for portable deployment.',
          },
        ],
        bullets: [
          'Built an IoT-based Smart Grid Anomaly Detection System that simulates 50 smart electricity meters and detects energy theft and abnormal consumption patterns in real time.',
          'Utilized LSTM Autoencoders and TensorFlow Lite with sub-5-second anomaly detection latency.',
          'Leveraged MQTT for data streaming, InfluxDB and Grafana for monitoring, and Docker Compose for portable deployment.',
        ],
      },
    ],
  },
  publications: {
    id: 'publications',
    kicker: 'Publications',
    title: 'Research & Publications',
    intro: 'Academic publications contributing to research in Large Language Models and intelligent language processing.',
    entries: [
      {
        title: 'Large Language Processing and Comparative Analysis with Traditional Machine Learning Models',
        authors: 'Co-Author',
        publishedIn: 'Role of Green Smart Technology for Sustainable Future (TGST-2026)',
        isbn: '978-93-6163-972-2',
        detail:
          'Co-Author of the research paper comparing Large Language Models against traditional machine learning approaches. Published in the Role of Green Smart Technology for Sustainable Future (TGST-2026) Conference Proceedings (ISBN: 978-93-6163-972-2).',
      },
    ],
  },
  education: {
    id: 'education',
    kicker: 'Education',
    title: 'Education',
    intro:
      'Academic foundation in computer applications, computer science, and electronics that supports both software engineering and AI/ML work.',
    entries: [
      {
        degree: 'Master of Computer Applications (MCA)',
        school: 'St. Francis de Sales College Autonomous',
        location: 'Bangalore',
        start: '2024-09',
        end: '2026-08',
      },
      {
        degree: 'B.Sc. Computer Science & Electronics',
        school: 'St. Francis de Sales College Autonomous',
        location: 'Bangalore',
        start: '2021-09',
        end: '2024-09',
      },
    ],
  },
  achievements: {
    id: 'achievements',
    kicker: 'Achievements',
    title: 'Research Aptitude and Recognition',
    intro:
      'Signals of analytical depth, competitive performance, and readiness for research-driven engineering work.',
    entries: [
      {
        title: 'UGC-NET December 2025',
        detail:
          'Qualified UGC-NET in Computer Science & Applications with a 93.71 percentile, demonstrating academic proficiency and earning eligibility for Assistant Professor positions and Ph.D. admission across recognized Indian universities.',
        label: '93.71 percentile',
      },
    ],
  },
  certifications: {
    id: 'certifications',
    kicker: 'Certificates',
    title: 'Certifications',
    intro:
      'Core certifications strengthening programming fundamentals and applied technology knowledge.',
    entries: [
      {
        name: 'Python Certificate Course',
        issuer: 'IIT Bombay',
      },
      {
        name: 'C Programming Certificate Course',
        issuer: 'Spoken Tutorial',
      },
      {
        name: 'Python for Data Science Certificate Course',
        issuer: 'Swayam',
      },
      {
        name: 'DSA Mastery with Java',
        issuer: 'ExcelR',
      },
      {
        name: 'PHP & SQL',
        issuer: 'IIT Bombay',
      },
    ],
  },
  contact: {
    id: 'contact',
    kicker: 'Contact',
    titleLines: ['Thanks', 'for visiting'],
    note:
      'Open to full-time software development opportunities across Bangalore, hybrid, or remote teams. Let\'s connect.',
    methods: [
      {
        label: 'Email',
        value: 'nithinjoshua005@gmail.com',
        url: 'mailto:nithinjoshua005@gmail.com',
      },
      {
        label: 'Phone',
        value: '+91 9620808444',
        url: 'tel:+919620808444',
      },
      {
        label: 'GitHub',
        value: 'github.com/Nithin-joshua',
        url: 'https://github.com/Nithin-joshua',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/nithin-v-b13949198',
        url: 'https://www.linkedin.com/in/nithin-v-b13949198',
      },
      {
        label: 'Website',
        value: 'nithinsprofile.vercel.app',
        url: 'https://nithinsprofile.vercel.app/',
      },
    ],
  },
};
