import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero/Hero';
import SubHeadline from '@/components/sections/SubHeadline/SubHeadline';
import CapabilitiesDiagram from '@/components/sections/CapabilitiesDiagram/CapabilitiesDiagram';
import CapabilitiesGrid from '@/components/sections/CapabilitiesGrid/CapabilitiesGrid';
import ServiceAreas from '@/components/sections/ServiceAreas/ServiceAreas';
import WorkModels from '@/components/sections/WorkModels/WorkModels';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import RecentCases from '@/components/sections/RecentCases/RecentCases';
import FAQ from '@/components/sections/FAQ/FAQ';
import WhyAkeru from '@/components/sections/WhyAkeru/WhyAkeru';
import ClosingCTA from '@/components/sections/ClosingCTA/ClosingCTA';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop/BackToTop';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SubHeadline />
      <CapabilitiesDiagram />
      <CapabilitiesGrid />
      <ServiceAreas />
      <WorkModels />
      <Testimonials />
      <RecentCases />
      <FAQ />
      <WhyAkeru />
      <ClosingCTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
