import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
const Hero = () => {
  return <section id="home" className="relative overflow-hidden">
      {/* Animated Hero Section */}
      <HeroGeometric badge="Futuristic International" title1="Engineering the Future" title2="of Construction & MEP" className="min-h-[600px] md:min-h-screen flex items-center" />

      {/* Additional Content Section */}
      <div className="container mx-auto px-4 relative z-10 -mt-20 md:-mt-32 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - CTA Buttons */}
          <div className="text-white space-y-6">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="button-gradient text-primary-foreground font-bold text-base md:text-lg px-8 py-6 hover:shadow-2xl transition-all group w-full sm:w-auto" onClick={() => document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth"
            })}>
                Request a Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-white/90 pt-4">
              <Phone size={18} className="md:w-5 md:h-5" />
              <span className="font-semibold text-sm md:text-base">+974 7734 7300</span>
            </div>
          </div>

          {/* Right Column - Stats/Features */}
          <div className="hidden lg:grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-right duration-700 delay-200">
            {[{
            number: "15+",
            label: "Years Experience"
          }, {
            number: "200+",
            label: "Projects Completed"
          }, {
            number: "100%",
            label: "Client Satisfaction"
          }, {
            number: "24/7",
            label: "Support Available"
          }].map(stat => <div key={stat.label} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all animate-lift">
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Decorative Grid Pattern */}
      
    </section>;
};
export default Hero;