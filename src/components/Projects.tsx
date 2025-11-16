import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import alRayyanHealthcare from "@/assets/al-rayyan-healthcare.png";
import industrialZoneSubstation from "@/assets/industrial-zone-substation.png";
import lusailCommercialTower from "@/assets/lusail-commercial-tower.png";
import westBayFireProtection from "@/assets/west-bay-fire-protection.png";

const Projects = () => {
  const { t, isRTL } = useLanguage();

  const projects = [
    {
      title: t.projects.alRayyan.title,
      sector: t.projects.alRayyan.sector,
      description: t.projects.alRayyan.description,
      image: alRayyanHealthcare,
    },
    {
      title: t.projects.hamadPort.title,
      sector: t.projects.hamadPort.sector,
      description: t.projects.hamadPort.description,
      image: industrialZoneSubstation,
    },
    {
      title: t.projects.lusail.title,
      sector: t.projects.lusail.sector,
      description: t.projects.lusail.description,
      image: lusailCommercialTower,
    },
    {
      title: t.projects.westBay.title,
      sector: t.projects.westBay.sector,
      description: t.projects.westBay.description,
      image: westBayFireProtection,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            {t.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden group cursor-pointer animate-lift animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} bg-accent text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold`}>
                  {project.sector}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
