
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FadeContent from "@/components/FadeContent";

const SearchAlerts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [ageRange, setAgeRange] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger an API search with filters
    console.log("Searching with filters:", {
      query: searchQuery,
      ageRange,
      timeFrame,
      location,
    });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/30">
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
                  Search for missing children cases across Kenya by name, location, or case number
                </p>
              </div>

              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex gap-4">
                  <Input
                    type="search"
                    placeholder="Enter name, location, or case number..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="button" variant="outline" onClick={() => setShowFilters(!showFilters)}>
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>

                {showFilters && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <Select value={ageRange} onValueChange={setAgeRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Age Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-5">0-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="11-15">11-15 years</SelectItem>
                        <SelectItem value="16-18">16-18 years</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={timeFrame} onValueChange={setTimeFrame}>
                      <SelectTrigger>
                        <SelectValue placeholder="Time Missing" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="24h">Last 24 hours</SelectItem>
                        <SelectItem value="week">Last week</SelectItem>
                        <SelectItem value="month">Last month</SelectItem>
                        <SelectItem value="year">Last year</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="County" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nairobi">Nairobi</SelectItem>
                        <SelectItem value="mombasa">Mombasa</SelectItem>
                        <SelectItem value="kisumu">Kisumu</SelectItem>
                        <SelectItem value="nakuru">Nakuru</SelectItem>
                        <SelectItem value="uasin-gishu">Uasin Gishu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </form>
            </div>
          </Card>
        </FadeContent>
      </div>
    </section>
  );
};

export default SearchAlerts;
