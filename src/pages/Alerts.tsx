
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Share2, ShieldCheck, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Alerts = () => {
  // Mock data - in a real app, this would come from an API
  const alerts = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 12,
      location: "Nairobi, Kenya",
      timeElapsed: "2 hours ago",
      status: "Active",
      isVerified: true,
      description: "Last seen wearing a blue school uniform",
    },
    {
      id: 2,
      name: "Michael Ahmed",
      age: 8,
      location: "Lagos, Nigeria",
      timeElapsed: "4 hours ago",
      status: "Active",
      isVerified: false,
      description: "Last seen at Central Park",
    },
  ];

  const handleShare = async (alertId: number) => {
    try {
      await navigator.share({
        title: 'Missing Child Alert',
        text: `Missing child alert for case #${alertId}`,
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Active Missing Person Alerts</h1>
            <p className="text-muted-foreground">Current active cases that need attention</p>
          </div>

          <div className="grid gap-6">
            {alerts.map((alert) => (
              <Card key={alert.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1 space-y-4">
                      <div className="flex gap-2 flex-wrap">
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
                      
                      <div>
                        <h2 className="text-2xl font-semibold">{alert.name}</h2>
                        <p className="text-muted-foreground">Age: {alert.age}</p>
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

                      <p>{alert.description}</p>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto">
                      <Button variant="outline" onClick={() => handleShare(alert.id)}>
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button asChild className="flex-1 md:flex-none">
                        <Link to={`/case/${alert.id}`}>
                          View Details
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Alerts;
