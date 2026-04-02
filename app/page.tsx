import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Includes from "@/components/Includes";
import ForWhom from "@/components/ForWhom";
import Creator from "@/components/Creator";
import Testimonials from "@/components/Testimonials";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Includes />
      <ForWhom />
      <Creator />
      <Testimonials />
      <CtaFinal />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
