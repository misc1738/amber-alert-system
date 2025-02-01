import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, AlertCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] hero-pattern flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/95" />
      
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium"
          >
            <AlertCircle className="w-4 h-4 mr-2" />
            Emergency Response System
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Rapid Response for
            <span className="text-primary block">Missing Children</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Every second counts. Our system enables quick reporting and immediate response
            to help locate missing children across Africa.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/report">
            <Button size="lg" className="bg-critical hover:bg-critical-hover text-white">
              Report Missing Child
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          
          <Button size="lg" variant="outline" className="group">
            <Phone className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Emergency Hotline
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;