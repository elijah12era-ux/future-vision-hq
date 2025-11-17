import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WelcomeOverlay from "@/components/WelcomeOverlay";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import hvacImage from "@/assets/hvac-outdoor-units.png";

const Index = () => {
  return (
    <>
      <WelcomeOverlay />
      <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ContainerScroll titleComponent={<>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
                Experience Innovation
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover how we transform complex engineering challenges into elegant solutions
              </p>
            </>}>
          <img src={hvacImage} alt="HVAC Outdoor Units Installation" className="mx-auto rounded-2xl object-cover h-full w-full object-center" />
        </ContainerScroll>
        <About />
        <Services />
        <Projects />
        <Clients />
        <WhyChooseUs />
        
        <Contact />
      </main>
      <Footer />
      </div>
    </>
  );
};
export default Index;