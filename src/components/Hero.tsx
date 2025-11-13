import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Futuristic construction site in Doha"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-white space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              FUTURISTIC
              <br />
              <span className="text-accent">INTERNATIONAL</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-white/90">
              Engineering the future of construction & MEP maintenance in Qatar
            </p>
            <p className="text-lg text-white/80 max-w-xl">
              We deliver turnkey construction, EPC electrical substations, HVAC & mechanical systems, 
              fire protection, and full MEP maintenance — on time and to the highest international standards.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="button-gradient text-primary-foreground font-bold text-lg px-8 py-6 hover:shadow-2xl transition-all group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Request a Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary font-bold text-lg px-8 py-6"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Services
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-white/90 pt-4">
              <Phone size={20} />
              <span className="font-semibold">+974 7734 7300</span>
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
