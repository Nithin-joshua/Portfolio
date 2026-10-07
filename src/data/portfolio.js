// This file holds all portfolio content in one place so it is easy to update later.
export const portfolio = {
  brand: 'NV',
  logo: {
    src: '/logo-transparent.png',
    alt: 'Nithin V',
  },
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
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    id: 'hero',
    headline: 'Backend & AI Systems Engineer',
    availability: 'Open to roles • Bangalore/Remote',
    subtext: 'Python, FastAPI, PostgreSQL, Celery. Voice biometrics, invoice pipelines, IoT.',
    intro:
      'I architect and ship production-grade backend services and applied AI systems with FastAPI, Python, PostgreSQL, and Docker.',
    primaryAction: {
      label: 'View Projects',
      target: 'projects',
    },
    secondaryAction: {
      label: 'Contact',
      target: 'contact',
    },
    resumeAction: {
      label: 'Download Resume',
      url: '/Nithin_V_Resume.pdf',
      downloadName: 'Nithin_V_Resume.pdf',
    },
    board: {
      sectionTabs: ['Bio.V', 'AP Automation', 'Smart Grid', 'Research'],
      cardLabel: 'Engineering Focus',
      cardTitle: 'Scalable Systems & Applied ML',
      cardText:
        'Hands-on expertise across backend microservices (FastAPI/Spring Boot), production databases (PostgreSQL/SQLAlchemy/Milvus), and applied AI/ML pipelines (ECAPA-TDNN, SpeechBrain, Celery async queues).',
      featureLabel: 'Flagship Architecture',
      featureTitle: 'Voice Biometric Authentication',
      featureText:
        'Bio.V platform combining ECAPA-TDNN speaker verification, RawNet2 anti-spoofing, and Milvus vector similarity search with offline Vosk ASR.',
      featureTags: ['FastAPI', 'Milvus', 'SpeechBrain', 'Docker'],
      featureAction: 'View Bio.V Details',
    },
  },
  skills: {
    id: 'skills',
    kicker: 'Technical Stack',
    title: 'Core Technologies & Architecture',
    intro:
      'Production-tested technologies across backend architecture, applied AI/ML, databases, and DevOps.',
    skillGroups: [
      {
        title: 'Backend & Systems',
        category: 'backend',
        items: ['FastAPI', 'Python', 'Java', 'Spring Boot', 'Django', 'Celery', 'REST APIs', 'JWT Auth'],
      },
      {
        title: 'Applied AI & ML',
        category: 'ai',
        items: ['SpeechBrain', 'ECAPA-TDNN', 'RawNet2', 'Vosk ASR', 'TensorFlow Lite', 'LLMs & Prompting', 'RapidOCR'],
      },
      {
        title: 'Databases & Storage',
        category: 'database',
        items: ['PostgreSQL', 'Milvus Vector DB', 'SQLAlchemy', 'InfluxDB', 'MySQL', 'MongoDB'],
      },
      {
        title: 'DevOps & Tooling',
        category: 'devops',
        items: ['Docker', 'Docker Compose', 'Git & GitHub', 'Postman', 'Linux / Bash', 'Grafana / MQTT'],
      },
      {
        title: 'Frontend & UI',
        category: 'frontend',
        items: ['React', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3'],
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
        end: '2026-08',
        focus: 'FastAPI, PostgreSQL, SQLAlchemy, Docker, AI',
        summary:
          'Contributed to the backend development of an AI-powered Accounts Payable Automation System, delivering 15+ REST API endpoints.',
        bullets: [
          'Contributed to the backend development of an AI-powered Accounts Payable Automation System, delivering 15+ REST API endpoints using FastAPI, PostgreSQL, and SQLAlchemy.',
          'Connected 10+ frontend modules to 15+ JWT-secured REST APIs within a Docker-based microservices environment.',
          'Reduced manual data entry by 80% through AI-powered invoice extraction, automated validation, and confidence scoring across invoices, purchase orders, and vendor records.',
        ],
        tools: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'JWT', 'AI/LLMs'],
      },
      {
        company: 'Dyashin Technosoft Pvt. Ltd.',
        role: 'Java Full Stack Intern',
        location: 'Bangalore',
        start: '2025-09',
        end: '2025-10',
        focus: 'Java, Spring Boot, React, REST APIs',
        summary:
          'Delivered full-stack features and integrated frontend modules with Java backend services.',
        bullets: [
          'Delivered full-stack features using Java, Spring Boot, React, and REST APIs, contributing to 10+ application modules.',
          'Linked frontend interfaces with backend services, supporting 10+ REST API integrations for seamless application workflows.',
          'Improved deployment workflows and debugging, reducing issue resolution time by 30% and improving application stability.',
        ],
        tools: ['Java', 'Spring Boot', 'React', 'REST APIs'],
      },
      {
        company: 'Evobi Automation Pvt. Ltd.',
        role: 'Robotics Production Intern',
        location: 'Bangalore',
        start: '2024-03',
        end: '2024-04',
        focus: 'Automation, QA, Embedded Systems',
        summary:
          'Programmed robotic control software and validated functionality across educational robots.',
        bullets: [
          'Programmed robotic control software and uploaded code to 20+ educational robots.',
          'Calibrated motors and performed QC testing across 20+ robots, validating embedded functionality and automation performance.',
          'Validated end-to-end functionality for 20+ robots through testing and process integration, ensuring reliable deployment and consistent performance.',
        ],
        tools: ['Robot Programming', 'QC Testing', 'QA', 'Embedded Systems'],
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
        shortName: 'Bio.V',
        start: '2025-11',
        end: '2026-02',
        description:
          'Voice biometric authentication platform using speaker verification and anti-spoofing.',
        stack: ['Python', 'FastAPI', 'React', 'Milvus', 'SpeechBrain', 'Docker'],
        github: 'https://github.com/Nithin-joshua/Bio.VAN',
        videoUrl: '/project_preview.mp4',
        steps: ['Voice sample', 'Embedding', 'Similarity search', 'Authentication'],
        labels: [
          {
            title: 'Verification',
            text: 'Built Bio.V using ECAPA-TDNN for speaker verification and RawNet2 for anti-spoofing.',
          },
          {
            title: 'ASR',
            text: 'Implemented challenge-response authentication with offline Vosk ASR for dynamic passphrase verification.',
          },
          {
            title: 'Storage',
            text: 'Integrated Milvus for voice-embedding similarity search and PostgreSQL for metadata storage.',
          },
        ],
        bullets: [
          'Built Bio.V, a voice biometric authentication platform using ECAPA-TDNN for speaker verification and RawNet2 for anti-spoofing.',
          'Implemented challenge-response authentication with offline Vosk ASR for dynamic passphrase verification.',
          'Integrated Milvus for voice-embedding similarity search and PostgreSQL for metadata storage.',
          'Developed with FastAPI, React, Docker, and Docker Compose, including automated testing and API security.',
          'Added biometric deduplication, adaptive thresholds, re-enrollment, rate limiting, and API-key enforcement.',
        ],
      },
      {
        name: 'AP Automation System',
        shortName: 'AP-Auto',
        start: '2026-06',
        end: 'Present',
        description:
          'AI-powered Accounts Payable automation system with a 9-stage invoice extraction pipeline end-to-end.',
        stack: ['Python', 'FastAPI', 'React', 'Celery', 'PostgreSQL', 'Docker'],
        github: 'https://github.com/suprith-23/AP-Automation-System',
        videoUrl: '',
        steps: ['Raw OCR Text', 'Celery Workers', 'GST Validation', 'Conflict Resolution'],
        labels: [
          {
            title: 'Pipeline',
            text: 'Built the 9-stage invoice extraction pipeline end to end—raw OCR text to a validated invoice—as async Celery tasks behind FastAPI.',
          },
          {
            title: 'OCR & DLQ',
            text: 'OCR runs through RapidOCR, falls back to Docling. Failed jobs land in a dead letter queue with admin API to retry.',
          },
          {
            title: 'Validation',
            text: 'Wrote GST validation: regex GSTIN checks, RCM applicability, CGST/SGST/IGST routing, and HSN-level rate checks.',
          },
        ],
        bullets: [
          'Built the 9-stage invoice extraction pipeline end to end—raw OCR text to a validated invoice—as async Celery tasks behind FastAPI.',
          'OCR runs through RapidOCR first; on empty/failed output it retries, then falls back to Docling—no silent drops on scanned invoices.',
          'Failed jobs land in a dead letter queue (stack trace + retry count logged); admin API to retry (re-dispatch) or delete.',
          'Wrote GST validation: regex GSTIN checks, RCM applicability, CGST/SGST/IGST routing by state code, and HSN-level rate checks against a DB master.',
          'LLM extraction with DB-versioned prompts (rollback without deploy) + conflict resolution between deterministic and LLM values.',
        ],
      },
      {
        name: 'Smart Grid Anomaly Detection System',
        shortName: 'SmartGrid',
        start: '2026-03',
        end: 'Present',
        description:
          'IoT-based anomaly detection system that flags unusual electricity usage patterns using LSTM autoencoders.',
        stack: ['Python', 'TensorFlow Lite', 'LSTM Autoencoders', 'MQTT', 'InfluxDB', 'Grafana', 'Docker Compose'],
        github: 'https://github.com/Nithin-joshua/Smart-Electricity-Grid-Anomaly-Detection-System',
        videoUrl: '',
        steps: ['Sensor Data', 'MQTT Streaming', 'LSTM Inference', 'Grafana Alerts'],
        labels: [
          {
            title: 'Detection',
            text: 'Designed a smart grid anomaly detection system using TensorFlow Lite and LSTM Autoencoders for real-time energy theft detection.',
          },
          {
            title: 'Streaming',
            text: 'Streamed sensor data through MQTT into InfluxDB, with Grafana dashboards for real-time monitoring.',
          },
          {
            title: 'Latency',
            text: 'Achieved sub-5-second anomaly detection in a Docker Compose-based microservices environment.',
          },
        ],
        bullets: [
          'Designed a smart grid anomaly detection system using TensorFlow Lite and LSTM Autoencoders for real-time energy theft detection.',
          'Streamed sensor data through MQTT into InfluxDB, with Grafana dashboards for real-time monitoring.',
          'Achieved sub-5-second anomaly detection in a Docker Compose-based microservices environment.',
        ],
      },
    ],
  },
  publications: {
    id: 'publications',
    kicker: 'Publications',
    title: 'Research & Publications',
    intro: 'Academic publications contributing to research in Large Language Models and machine learning.',
    entries: [
      {
        title: 'Large Language Processing and Comparative Analysis with Traditional Machine Learning Models',
        authors: 'Co-Author',
        publishedIn: 'Shanlax Publications',
        isbn: '978-93-6163-972-2',
        detail:
          'Published a comparative study of LLMs, NLP, and traditional machine learning approaches, analyzing their methodologies, performance, limitations, and practical applications in TGST2026 Conference Proceedings.',
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
    kicker: 'Awards',
    title: 'Awards & Honors',
    intro:
      'National level certifications and recognitions demonstrating research aptitude and technical competence.',
    entries: [
      {
        title: 'UGC-NET Qualified – Computer Science & Applications',
        detail:
          'Qualified the UGC-NET in Computer Science & Applications (December 2025) with a 93.71 percentile, demonstrating a strong foundation in core computer science subjects, analytical thinking, and technical problem-solving under the National Testing Agency.',
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

