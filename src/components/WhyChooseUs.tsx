import { ShieldCheck, Workflow, MapPin, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Safety & Standards",
      description: "NFPA-trained staff and strict quality control on every project.",
    },
    {
      icon: Workflow,
      title: "End-to-End Services",
      description: "Single point of contact from design to commissioning and maintenance.",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Qatar-based delivery with deep understanding of regional requirements.",
    },
    {
      icon: TrendingUp,
      title: "Value Engineering",
      description: "Optimized efficiency and cost-effectiveness without compromising quality.",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining technical excellence with reliable service delivery across all project phases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent to-accent-cyan rounded-2xl flex items-center justify-center shadow-lg animate-lift">
                <reason.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
