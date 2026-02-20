import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly regarding your inquiry.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen relative">
      {/* Background overlay with subtle tattoo image */}
      <div className="absolute inset-0 opacity-5">
        <img src="/images/floral-sleeve-tattoo.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
      <Section>
        <SectionHeader title="Get In Touch" subtitle="Contact Us" center />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-card border border-white/10 p-8 space-y-6">
              <h3 className="text-2xl font-display text-white mb-6">Studio Info</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visit Us</h4>
                  <p className="text-gray-400 text-sm">455 W Parker Rd<br />Houston, TX 77091, United States</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm">+15042950091</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm">info@tattoohut.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Opening Hours</h4>
                  <p className="text-gray-400 text-sm">Mon - Fri: 11am - 8pm<br />Sat: 10am - 9pm<br />Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="aspect-video bg-gray-800 border border-white/10 relative overflow-hidden group rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.7261472838843!2d-95.51712628842024!3d29.865834075193825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c722c2b7b4a9%3A0x4e5f6b6d5a4b3c2d!2s455%20W%20Parker%20Rd%2C%20Houston%2C%20TX%2077091%2C%20USA!5e0!3m2!1sen!2sus!4v1708447200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card border border-white/10 p-8 lg:p-12">
            <h3 className="text-2xl font-display text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wide">Name</label>
                  <Input required placeholder="Your Name" className="bg-background border-white/10 focus:border-primary/50 text-white h-12 rounded-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wide">Email</label>
                  <Input required type="email" placeholder="your@email.com" className="bg-background border-white/10 focus:border-primary/50 text-white h-12 rounded-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">Subject</label>
                <Input required placeholder="General Inquiry / Booking Question" className="bg-background border-white/10 focus:border-primary/50 text-white h-12 rounded-none" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">Message</label>
                <Textarea required placeholder="Tell us what's on your mind..." className="bg-background border-white/10 focus:border-primary/50 text-white min-h-[150px] rounded-none resize-none" />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/80 text-white h-14 text-lg font-display tracking-widest rounded-none shadow-[0_0_20px_rgba(255,34,0,0.3)]"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </Button>
            </form>
          </div>
        </div>
      </Section>
      </div>
    </div>
  );
}
