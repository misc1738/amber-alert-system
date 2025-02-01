import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, AlertCircle, Phone, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.9)_100%)]" />
      
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(220,38,38,0.1) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative max-w-4xl text-center space-y-8"
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-red-50 text-red-700 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <AlertCircle className="w-5 h-5 mr-2" />
            Emergency Response System
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent"
          >
            Rapid Response for
            <span className="block mt-2">Missing Children</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
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
            <Button size="lg" className="bg-critical hover:bg-critical-hover text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              Report Missing Child
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="group text-lg px-8 py-6 border-2 hover:bg-red-50 hover:border-red-200 transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            Emergency Hotline
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-8 w-full max-w-2xl mx-auto px-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-red-600" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span>Immediate Response</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-5 h-5 text-red-600" />
            <span>Emergency Hotline</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;