import { Building2, Cog, Flame } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Building2,
      title: t.services.mep.title,
      description: t.services.mep.description,
    },
    {
      icon: Cog,
      title: t.services.hvac.title,
      description: t.services.hvac.description,
    },
    {
      icon: Flame,
      title: t.services.fire.title,
      description: t.services.fire.description,
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-background rounded-xl p-8 border border-divider hover:border-accent transition-all animate-lift animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br from-accent to-accent-cyan rounded-lg flex items-center justify-center mb-6 ${isRTL ? 'mr-0' : ''}`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
