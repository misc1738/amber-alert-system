
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserPlus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const VolunteerRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to an API
    console.log("Volunteer registration:", formData);
    toast({
      title: "Registration Successful",
      description: "Thank you for volunteering. We will contact you soon to help with missing children cases in Kenya.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 px-4 bg-secondary/10">
      <div className="container max-w-6xl">
        <Card className="p-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <UserPlus className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Volunteer Registration</h2>
            </div>
            <p className="text-muted-foreground">
              Join our network of volunteers to help in search efforts and support missing children cases across Kenya
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number (e.g. 07XX XXX XXX)"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="County/Location in Kenya"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <Textarea
                placeholder="Tell us about any relevant experience..."
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={4}
              />
              <Button type="submit" className="w-full">
                <UserPlus className="h-4 w-4 mr-2" />
                Register as Volunteer
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VolunteerRegistration;
