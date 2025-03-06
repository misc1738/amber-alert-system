
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ChevronRight, Share2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const ActiveAlerts = () => {
  // Mock data - in a real app, this would come from an API
  const alerts = [
    {
      id: 1,
      location: "Nairobi, Kenya",
      timeElapsed: "2 hours ago",
      status: "Active",
      isVerified: true,
      age: 12,
    },
    {
      id: 2,
      location: "Lagos, Nigeria",
      timeElapsed: "4 hours ago",
      status: "Active",
      isVerified: false,
      age: 8,
    },
    {
      id: 3,
      location: "Cairo, Egypt",
      timeElapsed: "6 hours ago",
      status: "Active",
      isVerified: true,
      age: 15,
    },
  ];

  const handleShare = async (alertId: number) => {
    try {
      await navigator.share({
        title: 'Missing Child Alert',
        text: `Missing child alert in ${alerts.find(a => a.id === alertId)?.location}`,
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

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
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Active Alerts</h2>
            <p className="text-muted-foreground">
              Current missing children reports in your region
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
                <Card className="p-6 hover:shadow-lg smooth-transition cursor-pointer group">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-2">
                        <Badge variant="destructive" className="uppercase">
                          {alert.status}
                        </Badge>
                        {alert.isVerified && (
                          <Badge variant="success" className="flex items-center gap-1">
                            <ShieldCheck className="h-3 w-3" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleShare(alert.id)}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{alert.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{alert.timeElapsed}</span>
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
