import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Resources = () => {
  const resources = [
    {
      title: "Child Safety Tips",
      content: "Learn essential tips to keep your children safe, including stranger danger awareness and online safety guidelines.",
    },
    {
      title: "Emergency Contacts",
      content: "Important phone numbers for police stations across Kenya and child protection services.",
    },
    {
      title: "Prevention Guidelines",
      content: "Preventive measures and best practices to protect children from abduction and trafficking.",
    },
    {
      title: "Support Services",
      content: "List of counseling services and support groups for families affected by child disappearances.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Resources & Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{resource.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resources;