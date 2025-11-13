import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-screen flex items-center pt-20 md:pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Futuristic construction site in Doha"
          className="hidden md:block w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-navy to-accent-cyan md:hero-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-white space-y-4 md:space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              FUTURISTIC
              <br />
              <span className="text-accent">INTERNATIONAL</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90">
              Engineering the future of construction & MEP maintenance in Qatar
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-xl">
              We deliver turnkey construction, EPC electrical substations, HVAC & mechanical systems, 
              fire protection, and full MEP maintenance — on time and to the highest international standards.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Button
                size="default"
                className="button-gradient text-primary-foreground font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 hover:shadow-2xl transition-all group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Request a Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button
                size="default"
                variant="outline"
                className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Services
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-white/90 pt-2 md:pt-4">
              <Phone size={18} className="md:w-5 md:h-5" />
              <span className="font-semibold text-sm md:text-base">+974 7734 7300</span>
            </div>
          </div>

          {/* Right Column - Stats/Features */}
          <div className="hidden lg:grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-right duration-700 delay-200">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "200+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all animate-lift"
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
