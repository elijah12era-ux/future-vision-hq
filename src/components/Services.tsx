import { Building, Wrench, Wind, Zap, Flame, Layout } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Building,
      title: t.services.mep.title,
      description: t.services.mep.description,
    },
    {
      icon: Wrench,
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
    },
    {
      icon: Wind,
      title: t.services.hvac.title,
      description: t.services.hvac.description,
    },
    {
      icon: Zap,
      title: t.services.electrical.title,
      description: t.services.electrical.description,
    },
    {
      icon: Flame,
      title: t.services.fire.title,
      description: t.services.fire.description,
    },
    {
      icon: Layout,
      title: t.services.bms.title,
      description: t.services.bms.description,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 border border-divider hover:border-accent transition-all animate-lift cursor-pointer animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-accent/10 to-accent-cyan/10 rounded-lg flex items-center justify-center mb-6 group-hover:from-accent group-hover:to-accent-cyan transition-all ${isRTL ? 'mr-0' : ''}`}>
                <service.icon className="w-8 h-8 text-accent group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
