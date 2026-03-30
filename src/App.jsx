// This file assembles the single-page portfolio experience.
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';
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

      <div className="app-inner">
        <SiteHeader
          brand={portfolio.brand}
          navigation={portfolio.navigation}
          activeSectionId={activeSectionId}
          resume={portfolio.resume}
        />

        <main className="page-content">
          <HeroSection hero={portfolio.hero} links={portfolio.links} />
          <SkillsSection skills={portfolio.skills} />
          <ExperienceSection experience={portfolio.experience} />
          <ProjectsSection projects={portfolio.projects} />
          <EducationSection education={portfolio.education} />
          <AchievementsSection achievements={portfolio.achievements} />
          <CertificationsSection certifications={portfolio.certifications} />
          <ContactSection contact={portfolio.contact} />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}

export default App;
