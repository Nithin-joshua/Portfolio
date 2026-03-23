// This file holds all portfolio content in one place so it is easy to update later.
export const portfolio = {
  brand: 'NV',
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
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    id: 'hero',
    smallNote: 'Website for Nithin V',
    titleLines: ['Nithin V'],
    meta: [
      { label: 'Name', value: 'Nithin V' },
      { label: 'Location', value: 'Bangalore, Karnataka' },
      { label: 'Focus', value: 'Backend and frontend development' },
    ],
    intro:
      'I build practical backend systems and user interfaces, focusing on clean code, reliability, and maintainability.',
    primaryAction: {
      label: 'View projects',
      target: 'projects',
    },
    secondaryAction: {
      label: 'Get in touch',
      target: 'contact',
    },
    board: {
      sectionTabs: ['About', 'Projects', 'Work', 'Contact'],
      cardLabel: 'Short profile',
      cardTitle: 'Nithin V',
      cardText:
        'MCA student with hands-on experience in Python, Java, FastAPI, and React.',
      featureLabel: 'Featured build',
      featureTitle: 'Bio.VAN',
      featureText:
        'Voice authentication using speaker embeddings and a lightweight backend pipeline.',
      featureAction: 'Project details',
      stats: [
        { label: 'Current study', value: 'MCA' },
        { label: 'Recent stack', value: 'Python, FastAPI, Java' },
        { label: 'Based in', value: 'Bangalore' },
      ],
      quote:
        'Clear structure, practical decisions, and systems that can be maintained.',
    },
  },
  about: {
    id: 'about',
    kicker: 'About',
    title: 'Built around steady work',
    intro:
      'A focus on clean architecture and practical solutions, moving from backend stability to seamless user experiences.',
    paragraphs: [
      'I bridge backend logic and user interfaces, prioritizing reliability before scaling outward.',
      'My focus is on structural clarity, efficient data flow, and smart debugging to keep applications running smoothly.',
    ],
    quickFacts: [
      { label: 'Based in', value: 'Bangalore, Karnataka' },
      { label: 'Current degree', value: 'Master of Computer Applications' },
      { label: 'Core tools', value: 'Python, Java, React, FastAPI' },
    ],
    identity: {
      overline: 'Profile',
      title: 'Nithin V',
      detail:
        'Grounded in backend systems, comfortable with frontend development, and focused on clean implementation.',
      monogram: 'NV',
    },
    skillGroups: [
      {
        title: 'Core stack',
        items: [
          { name: 'Python', level: 75 },
          { name: 'Java', level: 60 },
          { name: 'React', level: 30 },
          { name: 'JavaScript', level: 60 },
          { name: 'Django', level: 50 },
          { name: 'FastAPI', level: 60 },
          { name: 'C', level: 50 }
        ],
      },
      {
        title: 'Frontend',
        items: [
          { name: 'HTML', level: 85 },
          { name: 'CSS', level: 80 },
          { name: 'React', level: 40 }
        ],
      },
      {
        title: 'Data and tools',
        items: [
          { name: 'PostgreSQL', level: 75 },
          { name: 'MongoDB', level: 50 },
          { name: 'Oracle SQL', level: 70 },
          { name: 'Docker', level: 50 },
          { name: 'Flask', level: 55 }
        ],
      },
      {
        title: 'Supporting work',
        items: [
          { name: 'MATLAB', level: 35 },
          { name: 'Testing', level: 60 },
          { name: 'Debugging', level: 75 }
        ],
      },
    ],
  },
  experience: {
    id: 'experience',
    kicker: 'Experience',
    title: 'Work',
    intro:
      'Practical internships focused on application delivery, automation, and reliable testing.',
    roles: [
      {
        company: 'Dyashin Technosoft Pvt. Ltd.',
        role: 'Java Developer Intern',
        location: 'Bangalore',
        start: '2025-09',
        end: '2025-10',
        focus: 'Java, Spring Boot, React',
        summary:
          'Developed applications matching backend logic with frontend delivery.',
        bullets: [
          'Built and maintained systems using Java, Spring Boot, and React.',
          'Integrated frontend interfaces with robust backend APIs.',
          'Streamlined deployment, debugging, and code reliability.',
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
          'Focused on automation, testing workflows, and production-level debugging.',
        bullets: [
          'Developed robotic control code to enhance automation stability.',
          'Optimized performance using embedded systems and testing frameworks.',
          'Improved QA processes to reduce operational errors.',
        ],
        tools: ['Testing', 'Automation', 'Embedded systems'],
      },
    ],
  },
  projects: {
    id: 'projects',
    kicker: 'Projects',
    title: 'Project detail',
    intro:
      'A deep dive into a core project, highlighting architecture, deployment, and practical problem-solving.',
    featured: {
      name: 'Biometric Voice Authentication System',
      shortName: 'Bio.VAN',
      start: '2025-11',
      end: '2026-02',
      description:
        'Voice authentication system using speaker recognition, fast embedding search, and an efficient backend flow.',
      stack: ['Python', 'FastAPI', 'Milvus', 'SpeechBrain', 'Docker'],
      github: 'https://github.com/Nithin-joshua/Bio.VAN',
      labels: [
        { title: 'Recognition', text: 'ECAPA-TDNN speaker recognition with SpeechBrain.' },
        { title: 'Search', text: 'Cosine similarity against encrypted embeddings.' },
        { title: 'Backend', text: 'FastAPI with Milvus for retrieval and matching.' },
      ],
      bullets: [
        'Implemented speaker recognition with ECAPA-TDNN and SpeechBrain.',
        'Built FastAPI backend with Milvus for fast similarity search on encrypted embeddings.',
        'Optimized architecture for lightweight preprocessing and modular deployment.',
      ],
      steps: ['Voice sample', 'Embedding', 'Similarity search', 'Authentication'],
    },
  },
  education: {
    id: 'education',
    kicker: 'Education',
    title: 'Education',
    intro:
      'A solid foundation in computer science and electronics, advancing through a Master\'s degree.',
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
    title: 'Milestones',
    intro:
      'Key milestones reflecting a commitment to academic excellence and technical growth.',
    entries: [
      {
        title: 'UGC-NET December 2025',
        detail: 'Cleared UGC-NET December 2025 (Computer Science) with a 93.71 percentile, qualifying for Assistant Professor and Ph.D. admission, demonstrating strong academic and research potential.',
        label: 'Qualified',
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
    ],
  },
  contact: {
    id: 'contact',
    kicker: 'Contact',
    titleLines: ['Thanks', 'for visiting'],
    note:
      'Open to discussing development work, backend systems, or internship opportunities. Let\'s connect.',
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
