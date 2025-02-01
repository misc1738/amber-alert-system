import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ChevronRight, AlertCircle, Phone } from "lucide-react";

const ActiveAlerts = () => {
  const alerts = [
    {
      id: 1,
      location: "Mombasa, Coast Region",
      timeElapsed: "2 hours ago",
      status: "Active",
      contacts: "+254 700 000 000"
    },
    {
      id: 2,
      location: "Kisumu, Nyanza Region",
      timeElapsed: "4 hours ago",
      status: "Active",
      contacts: "+254 711 000 000"
    },
    {
      id: 3,
      location: "Nakuru, Rift Valley Region",
      timeElapsed: "6 hours ago",
      status: "Active",
      contacts: "+254 722 000 000"
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6"
            >
              <AlertCircle className="w-8 h-8 text-critical" />
            </motion.div>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Active Alerts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Current missing children reports in your region. Every alert matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl smooth-transition cursor-pointer group relative overflow-hidden bg-white/80 backdrop-blur-sm border-red-100">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <Badge variant="destructive" className="uppercase font-semibold px-3 py-1">
                        {alert.status}
                      </Badge>
                      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 relative z-10" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground group-hover:text-gray-900 transition-colors">
                        <MapPin className="h-4 w-4 mr-2 text-critical" />
                        <span>{alert.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground group-hover:text-gray-900 transition-colors">
                        <Clock className="h-4 w-4 mr-2 text-critical" />
                        <span>{alert.timeElapsed}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground group-hover:text-gray-900 transition-colors">
                        <Phone className="h-4 w-4 mr-2 text-critical" />
                        <span>{alert.contacts}</span>
                      </div>
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

export default ActiveAlerts;