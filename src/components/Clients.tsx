import { Award, Shield, Target, Users } from "lucide-react";

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Our Clients & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by commercial, industrial, and government clients across Qatar. 
            Team certified by NFPA and leading global standards.
          </p>
        </div>

        {/* Client Logos Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video bg-card rounded-lg border border-divider flex items-center justify-center hover:border-accent transition-all grayscale hover:grayscale-0 animate-lift animate-in fade-in duration-700"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-muted-foreground font-semibold">Client {i + 1}</span>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Shield, label: "NFPA Certified" },
            { icon: Award, label: "ISO 9001:2015" },
            { icon: Target, label: "QHSE Compliance" },
            { icon: Users, label: "Trained Professionals" },
          ].map((cert, index) => (
            <div
              key={cert.label}
              className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-divider hover:border-accent transition-all animate-lift animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-cyan rounded-lg flex items-center justify-center mb-4">
                <cert.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-semibold text-primary">{cert.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
