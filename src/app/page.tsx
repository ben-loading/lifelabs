import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ProductSection } from "@/components/product-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <PhilosophySection />
        <ProductSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
