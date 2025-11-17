import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import Map from "@/components/Map";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(50, "Phone must be less than 50 characters").optional(),
  projectType: z.string().min(1, "Project type is required"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);

      const { error } = await supabase.from("contacts").insert({
        name: validatedData.name,
        company: validatedData.company || null,
        email: validatedData.email,
        phone: validatedData.phone || null,
        project_type: validatedData.projectType,
        message: validatedData.message,
      });

      if (error) throw error;

      toast.success(t.contact.form.success);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast.error(firstError.message);
      } else {
        console.error("Error submitting contact form:", error);
        toast.error(t.contact.form.error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-in fade-in slide-in-from-left duration-700"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.name} *
                </label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={isRTL ? "أحمد محمد" : "John Smith"}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.company}
                </label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder={isRTL ? "شركة المستقبل" : "Future Company"}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.email} *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={isRTL ? "info@example.qa" : "contact@example.com"}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.phone}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+974 XXXX XXXX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                {t.contact.form.projectType} *
              </label>
              <Select
                required
                value={formData.projectType}
                onValueChange={(value) => setFormData({ ...formData, projectType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder={isRTL ? "اختر نوع المشروع" : "Select project type"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mep">{t.contact.form.projectTypes.mep}</SelectItem>
                  <SelectItem value="electrical">{t.contact.form.projectTypes.electrical}</SelectItem>
                  <SelectItem value="hvac">{t.contact.form.projectTypes.hvac}</SelectItem>
                  <SelectItem value="fire">{t.contact.form.projectTypes.fire}</SelectItem>
                  <SelectItem value="maintenance">{t.contact.form.projectTypes.maintenance}</SelectItem>
                  <SelectItem value="other">{t.contact.form.projectTypes.other}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t.contact.form.message} *
              </label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={isRTL ? "أخبرنا عن مشروعك..." : "Tell us about your project..."}
                rows={6}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full button-gradient text-primary-foreground font-semibold"
            >
              {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
            </Button>
          </form>

          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700">
            <div>
              <h3 className="font-heading font-bold text-2xl text-primary mb-6">
                {t.contact.info.title}
              </h3>
              <div className="space-y-6">
                <div className={`flex ${isRTL ? 'space-x-reverse' : ''} items-start space-x-4`}>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t.contact.info.phone}</h4>
                    <p className="text-muted-foreground">+974 XXXX XXXX</p>
                  </div>
                </div>

                <div className={`flex ${isRTL ? 'space-x-reverse' : ''} items-start space-x-4`}>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t.contact.info.email}</h4>
                    <p className="text-muted-foreground">info@akeed.qa</p>
                  </div>
                </div>

                <div className={`flex ${isRTL ? 'space-x-reverse' : ''} items-start space-x-4`}>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t.contact.info.location}</h4>
                    <p className="text-muted-foreground">{t.contact.info.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
