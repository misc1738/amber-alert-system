import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Kimani",
      role: "Executive Director",
      description: "Leading the initiative to protect children across Kenya.",
    },
    {
      name: "John Omondi",
      role: "Technical Director",
      description: "Managing the technical infrastructure of our alert system.",
    },
    {
      name: "Mary Wanjiku",
      role: "Community Liaison",
      description: "Coordinating with local communities and law enforcement.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">About Us</h1>
      
      <div className="glass-card p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-muted-foreground mb-4">
          Amber Alert Africa is dedicated to protecting children across Kenya through rapid response
          and community engagement. We work tirelessly to reunite missing children with their families
          and prevent child trafficking through education and awareness.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
              <p className="text-sm text-primary">{member.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 glass-card p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="space-y-2">
          <p className="text-muted-foreground">Email: info@amberalertafrica.org</p>
          <p className="text-muted-foreground">Phone: +254 700 000 000</p>
          <p className="text-muted-foreground">Address: Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default About;