import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, BookOpen, Phone, Users, ArrowRight } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      icon: Shield,
      title: "Safety Guidelines",
      description: "Essential tips to keep children safe and prevent abductions",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Materials to educate communities about child safety",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      description: "Important numbers and contacts for immediate assistance",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Users,
      title: "Support Groups",
      description: "Connect with support groups and counseling services",
      color: "bg-purple-50 text-purple-600"
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Resources</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access vital information and support services to help protect children
              and respond to emergencies
            </p>
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
                <Card className="p-6 hover:shadow-xl smooth-transition cursor-pointer group h-full bg-white/80 backdrop-blur-sm border-red-100">
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-xl ${resource.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <resource.icon className="h-7 w-7" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl group-hover:text-primary smooth-transition flex items-center gap-2">
                        {resource.title}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100" />
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
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