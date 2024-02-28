"use client"
import { useEffect, useState } from 'react'

import { AboutSection } from './_sections/About';
import { AudienceSection } from './_sections/Audience';
import { CTASection } from './_sections/CTA';
import { OffersSection } from './_sections/Offers';
import { ChallengesSection } from './_sections/Challenges';
import { CompaniesSection } from './_sections/Companies';
import { HeroSection } from './_sections/Hero';

import { ReviewsSection } from './_sections/Reviews';
import { ServicesSection } from './_sections/Services';
import { SectionCards } from './_sections/section-cards';
import { SectionHero } from './_sections/section-hero';
import { DefaultAccordion } from '@/components/ui/Accordion';
import MethodSection from './_sections/Method';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader';
import { SetCtaSection } from './_sections/SetCtaSection';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {
          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <SectionHero />
      <SectionCards />
      {/* <HeroSection /> */}
      <ChallengesSection />
      <CompaniesSection />
      <AboutSection />
      <SetCtaSection id="cta-method" variant="violet" />
      <ServicesSection />
      <CTASection id="cta-services" variant="mint" />
      <ReviewsSection />
      {/* <AudienceSection /> */}
      <MethodSection />
      {/* <CTASection id="cta-method" variant="sun" /> */}
      <DefaultAccordion />
      <OffersSection id="cta-method" variant="sun" />
    </main>
  );
};

export default Home;
