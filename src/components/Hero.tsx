import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, AlertCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-children-safety.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kenyan children playing safely together in a park, symbolizing the joy and safety every child deserves"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background/95" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative max-w-4xl text-center space-y-8"
      >
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium"
          >
            <AlertCircle className="w-4 h-4 mr-2" />
            Kenya Emergency Response System
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Rapid Response for
            <span className="text-primary block">Missing Children in Kenya</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Every second counts. Our system enables quick reporting and immediate response
            to help locate missing children across Kenya.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/report">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
              Report Missing Child
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          
          <Button size="lg" variant="outline" className="group">
            <Phone className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Emergency: 999 / 112
          </Button>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-xs text-muted-foreground italic"
        >
          Children playing safely in a Kenyan park — every child deserves a safe environment
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
