// This file uses Vite dynamic glob import to safely check for a local private_links.local.js file.
// If it exists (during local runs), it loads the private document URLs.
// If it does not exist (during GitHub commits / Vercel public builds), it defaults to empty strings.

const modules = import.meta.glob('./private_links.local.js', { eager: true });
const localData = modules['./private_links.local.js']?.privateLinks || {};

export const privateLinks = {
  certifications: {
    python: '',
    cProgramming: '',
    pythonForDataScience: '',
    dsaMastery: '',
    phpSql: '',
    ...(localData.certifications || {})
  },
  publications: {
    comparativeAnalysis: '',
    ...(localData.publications || {})
  },
  achievements: {
    ugcNet: '',
    ...(localData.achievements || {})
  }
};
