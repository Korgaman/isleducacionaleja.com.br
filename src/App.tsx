import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Simulator from './components/Simulator';
import Pricing from './components/Pricing';
import MecInfo from './components/MecInfo';
import Testimonials from './components/Testimonials';
import AddressMap from './components/AddressMap';
import Faq from './components/Faq';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50/30 selection:bg-brand-cyan/20 selection:text-brand-blue" id="app-root">
      {/* Header */}
      <Navbar />

      {/* Hero Intro */}
      <Hero />

      {/* Core Advantages (Formação rápida, pagamentos flexíveis, sem complicação) */}
      <Features />

      {/* Step by step mechanism */}
      <HowItWorks />

      {/* Interactive Simulator with WhatsApp outcome */}
      <Simulator />

      {/* Pricing & Advantages table */}
      <Pricing />

      {/* MEC / CEE Accreditation details */}
      <MecInfo />

      {/* Student success stories */}
      <Testimonials />

      {/* Contact, Polo details and Address Map */}
      <AddressMap />

      {/* Accordion FAQ resolver */}
      <Faq />

      {/* Footer information and legal details */}
      <Footer />

      {/* Floating Action WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}
