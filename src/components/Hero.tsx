import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-accent">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${isRTL ? '45deg' : '-45deg'}, transparent 45%, rgba(255,255,255,.1) 49%, rgba(255,255,255,.1) 51%, transparent 55%)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="text-white space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              {t.hero.subtitle}
            </p>

            {/* CTA Button */}
            <div className={`flex flex-col sm:flex-row ${isRTL ? 'space-x-reverse' : ''} gap-4 justify-center pt-4`}>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold text-base md:text-lg px-8 py-6 shadow-2xl transition-all group"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                {t.hero.cta}
                <ArrowRight
                  className={`${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} transition-transform`}
                  size={18}
                />
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            {[
              { number: t.about.yearsExperience, label: t.about.yearsDesc },
              { number: t.about.projectsCompleted, label: t.about.projectsDesc },
              { number: t.about.certifiedEngineers, label: t.about.certifiedDesc },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;