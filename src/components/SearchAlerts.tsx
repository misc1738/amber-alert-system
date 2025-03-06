
import { useState } from "react";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FadeContent from "@/components/FadeContent";

const SearchAlerts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger an API search
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-secondary/20">
      <div className="container max-w-6xl">
        <FadeContent>
          <Card className="p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Search className="h-6 w-6 text-primary" />
                  Search Active Alerts
                </h2>
                <p className="text-muted-foreground">
                  Search for missing children cases by name, location, or case number
                </p>
              </div>

              <form onSubmit={handleSearch} className="flex gap-4">
                <Input
                  type="search"
                  placeholder="Enter name, location, or case number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </div>
          </Card>
        </FadeContent>
      </div>
    </section>
  );
};

export default SearchAlerts;
