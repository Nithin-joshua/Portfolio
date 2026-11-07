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
    availability: 'Available for Roles (Bangalore / Remote)',
    subtext: 'FastAPI, Python, PostgreSQL, Celery, Milvus, Docker, Applied AI',
    intro:
      'Architecting high-throughput backend services, distributed async pipelines, and applied voice biometric AI systems.',
    primaryAction: {
      label: 'View Projects',
      target: 'projects',
    },
    secondaryAction: {
      label: 'Get in Touch',
      target: 'contact',
    },
    resumeAction: {
      label: 'Download Resume',
      url: '/Nithin_V_Resume.pdf',
      downloadName: 'Nithin_V_Resume.pdf',
    },
    metrics: [
      { value: '15+', label: 'Production Endpoints' },
      { value: '80%', label: 'Data Entry Automated' },
      { value: '93.71%', label: 'UGC-NET Qualified (CS)' },
      { value: '1', label: 'Research Publication' },
    ],
    board: {
      sectionTabs: ['Bio.V', 'Multimodal AI', 'Ley-Maga', 'EMS Platform', 'AP Automation', 'Research'],
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
        items: ['FastAPI', 'Python', 'Java', 'Spring Boot', 'NestJS', 'Django', 'Celery', 'REST APIs', 'JWT Auth'],
      },
      {
        title: 'Applied AI & ML',
        category: 'ai',
        items: ['SpeechBrain', 'ECAPA-TDNN', 'Qwen2.5-VL', 'YOLO', 'LangGraph', 'RawNet2', 'Vosk ASR', 'TensorFlow Lite', 'LLMs & Prompting', 'RapidOCR'],
      },
      {
        title: 'Databases & Storage',
        category: 'database',
        items: ['PostgreSQL', 'Milvus Vector DB', 'Prisma ORM', 'SQLAlchemy', 'InfluxDB', 'MySQL', 'MongoDB'],
      },
      {
        title: 'DevOps & Tooling',
        category: 'devops',
        items: ['Docker', 'Docker Compose', 'Git & GitHub', 'Postman', 'Linux / Bash', 'Grafana / MQTT', 'NodeMCU (ESP8266)'],
      },
      {
        title: 'Frontend & Mobile',
        category: 'frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Kotlin / Android', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3'],
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
          'Engineered backend microservices and applied AI pipelines for enterprise invoice lifecycle automation.',
        bullets: [
          'Architected and deployed 15+ production REST API endpoints using FastAPI, PostgreSQL, and SQLAlchemy.',
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
          'Built enterprise web application modules and REST integrations using Java, Spring Boot, and React.',
        bullets: [
          'Developed and maintained 10+ full-stack application modules using Spring Boot RESTful controllers and React components.',
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
        name: 'Multimodal Industrial Inspection Agent',
        shortName: 'Multimodal AI',
        start: '2026-10',
        end: 'Present',
        description:
          'Multimodal agent for industrial defect inspection, synthesizing computer vision (Qwen2.5-VL / YOLO), standards-based RAG retrieval, and sensor telemetry analysis.',
        stack: ['Python', 'FastAPI', 'LangGraph', 'Qwen2.5-VL', 'YOLO', 'RAG', 'ChromaDB', 'Docker'],
        github: 'https://github.com/Nithin-joshua/sturdy-palm-tree',
        liveUrl: 'https://sturdy-palm-tree-ghs2.onrender.com/',
        videoUrl: '/multimodal_preview.mp4',
        steps: ['Image & Sensor Ingest', 'Vision Defect Detection', 'RAG Standards Retrieval', 'Risk Report & Review'],
        labels: [
          {
            title: 'Vision Backends',
            text: 'Pluggable multi-model vision inference supporting local Qwen2.5-VL, cloud VLMs, and YOLO with automatic bounding-box localization.',
          },
          {
            title: 'Standards-Based RAG',
            text: 'Clause chunking and lexical retrieval over industrial standard specifications (Markdown/PDF) to ground compliance scoring.',
          },
          {
            title: 'Deterministic Risk Engine',
            text: 'Automated decision pipeline evaluating severity thresholds, sensor telemetry conflicts, and automated human-review escalation.',
          },
        ],
        bullets: [
          'Engineered an end-to-end multimodal agent combining image defect detection, technical standard parsing, and sensor telemetry verification.',
          'Integrated pluggable vision detectors including local Qwen2.5-VL and Ultralytics YOLO with annotated bounding-box visual feedback.',
          'Built an automated RAG retrieval pipeline chunking industrial standard documents to cross-reference defect criteria and severity thresholds.',
          'Implemented multi-sensor telemetry integration, cross-verifying visual defect observations with real-time sensor limits.',
          'Containerized full-stack FastAPI microservice and interactive report dashboard with Docker and one-click cloud deployment workflows.',
        ],
      },
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
            title: 'Neural Architecture',
            text: 'ECAPA-TDNN 192-dim embeddings paired with RawNet2 anti-spoofing detector.',
          },
          {
            title: 'Liveness & ASR',
            text: 'Vosk offline speech recognition with dynamic cryptographic challenge passphrases.',
          },
          {
            title: 'Vector Search',
            text: 'Sub-50ms cosine similarity queries via Milvus Vector DB + PostgreSQL.',
          },
        ],
        bullets: [
          'Engineered end-to-end voice biometric engine verifying identity and rejecting replay/deepfake spoofing attacks.',
          'Built dynamic challenge-response protocol requiring random spoken phrases to guarantee proof-of-liveness.',
          'Integrated high-dimensional Milvus index for ultra-low latency similarity queries across enrolled speaker profiles.',
          'Containerized microservices stack via Docker & Docker Compose with automated regression test suites.',
          'Implemented production security controls: biometric deduplication, adaptive cosine thresholds, and rate limiting.',
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
        name: 'Ley-Maga: Voice-Controlled Offline Home Automation AI',
        shortName: 'Ley-Maga',
        start: '2026-10',
        end: 'Present',
        description:
          'Fully offline edge AI paired with an IoT home automation system to control household appliances and smart devices via local voice commands with zero cloud dependency.',
        stack: ['Kotlin', 'Android', 'Python', 'NodeMCU (ESP8266)', 'Edge AI', 'Offline Voice NLP', 'IoT', 'C++'],
        github: 'https://github.com/underdogs-devs/ley-maga',
        videoUrl: '',
        steps: ['Voice Command Capture', 'Edge NLP Intent Parsing', 'Local Wi-Fi Dispatch', 'Microcontroller Relay Action'],
        labels: [
          {
            title: 'On-Device Voice AI',
            text: 'Custom trained offline NLP model running entirely on Android edge hardware, achieving zero-cloud voice intent classification.',
          },
          {
            title: 'IoT Microcontroller Firmware',
            text: 'ESP8266 / NodeMCU C++ firmware providing robust local network control over smart relays and household appliance interfaces.',
          },
          {
            title: 'Air-Gapped Privacy Architecture',
            text: '100% private system design ensuring zero voice recordings or home telemetry ever leave the local home network.',
          },
        ],
        bullets: [
          'Co-developed a fully offline smart home automation platform integrating on-device voice processing with IoT appliance actuation.',
          'Trained specialized intent recognition machine learning models with augmented edge-case speech datasets for noise-resilient command parsing.',
          'Engineered native Android control client in Kotlin featuring low-latency audio capture pipelines and local device synchronization.',
          'Programmed NodeMCU / ESP8266 microcontrollers running custom C++ firmware to execute real-time multi-channel relay switching over local Wi-Fi.',
          'Eliminated external cloud latency and third-party privacy vulnerabilities through end-to-end local network communication.',
        ],
      },
      {
        name: 'Employee Management & Onboarding System',
        shortName: 'Employee Hub',
        start: '2026-08',
        end: '2026-10',
        description:
          'Enterprise employee lifecycle and onboarding system featuring NestJS backend, Next.js client, AES-256 document encryption, and role-based access control.',
        stack: ['TypeScript', 'Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'JWT', 'Tailwind CSS'],
        github: 'https://github.com/Nithin-joshua/Employee_Onboarding_System',
        videoUrl: '',
        steps: ['Candidate Invitation', 'Document Vault & AES-256', 'RBAC Role Verification', 'Workflow Approval'],
        labels: [
          {
            title: 'Document Vault Security',
            text: 'AES-256 symmetric encryption safeguarding sensitive employee identification records, tax forms, and contracts prior to storage.',
          },
          {
            title: 'RBAC Access Architecture',
            text: 'Fine-grained JWT authentication and authorization covering HR admins, managers, and new hire role boundaries.',
          },
          {
            title: 'Containerized Microservices',
            text: 'Multi-service Docker Compose deployment coordinating NestJS API, PostgreSQL instance with Prisma ORM, and Next.js frontend.',
          },
        ],
        bullets: [
          'Architected a full-stack enterprise onboarding application using NestJS, Prisma ORM, PostgreSQL, and Next.js 14 App Router.',
          'Engineered a secure cryptographic document vault applying AES-256 symmetric encryption to protect uploaded identity and tax documentation.',
          'Implemented robust role-based access control (RBAC) and JWT authentication governing distinct permissions for HR, Managers, and Candidates.',
          'Built modular database schemas with Prisma migrations, automated role seeding, and relational audit logging.',
          'Delivered dockerized multi-service deployment orchestrating backend APIs, database instances, and client interfaces with automated bootstrap scripts.',
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
        authority: 'IIT Bombay • Govt. of India',
        credential: 'Certificate of Completion',
        status: 'Completed & Verified',
        summary:
          'Comprehensive training in Python programming, OOP architecture, core data structures, and automation scripting.',
        skills: ['Python 3', 'OOP Architecture', 'Data Structures'],
      },
      {
        name: 'C Programming Certificate Course',
        issuer: 'Spoken Tutorial, IIT Bombay',
        authority: 'IIT Bombay • Govt. of India',
        credential: 'Certificate of Completion',
        status: 'Completed & Verified',
        summary:
          'Systems programming covering memory management, pointer arithmetic, structs, file I/O, and algorithm optimization.',
        skills: ['Systems Programming', 'Pointers & Memory', 'Data Structures'],
      },
      {
        name: 'Python for Data Science',
        issuer: 'NPTEL / Swayam',
        authority: 'Ministry of Education • IIT Madras',
        credential: 'National Academic Certification',
        status: 'Completed & Verified',
        summary:
          'Applied data science curriculum: scientific computing with NumPy, tabular analysis with Pandas, and regression modeling.',
        skills: ['NumPy & Pandas', 'Data Analysis', 'Regression Modeling'],
      },
      {
        name: 'DSA Mastery with Java',
        issuer: 'ExcelR',
        authority: 'Industry Technical Certification',
        credential: 'Certificate of Completion',
        status: 'Completed & Verified',
        summary:
          'Algorithmic problem solving: complexity analysis, trees, graphs, dynamic programming, recursion, and search heuristics.',
        skills: ['DSA in Java', 'Graphs & Trees', 'Dynamic Programming'],
      },
      {
        name: 'PHP & SQL Training Course',
        issuer: 'IIT Bombay',
        authority: 'IIT Bombay • Govt. of India',
        credential: 'Certificate of Completion',
        status: 'Completed & Verified',
        summary:
          'Relational database architecture, normalized schema design, complex SQL queries, ACID compliance, and backend integrations.',
        skills: ['Relational DBs', 'Complex SQL', 'ACID Transactions'],
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

