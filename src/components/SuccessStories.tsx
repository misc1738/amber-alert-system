
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronRight, Calendar } from "lucide-react";
import FadeContent from "@/components/FadeContent";

const SuccessStories = () => {
  // Mock data - in a real app, this would come from an API
  const stories = [
    {
      id: 1,
      childName: "Maria N.",
      location: "Nakuru, Kenya",
      daysToFind: 3,
      date: "March 12, 2023",
      description: "Found safe with a relative who had taken her without permission."
    },
    {
      id: 2,
      childName: "James K.",
      location: "Kisumu, Kenya",
      daysToFind: 2,
      date: "April 5, 2023",
      description: "Located at a friend's house after a miscommunication with parents."
    },
    {
      id: 3,
      childName: "Sarah M.",
      location: "Mombasa, Kenya",
      daysToFind: 1,
      date: "May 20, 2023",
      description: "Found at a local market after wandering away from home."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-center flex items-center justify-center">
              <span className="bg-green-100 text-green-700 p-2 rounded-full mr-3">
                <Check className="h-6 w-6" />
              </span>
              Success Stories
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Children who have been safely reunited with their families, proving that our system works
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <FadeContent key={story.id} duration={600} delay={index * 150}>
                <Card className="p-6 hover:shadow-lg smooth-transition cursor-pointer group h-full border-l-4 border-l-green-500">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <Badge variant="success" className="bg-green-100 text-green-700 uppercase">
                        Reunited
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{story.date}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">{story.childName}</h3>
                      <p className="text-muted-foreground">{story.location}</p>
                      <p className="text-sm">Found in <span className="font-semibold text-green-700">{story.daysToFind} days</span></p>
                      <p className="text-sm text-muted-foreground mt-2">{story.description}</p>
                    </div>
                    
                    <div className="flex justify-end">
                      <span className="text-sm text-primary flex items-center group-hover:underline">
                        Full story
                        <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Card>
              </FadeContent>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
