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
      className={`fixed top-0 ${isRTL ? 'right-0 left-0' : 'left-0 right-0'} z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-md py-3" : "bg-card/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
            <div className="h-8 w-8 md:h-10 md:w-10 bg-gradient-to-br from-accent to-accent-cyan rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-base md:text-xl">
                {isRTL ? "أ" : "A"}
              </span>
            </div>
            <span className="font-heading font-bold text-base md:text-xl text-primary hidden sm:block">
              Futuristic International
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-4 lg:space-x-8`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm lg:text-base text-foreground hover:text-accent transition-colors font-medium"
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
              className="flex items-center gap-2"
            >
              <Languages size={16} />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </Button>
            <Button
              size="sm"
              className="button-gradient text-primary-foreground font-semibold"
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
              className="p-2"
            >
              <Languages size={18} />
            </Button>
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-divider pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full mt-4 button-gradient text-primary-foreground font-semibold"
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