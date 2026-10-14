import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CredentialsSection from './components/CredentialsSection';
import PublicationsSection from './components/PublicationsSection';
import ContactSection from './components/ContactSection';
import { portfolio } from './data/portfolio';
import useActiveSection from './hooks/useActiveSection';

function App() {
  const sectionIds = portfolio.navigation.map((item) => item.id);
  const activeSectionId = useActiveSection(sectionIds);

  return (
    <div className="site-shell">
      <div className="page-ring ring-one" />
      <div className="page-ring ring-two" />
      <div className="page-ring ring-three" />

      <SiteHeader
        logo={portfolio.logo}
        navigation={portfolio.navigation}
        activeSectionId={activeSectionId}
        resume={portfolio.resume}
      />

      <div className="app-inner">
        <main className="page-content">
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
      </div>
    </div>
  );
}

export default App;
