import { Card } from "@/components/ui/card";
import alRayyanHealthcare from "@/assets/al-rayyan-healthcare.png";
import industrialZoneSubstation from "@/assets/industrial-zone-substation.png";

const Projects = () => {
  const projects = [
    {
      title: "Al Rayyan Healthcare Facility",
      sector: "Healthcare",
      description: "Complete MEP systems installation for 200-bed medical center",
      image: alRayyanHealthcare,
    },
    {
      title: "Industrial Zone Substation",
      sector: "Industrial",
      description: "132kV electrical substation EPC project with full commissioning",
      image: industrialZoneSubstation,
    },
    {
      title: "Lusail Commercial Tower",
      sector: "Commercial",
      description: "HVAC and BMS integration for 40-story office building",
      image: "https://share.google/images/cWFyfH2VA7tPgvwf9",
    },
    {
      title: "West Bay Fire Protection",
      sector: "Commercial",
      description: "NFPA-compliant fire protection system for high-rise complex",
      image: "https://share.google/images/ReQp10hoEKWhYx4nD",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Selected Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence across healthcare, industrial, and commercial sectors throughout Qatar.
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
                <div className="absolute top-3 right-3 bg-accent text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
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
