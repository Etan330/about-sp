import { lazy, Suspense } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { PageWrapper } from './components/layout/PageWrapper';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CursorTrail } from './components/effects/CursorTrail';
import { PointerAura } from './components/effects/PointerAura';
import { BackgroundGlow } from './components/effects/BackgroundGlow';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { EducationSection } from './components/sections/EducationSection';
import { ContactSection } from './components/sections/ContactSection';
import { SectionDivider } from './components/effects/SectionDivider';

const Scene3D = lazy(() =>
  import('./components/background/Scene3D').then((module) => ({
    default: module.Scene3D,
  })),
);

function App() {
  return (
    <LanguageProvider>
      <PageWrapper>
        <CursorTrail />
        <PointerAura />
        <BackgroundGlow />
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
        <Navbar />
        <main>
          <HeroSection />
          <SectionDivider variant="diagonal" />
          <AboutSection />
          <SectionDivider variant="wave" />
          <SkillsSection />
          <SectionDivider variant="diagonal" />
          <ExperienceSection />
          <SectionDivider variant="wave" />
          <ProjectsSection />
          <SectionDivider variant="diagonal" />
          <EducationSection />
          <SectionDivider variant="wave" />
          <ContactSection />
        </main>
        <Footer />
      </PageWrapper>
    </LanguageProvider>
  );
}

export default App;
