import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SecuritySection from "@/components/SecuritySection";
import CRMSection from "@/components/CRMSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SecuritySection />
      <CRMSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
