import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Globe } from "lucide-react";
import parentChildImg from "@/assets/parent-child-safety.jpg";

const About = () => {
  const stats = [
    {
      icon: Heart,
      value: "24/7",
      label: "Emergency Response",
    },
    {
      icon: Shield,
      value: "47",
      label: "Kenyan Counties Covered",
    },
    {
      icon: Globe,
      value: "100+",
      label: "Partner Organizations",
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
              We are dedicated to creating a safer Kenya for our children through
              rapid response and community engagement
            </p>
          </div>

          {/* Featured image */}
          <div className="relative rounded-xl overflow-hidden max-w-3xl mx-auto shadow-lg">
            <img
              src={parentChildImg}
              alt="A Kenyan mother walking her children to school, holding hands on a tree-lined path — showcasing everyday parental care and child safety"
              className="w-full h-72 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm italic">
                A parent ensuring safe passage to school — child safety begins at home and in our communities
              </p>
            </div>
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
