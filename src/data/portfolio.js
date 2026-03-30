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
      'Developer based in Bangalore, finishing my MCA. Most of what I do lives on the backend - APIs, data pipelines, and the systems users never see but always feel; lately that has meant building a voice authentication system and an anomaly detection pipeline for smart electricity grids, both centered on solving complex problems below the surface.',
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
        'Entry-level developer with internship experience across UI, APIs, testing, automation, and applied AI/ML builds. Strong fit for teams hiring versatile engineers who can learn quickly, own tasks, and contribute across the stack.',
      featureLabel: 'Featured build',
      featureTitle: 'Bio.VAN',
      featureText:
        'Voice authentication platform using speaker embeddings, similarity search, and a lightweight backend pipeline.',
      featureTags: ['Python', 'FastAPI', 'AI'],
      secondaryFeature: {
        label: 'Also in progress',
        title: 'Smart Grid Anomaly Detection',
        text:
          'IoT-based anomaly detection pipeline using LSTM autoencoders to flag unusual electricity usage patterns.',
        tags: ['Python', 'IoT', 'LSTM'],
        status: 'In progress',
      },
      featureAction: 'Project details',
      stats: [
        { label: 'Education', value: 'MCA, Bangalore' },
        { label: 'Experience', value: '2 internships' },
        { label: 'Focus', value: 'Full-Stack + AI/ML' },
        { label: 'Location', value: 'Bangalore, Karnataka' },
      ],
      quote:
        'I focus on building software that is reliable, easy to understand, and useful from day one.',
    },
  },
  skills: {
    id: 'skills',
    kicker: 'Skills',
    title: 'Core Skills',
    intro:
      'Hands-on technologies I use across frontend, backend, databases, testing, and AI/ML experimentation.',
    skillGroups: [
      {
        title: 'Core stack',
        items: [
          { name: 'Python', level: 75 },
          { name: 'Java', level: 60 },
          { name: 'JavaScript', level: 60 },
          { name: 'C', level: 50 },
        ],
      },
      {
        title: 'Frontend',
        items: [
          { name: 'HTML', level: 85 },
          { name: 'CSS', level: 80 },
          { name: 'JavaScript', level: 60 },
          { name: 'React', level: 40 },
        ],
      },
      {
        title: 'Data and tools',
        items: [
          { name: 'PostgreSQL', level: 75 },
          { name: 'MongoDB', level: 50 },
          { name: 'Oracle SQL', level: 70 },
        ],
      },
      {
        title: 'Supporting work',
        items: [
          { name: 'MATLAB', level: 35 },
          { name: 'Testing', level: 60 },
          { name: 'Debugging', level: 75 },
          { name: 'Docker', level: 50 },
        ],
      },
      {
        title: 'Frameworks',
        items: [
          { name: 'Flask', level: 55 },
          { name: 'Django', level: 50 },
          { name: 'FastAPI', level: 60 },
          { name: 'React', level: 40 },
        ],
      },
    ],
  },
  experience: {
    id: 'experience',
    kicker: 'Experience',
    title: 'Internships and Practical Experience',
    intro:
      'Internship experience spanning business application delivery, QA-focused debugging, and automation support in production environments.',
    roles: [
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
    featured: {
      name: 'Biometric Voice Authentication System',
      shortName: 'Bio.VAN',
      start: '2025-11',
      end: '2026-02',
      description:
        'Voice-based authentication system using speaker recognition, FastAPI, and fast similarity search.',
      stack: ['Python', 'FastAPI', 'Milvus', 'SpeechBrain', 'Docker'],
      github: 'https://github.com/Nithin-joshua/Bio.VAN',
      labels: [
        {
          title: 'Recognition',
          text: 'SpeechBrain-based speaker recognition for voice matching.',
        },
        {
          title: 'Search',
          text: 'Milvus-powered similarity search for quick authentication checks.',
        },
        {
          title: 'Backend',
          text: 'FastAPI backend designed for modular testing and deployment.',
        },
      ],
      bullets: [
        'Built speaker verification with ECAPA-TDNN embeddings and SpeechBrain.',
        'Integrated FastAPI with Milvus for near-real-time similarity matching.',
        'Containerized the service with Docker for simpler testing and deployment.',
      ],
      steps: ['Voice sample', 'Embedding', 'Similarity search', 'Authentication'],
    },
    cards: [
      {
        title: 'Smart Electricity Grid Anomaly Detection System',
        description:
          'IoT-based anomaly detection system that flags unusual electricity usage patterns using LSTM autoencoders.',
        stack: ['Python', 'IoT', 'LSTM Autoencoders', 'TensorFlow', 'Time Series'],
        github: 'https://github.com/Nithin-joshua',
        githubLabel: 'GitHub profile',
        status: 'In progress',
        progress: 70,
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
        end: '2026-09',
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
          'Demonstrated advanced Computer Science knowledge at the national level with a 93.71 percentile in UGC-NET December 2025, reflecting strong theoretical grounding, analytical depth, and research aptitude.',
        label: '93.71 percentile',
      },
    ],
  },
  certifications: {
    id: 'certifications',
    kicker: 'Certificates',
    title: 'Certifications',
    intro:
      'Core certifications strengthening programming fundamentals and applied Python knowledge.',
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
    ],
  },
};
