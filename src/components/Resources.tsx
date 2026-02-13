import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, BookOpen, Phone, Users } from "lucide-react";
import safetyWorkshopImg from "@/assets/safety-workshop.jpg";

const Resources = () => {
  const resources = [
    {
      icon: Shield,
      title: "Safety Guidelines",
      description: "Essential tips to keep children safe and prevent abductions across Kenya",
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Materials to educate Kenyan communities about child safety",
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      description: "Kenya Police 999 | DCI Hotline 0800-722-203 | Childline Kenya 116",
    },
    {
      icon: Users,
      title: "Support Groups",
      description: "Connect with Kenyan support groups and counseling services",
    },
  ];

  return (
    <section className="py-16 px-4 bg-secondary/50">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access vital information and support services to help protect children
              and respond to emergencies in Kenya
            </p>
          </div>

          {/* Featured image */}
          <div className="relative rounded-xl overflow-hidden max-w-2xl mx-auto shadow-lg">
            <img
              src={safetyWorkshopImg}
              alt="Community members participating in a child safety workshop in Kenya, learning how to protect children and respond to emergencies"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm italic">
                Community members learning child safety practices at a local workshop in Kenya
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg smooth-transition cursor-pointer group h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary smooth-transition">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
