
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Share2, ShieldCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CaseDetails = () => {
  const { id } = useParams();

  // Kenya-specific mock data
  const caseDetails = {
    id: Number(id),
    name: "Sarah Kamau",
    age: 12,
    location: "Westlands, Nairobi",
    timeElapsed: "2 hours ago",
    status: "Active",
    isVerified: true,
    description: "Last seen wearing a blue school uniform near Safaricom House",
    lastSeen: "Walking from Brookhouse School towards Sarit Centre",
    physicalDescription: "Height: 155cm, Dark hair, Brown eyes, Medium build",
    contactInfo: "DCI Child Protection Unit: 0800-722-203 | Westlands Police Station: 020-4443887",
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `Missing Child Alert - ${caseDetails.name}`,
        text: `Please help find ${caseDetails.name}, age ${caseDetails.age}. Last seen in ${caseDetails.location}, Kenya.`,
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/alerts">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Alerts
              </Link>
            </Button>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex gap-2">
                      <Badge variant="destructive" className="uppercase">
                        {caseDetails.status}
                      </Badge>
                      {caseDetails.isVerified && (
                        <Badge variant="success" className="flex items-center gap-1">
                          <ShieldCheck className="h-3 w-3" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <h1 className="text-3xl font-bold mt-4">{caseDetails.name}</h1>
                    <p className="text-xl text-muted-foreground">Age: {caseDetails.age}</p>
                  </div>
                  <Button variant="outline" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>

                <div className="grid gap-4 border-t pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{caseDetails.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{caseDetails.timeElapsed}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-t pt-6">
                  <div>
                    <h2 className="font-semibold mb-2">Last Known Location</h2>
                    <p>{caseDetails.lastSeen}</p>
                  </div>
                  <div>
                    <h2 className="font-semibold mb-2">Physical Description</h2>
                    <p>{caseDetails.physicalDescription}</p>
                  </div>
                  <div>
                    <h2 className="font-semibold mb-2">Additional Details</h2>
                    <p>{caseDetails.description}</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h2 className="font-semibold mb-2">Contact Information</h2>
                    <p>{caseDetails.contactInfo}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default CaseDetails;
