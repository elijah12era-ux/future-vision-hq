import { Building, Wrench, Wind, Zap, Flame, Layout } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Construction & Site Development",
      description: "Complete turnkey construction solutions for industrial, commercial, and residential projects.",
    },
    {
      icon: Wrench,
      title: "MEP Maintenance & Operations",
      description: "24/7 preventive and corrective maintenance for all mechanical, electrical, and plumbing systems.",
    },
    {
      icon: Wind,
      title: "HVAC Engineering",
      description: "Design, installation, and optimization of heating, ventilation, and air conditioning systems.",
    },
    {
      icon: Zap,
      title: "Electrical & Substations",
      description: "EPC electrical projects, substation design, and power distribution solutions.",
    },
    {
      icon: Flame,
      title: "Fire Protection Systems",
      description: "NFPA-compliant fire detection, suppression, and protection system installation.",
    },
    {
      icon: Layout,
      title: "Building Management Systems",
      description: "Intelligent BMS solutions for monitoring and controlling building operations.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            End-to-end services across Construction, MEP Maintenance, Electrical & Substations, 
            HVAC, Fire Protection, and Building Management Systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 border border-divider hover:border-accent transition-all animate-lift cursor-pointer animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-accent-cyan/10 rounded-lg flex items-center justify-center mb-6 group-hover:from-accent group-hover:to-accent-cyan transition-all">
                <service.icon className="w-8 h-8 text-accent group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
