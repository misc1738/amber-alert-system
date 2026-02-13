import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserPlus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import communityVolunteersImg from "@/assets/community-volunteers.jpg";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Image side */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={communityVolunteersImg}
              alt="Kenyan community volunteers gathered for a child safety awareness campaign, united in protecting children"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm italic">
                Community volunteers come together across Kenya to keep children safe
              </p>
            </div>
          </div>

          {/* Form side */}
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <UserPlus className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Volunteer Registration</h2>
              </div>
              <p className="text-muted-foreground">
                Join our network of volunteers to help in search efforts and support missing children cases across Kenya
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                <Input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} required />
                <Input type="tel" placeholder="Phone Number (e.g. 07XX XXX XXX)" name="phone" value={formData.phone} onChange={handleChange} required />
                <Input placeholder="County/Location in Kenya" name="location" value={formData.location} onChange={handleChange} required />
                <Textarea placeholder="Tell us about any relevant experience..." name="experience" value={formData.experience} onChange={handleChange} rows={4} />
                <Button type="submit" className="w-full">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Register as Volunteer
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VolunteerRegistration;
