import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Globe } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Heart,
      value: "24/7",
      label: "Emergency Response",
    },
    {
      icon: Shield,
      value: "100+",
      label: "Partner Organizations",
    },
    {
      icon: Globe,
      value: "54",
      label: "Countries Covered",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are dedicated to creating a safer Africa for our children through
              rapid response and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg smooth-transition h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold">{stat.value}</h3>
                      <p className="text-muted-foreground">{stat.label}</p>
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

export default About;