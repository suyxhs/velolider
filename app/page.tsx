import { AboutSection } from './_sections/About';
import { AudienceSection } from './_sections/Audience';
import { CTASection } from './_sections/CTA';
import { ChallengesSection } from './_sections/Challenges';
import { CompaniesSection } from './_sections/Companies';
import { HeroSection } from './_sections/Hero';
import { MethodSection } from './_sections/Method';
import { ReviewsSection } from './_sections/Reviews';
import { ServicesSection } from './_sections/Services';
import { SectionCards } from './_sections/section-cards';
import { SectionHero } from './_sections/section-hero';

const Home = () => {
  return (
    <main>
      <SectionHero />
      <SectionCards />
      {/* <HeroSection /> */}
      <ChallengesSection />
      <CompaniesSection />
      <AboutSection />
      <ServicesSection />
      <CTASection id="cta-services" variant="mint" />
      <ReviewsSection />
      {/* <AudienceSection /> */}
      {/* <MethodSection /> */}
      <CTASection id="cta-method" variant="sun" />
    </main>
  );
};

export default Home;
