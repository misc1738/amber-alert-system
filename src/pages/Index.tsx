import Hero from "@/components/Hero";
import ActiveAlerts from "@/components/ActiveAlerts";
import Resources from "@/components/Resources";
import About from "@/components/About";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ActiveAlerts />
      <Resources />
      <About />
    </main>
  );
};

export default Index;