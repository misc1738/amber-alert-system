import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Globe } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Heart,
      value: "24/7",
      label: "Emergency Response",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Shield,
      value: "100+",
      label: "Partner Organizations",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Globe,
      value: "54",
      label: "Countries Covered",
      color: "bg-green-50 text-green-600"
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-red-50/50 via-white to-red-50/50">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are dedicated to creating a safer Africa for our children through
              rapid response and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl smooth-transition h-full bg-white/80 backdrop-blur-sm border-red-100 group">
                  <div className="space-y-6">
                    <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center mx-auto transition-transform group-hover:scale-110`}>
                      <stat.icon className="h-8 w-8" />
                    </div>
                    
                    <div className="space-y-2 text-center">
                      <h3 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                        {stat.value}
                      </h3>
                      <p className="text-muted-foreground text-lg">{stat.label}</p>
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