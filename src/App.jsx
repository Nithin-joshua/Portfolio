import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CredentialsSection from './components/CredentialsSection';
import PublicationsSection from './components/PublicationsSection';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';
import { portfolio } from './data/portfolio';

function App() {
  return (
    <div className="site-shell">
      <div className="page-ring ring-one" />
      <div className="page-ring ring-two" />
      <div className="page-ring ring-three" />

      <SiteHeader
        logo={portfolio.logo}
        navigation={portfolio.navigation}
        resume={portfolio.resume}
      />

      <div className="app-inner">
        <main id="main-content" className="page-content">
          <HeroSection hero={portfolio.hero} links={portfolio.links} />
          <ExperienceSection experience={portfolio.experience} />
          <ProjectsSection projects={portfolio.projects} />
          <SkillsSection skills={portfolio.skills} />
          <CredentialsSection
            education={portfolio.education}
            achievements={portfolio.achievements}
            certifications={portfolio.certifications}
          />
          <PublicationsSection publications={portfolio.publications} />
          <ContactSection
            contact={portfolio.contact}
            links={portfolio.links}
            resume={portfolio.resume}
          />
        </main>
        <SiteFooter logo={portfolio.logo} />
      </div>
    </div>
  );
}

export default App;
