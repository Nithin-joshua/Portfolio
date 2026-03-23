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
      'I build backend systems and user-facing interfaces with a practical focus on clear code, reliable delivery, and work that stays usable after handoff.',
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
        'MCA student with hands-on experience across Python, Java, FastAPI, Django, and React.',
      featureLabel: 'Featured build',
      featureTitle: 'Bio.VAN',
      featureText:
        'Voice authentication built around speaker embeddings, similarity search, and a lightweight backend pipeline.',
      featureAction: 'Project details',
      stats: [
        { label: 'Current study', value: 'MCA' },
        { label: 'Recent stack', value: 'Python, FastAPI, Java' },
        { label: 'Based in', value: 'Bangalore' },
      ],
      quote:
        'Clear structure, practical decisions, and systems that can be maintained without drama.',
    },
  },
  about: {
    id: 'about',
    kicker: 'About',
    title: 'Built around steady work',
    intro:
      'The reference portfolio uses a quiet, high-contrast rhythm. This version keeps that mood, but shifts the story to the work and study shown in the resume.',
    paragraphs: [
      'I work across backend systems and interfaces, usually starting from the part that needs to be dependable before moving outward to the user experience.',
      'My resume is strongest where application logic, data flow, and implementation detail meet. I like work that asks for structure, debugging, and small decisions that make a project easier to keep running.',
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
        'Grounded in backend logic, comfortable in the interface layer, and most at home when a project needs careful implementation rather than noise.',
      monogram: 'NV',
    },
    skillGroups: [
      {
        title: 'Core stack',
        items: ['Python', 'Java', 'React', 'JavaScript', 'Django', 'FastAPI'],
      },
      {
        title: 'Frontend',
        items: ['HTML', 'CSS', 'React'],
      },
      {
        title: 'Data and tools',
        items: ['PostgreSQL', 'MongoDB', 'Oracle SQL', 'Docker', 'Flask'],
      },
      {
        title: 'Supporting work',
        items: ['MATLAB', 'C', 'Testing', 'Debugging'],
      },
    ],
  },
  experience: {
    id: 'experience',
    kicker: 'Experience',
    title: 'Work',
    intro:
      'Two internships shaped the practical side of the resume: one centered on application delivery, the other on automation and testing.',
    roles: [
      {
        company: 'Dyashin Technosoft Pvt. Ltd.',
        role: 'Java Developer Intern',
        location: 'Bangalore',
        start: '2025-09',
        end: '2025-10',
        focus: 'Java, Spring Boot, React',
        summary:
          'Worked on application development with a clear split between backend logic and frontend delivery.',
        bullets: [
          'Built and maintained applications using Java, Spring Boot, and React.',
          'Integrated frontend interfaces with backend APIs and contributed to overall system structure.',
          'Improved deployment flow, debugging, and day-to-day code reliability.',
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
          'Worked closer to automation systems, testing flow, and the kind of debugging that shows up in production environments.',
        bullets: [
          'Developed and debugged robotic control code to improve automation and system stability.',
          'Worked with embedded systems and testing frameworks to improve performance.',
          'Contributed to QA and process integration, reducing operational errors.',
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
      'The resume lists one substantial project, so this section goes deeper on how it works rather than padding the page with filler.',
    featured: {
      name: 'Biometric Voice Authentication System',
      shortName: 'Bio.VAN',
      start: '2025-11',
      end: '2026-02',
      description:
        'A voice authentication system built around speaker recognition, embedding search, and a backend flow designed for efficient deployment.',
      stack: ['Python', 'FastAPI', 'Milvus', 'SpeechBrain', 'Docker'],
      github: 'https://github.com/Nithin-joshua/Bio.VAN',
      labels: [
        { title: 'Recognition', text: 'ECAPA-TDNN speaker recognition with SpeechBrain.' },
        { title: 'Search', text: 'Cosine similarity against encrypted embeddings.' },
        { title: 'Backend', text: 'FastAPI with Milvus for retrieval and matching.' },
      ],
      bullets: [
        'Built speaker recognition using ECAPA-TDNN through SpeechBrain.',
        'Developed the backend with FastAPI and Milvus, using cosine similarity and encrypted embeddings.',
        'Kept preprocessing light and the architecture modular so the system could be deployed without unnecessary overhead.',
      ],
      steps: ['Voice sample', 'Embedding', 'Similarity search', 'Authentication'],
    },
  },
  education: {
    id: 'education',
    kicker: 'Education',
    title: 'Education',
    intro:
      'Both degrees come from the same college, with the MCA building on the computer science and electronics foundation from the undergraduate work.',
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
      'Key academic and professional highlights that demonstrate a commitment to deep learning and standardized excellence.',
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
      'The certifications stay close to programming fundamentals and applied Python work, which fits the rest of the resume well.',
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
      'If you want to talk about development work, backend systems, or an internship role, send a note. I keep things straightforward.',
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
