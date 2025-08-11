import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import SolutionsSection from "@/components/SolutionsSection";
import MonitoringSection from "@/components/MonitoringSection";
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
      <StatsSection />
      <ProblemSolutionSection />
      <MonitoringSection />
      <SolutionsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
