import { Award, Shield, Target, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const Clients = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  return <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            {t.clients.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.clients.subtitle}
          </p>
        </div>

        {/* Client Logos Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {Array.from({
          length: 6
        }).map((_, i) => <div key={i} className="aspect-video bg-card rounded-lg border border-divider flex items-center justify-center hover:border-accent transition-all grayscale hover:grayscale-0 animate-lift animate-in fade-in duration-700" style={{
          animationDelay: `${i * 100}ms`
        }}>
              <span className="text-muted-foreground font-semibold">
                {isRTL ? `عميل ${i + 1}` : `Client ${i + 1}`}
              </span>
            </div>)}
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[{
          icon: Shield,
          label: isRTL ? "معتمد من NFPA" : "NFPA Certified"
        }, {
          icon: Award,
          label: "ISO 9001:2015"
        }, {
          icon: Target,
          label: isRTL ? "الامتثال لـ QHSE" : "QHSE Compliance"
        }, {
          icon: Users,
          label: isRTL ? "محترفون مدربون" : "Trained Professionals"
        }].map((cert, index) => {})}
        </div>
      </div>
    </section>;
};
export default Clients;