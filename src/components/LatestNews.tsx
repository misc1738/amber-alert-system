
import { Newspaper } from "lucide-react";
import { Card } from "@/components/ui/card";
import FadeContent from "@/components/FadeContent";

const LatestNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "New Child Safety Initiative Launched",
      date: "March 5, 2024",
      summary: "Government launches nationwide child safety awareness campaign",
    },
    {
      id: 2,
      title: "Community Search Teams Expanded",
      date: "March 4, 2024",
      summary: "Local volunteers join forces to enhance search capabilities",
    },
    {
      id: 3,
      title: "Technology Updates for Alert System",
      date: "March 3, 2024",
      summary: "Advanced features added to improve response times",
    },
  ];

  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="container max-w-6xl">
        <FadeContent>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Newspaper className="h-6 w-6 text-primary" />
                  Latest News
                </h2>
                <p className="text-muted-foreground">
                  Stay informed with recent updates and developments
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <Card key={article.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">{article.date}</p>
                    <h3 className="font-semibold">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">{article.summary}</p>
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

export default LatestNews;
