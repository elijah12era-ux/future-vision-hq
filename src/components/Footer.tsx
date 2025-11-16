import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{t.footer.company}</h3>
            <p className="text-primary-foreground/80 text-sm">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">{t.nav.about}</a></li>
              <li><a href="#projects" className="text-primary-foreground/80 hover:text-accent transition-colors">{t.nav.projects}</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">{t.services.mep.title}</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">{t.services.hvac.title}</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">{t.services.fire.title}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{isRTL ? "تابعنا" : "Follow Us"}</h3>
            <div className={`flex ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">© {currentYear} {t.footer.company}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
