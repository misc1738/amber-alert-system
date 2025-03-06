
import Hero from "@/components/Hero";
import ActiveAlerts from "@/components/ActiveAlerts";
import Resources from "@/components/Resources";
import About from "@/components/About";
import AlertMap from "@/components/AlertMap";
import SuccessStories from "@/components/SuccessStories";
import TipSubmission from "@/components/TipSubmission";
import LatestNews from "@/components/LatestNews";
import Statistics from "@/components/Statistics";
import SearchAlerts from "@/components/SearchAlerts";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SearchAlerts />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Alert Locations</h2>
        <AlertMap />
      </div>
      <ActiveAlerts />
      <Statistics />
      <SuccessStories />
      <LatestNews />
      <Resources />
      <TipSubmission />
      <About />
    </main>
  );
};

export default Index;
