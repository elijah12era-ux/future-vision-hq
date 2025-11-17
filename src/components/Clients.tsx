import { useLanguage } from "@/contexts/LanguageContext";
import wholesomeOasis from "@/assets/clients/wholesome-oasis.png";
import brickStone from "@/assets/clients/brick-stone.png";
import qdSbg from "@/assets/clients/qd-sbg.png";
import landmark from "@/assets/clients/landmark.png";
import tawarMall from "@/assets/clients/tawar-mall.png";
import ooredoo from "@/assets/clients/ooredoo.png";
import qtf from "@/assets/clients/qtf.png";
import hamadPort from "@/assets/clients/hamad-port.png";
import dohaFestivalCity from "@/assets/clients/doha-festival-city.png";
import ministryLogo from "@/assets/clients/ministry-logo.png";
import globeUniforms from "@/assets/clients/globe-uniforms.png";
import alRayyanSatellite from "@/assets/clients/al-rayyan-satellite.png";
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

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {[
            { src: wholesomeOasis, alt: "Wholesome Oasis" },
            { src: brickStone, alt: "Brick Stone" },
            { src: qdSbg, alt: "QD-SBG" },
            { src: landmark, alt: "Landmark" },
            { src: tawarMall, alt: "Tawar Mall" },
            { src: ooredoo, alt: "Ooredoo" },
            { src: qtf, alt: "Qatar Tennis Federation" },
            { src: hamadPort, alt: "Hamad Port" },
            { src: dohaFestivalCity, alt: "Doha Festival City" },
            { src: ministryLogo, alt: "Ministry" },
            { src: globeUniforms, alt: "Globe Uniforms" },
            { src: alRayyanSatellite, alt: "Al Rayyan Satellite Channel" },
          ].map((client, i) => (
            <div 
              key={i} 
              className="aspect-video bg-card rounded-lg border border-divider flex items-center justify-center p-6 hover:border-accent hover:shadow-lg transition-all animate-lift animate-in fade-in duration-700" 
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img 
                src={client.src} 
                alt={client.alt} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Certifications */}
        
      </div>
    </section>;
};
export default Clients;