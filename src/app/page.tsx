"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal logoSrc="/images/logo.svg" logoAlt="Futuris" buttonText="Get Started" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to Futuris" subtitle="Join the Future of SaaS" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="Discover Our Solutions" descriptions={['Our technology is sleek and efficient.', 'Empower your business with Futuris.', 'Join us for a transformation.']} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy" steps={[{ title: 'Step 1', description: 'Sign up and create your account.', image: '/images/placeholder1.avif', position: 'left', isCenter: false }, { title: 'Step 2', description: 'Choose your plan.', image: '/images/placeholder2.avif', position: 'center', isCenter: true }, { title: 'Step 3', description: 'Complete your purchase.', image: '/images/placeholder3.avif', position: 'right', isCenter: false }]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics title="Our Tokenomics" description="Understanding the value behind our tokens." tokenData={[{ value: '1M', description: 'Total Supply' }, { value: '500K', description: 'Circulating Supply' }, { value: '250K', description: 'Market Cap' }]} />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ items={[{ title: 'What is Futuris?', content: 'A revolutionary SaaS platform for the modern era.' }, { title: 'How do I get started?', content: 'Simply sign up and choose a plan.' }, { title: 'What features are included?', content: 'Access to advanced analytics, reporting, and support.' }, { title: 'Is there a free trial?', content: 'Yes, we offer a 14-day free trial.' }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="Futuris" logoText="Futuris" items={[{ label: 'Privacy Policy', onClick: () => console.log('Privacy clicked') }, { label: 'Terms of Service', onClick: () => console.log('Terms clicked') }, { label: 'Contact Us', onClick: () => console.log('Contact clicked') }]} />
      </div>
    </SiteThemeProvider>
  );
}