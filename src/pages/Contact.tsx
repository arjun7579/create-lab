import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold">Contact Us</h2>
      <p className="mt-4 text-lg text-foreground/80">
        Reach out to the lab for collaborations, questions, or project inquiries.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required
                className="bg-white/5 border-white/10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your.email@example.com"
                required
                className="bg-white/5 border-white/10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                placeholder="Tell us about your inquiry..."
                required
                className="bg-white/5 border-white/10 resize-none"
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Send Message
              </Button>
            </div>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-foreground/70">contact@createlab.edu</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm text-foreground/70">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-sm text-foreground/70">
                    Engineering Building, Room 401
                    <br />
                    University Campus, City, State 12345
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h4 className="font-semibold mb-2">Lab Hours</h4>
            <div className="text-sm text-foreground/70 space-y-1">
              <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
              <div>Saturday: 10:00 AM - 4:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
