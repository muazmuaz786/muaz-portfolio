import { Navigation } from './components/navigation';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { SkillsSection } from './components/skills-section';
import { PortfolioSection } from './components/portfolio-section';
import { HobbiesSection } from './components/hobby-section';
import { CertificatesSection } from './components/certificates-section';
import { BlogSection } from './components/blog-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#2C3444] text-white">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CertificatesSection />
        <HobbiesSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
