
import Hero from "@/components/Hero";
import ActiveAlerts from "@/components/ActiveAlerts";
import Resources from "@/components/Resources";
import About from "@/components/About";
import AlertMap from "@/components/AlertMap";
import SuccessStories from "@/components/SuccessStories";
import TipSubmission from "@/components/TipSubmission";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Alert Locations</h2>
        <AlertMap />
      </div>
      <ActiveAlerts />
      <SuccessStories />
      <Resources />
      <TipSubmission />
      <About />
    </main>
  );
};

export default Index;
