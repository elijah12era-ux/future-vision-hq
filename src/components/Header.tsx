import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.clients, href: "#clients" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div 
        className={`container mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled ? "py-3" : "py-3"
        }`}
        style={{
          background: 'rgba(12, 39, 74, 0.55)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.10)',
          maxWidth: '1280px',
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-1.5`}>
            <div className="h-8 w-8 md:h-10 md:w-10 bg-gradient-to-br from-accent to-accent-cyan rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-base md:text-xl">
                {isRTL ? "أ" : "A"}
              </span>
            </div>
            <span className="font-heading font-bold text-base md:text-xl text-white hidden sm:block">
              Futuristic International
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-4 lg:space-x-8`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm lg:text-base text-white/90 hover:text-white hover:opacity-100 transition-all font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
            >
              <Languages size={16} />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </Button>
            <Button
              size="sm"
              className="button-gradient text-white font-semibold"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.contact.title}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 md:hidden`}>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="p-2 border-white/20 text-white hover:bg-white/10"
            >
              <Languages size={18} />
            </Button>
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-white/90 hover:text-white transition-colors font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full mt-4 button-gradient text-white font-semibold"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {t.contact.title}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;