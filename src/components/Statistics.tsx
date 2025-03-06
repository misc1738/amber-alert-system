
import { ChartBar, Users, Clock, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import FadeContent from "@/components/FadeContent";

const Statistics = () => {
  const stats = [
    {
      id: 1,
      label: "Active Cases",
      value: "48",
      icon: Users,
      color: "text-red-500",
    },
    {
      id: 2,
      label: "Average Response Time",
      value: "2.5 hrs",
      icon: Clock,
      color: "text-amber-500",
    },
    {
      id: 3,
      label: "Cases Resolved",
      value: "142",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      id: 4,
      label: "Success Rate",
      value: "87%",
      icon: ChartBar,
      color: "text-blue-500",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container max-w-6xl">
        <FadeContent>
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Statistics Dashboard</h2>
              <p className="text-muted-foreground">
                Key metrics and performance indicators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <Card key={stat.id} className="p-6">
                  <div className="space-y-4">
                    <div className={`${stat.color}`}>
                      <stat.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{stat.value}</h3>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default Statistics;
