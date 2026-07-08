import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden hero-pattern">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-grid-glow" />

      <div className="container relative px-4 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left column: message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-critical/40 bg-critical/10 text-critical text-xs font-mono uppercase tracking-widest">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-critical animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-critical" />
              </span>
              Active Emergency Network · Kenya
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
              Every second<br />
              <span className="text-critical">counts.</span>
              <br />
              <span className="text-muted-foreground text-3xl md:text-5xl font-medium">
                Bring them home.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Kenya's community-powered rapid response system for missing children.
              Report, alert, and mobilize <span className="text-foreground font-semibold">47 counties</span> in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Button asChild size="lg" className="bg-critical hover:bg-critical-hover text-critical-foreground shadow-2xl shadow-critical/40 animate-glow text-base h-14 px-8">
                <Link to="/submit-tip">
                  Report Missing Child
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-border/80 bg-card/50 backdrop-blur h-14 px-6 text-base">
                <a href="tel:999">
                  <Phone className="mr-2 h-5 w-5 text-alert" />
                  <span className="font-mono">999</span> / <span className="font-mono">112</span>
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 border-t border-border/60">
              {[
                { icon: ShieldCheck, label: "DCI verified" },
                { icon: MapPin, label: "47 counties" },
                { icon: Clock, label: "24/7 response" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-alert" />
                  <span className="font-mono uppercase tracking-wider text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column: live status panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 bg-secondary/30">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-critical" />
                    <span className="w-2.5 h-2.5 rounded-full bg-alert" />
                    <span className="w-2.5 h-2.5 rounded-full bg-muted" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground ml-2">
                    dispatch.log
                  </span>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground">LIVE</span>
              </div>

              {/* Log entries */}
              <div className="p-5 space-y-4 font-mono text-xs">
                {[
                  { time: "14:22", loc: "Nairobi · Westlands", status: "critical", msg: "Alert broadcast → 2.1M devices" },
                  { time: "13:47", loc: "Mombasa · Nyali", status: "alert", msg: "Community search initiated" },
                  { time: "12:15", loc: "Kisumu · Milimani", status: "resolved", msg: "Child reunited with family" },
                  { time: "11:03", loc: "Nakuru · CBD", status: "alert", msg: "Tip received & verified" },
                ].map((entry, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <span className="text-muted-foreground shrink-0">{entry.time}</span>
                    <span className={`shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 ${
                      entry.status === "critical" ? "bg-critical animate-pulse" :
                      entry.status === "resolved" ? "bg-emerald-500" : "bg-alert"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-foreground truncate">{entry.loc}</div>
                      <div className="text-muted-foreground text-[11px]">{entry.msg}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer stat */}
              <div className="grid grid-cols-3 border-t border-border/60 divide-x divide-border/60">
                {[
                  { v: "142", l: "Reunited" },
                  { v: "3", l: "Active" },
                  { v: "2.5h", l: "Avg. response" },
                ].map((s) => (
                  <div key={s.l} className="p-4 text-center">
                    <div className="font-display font-bold text-2xl text-foreground">{s.v}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
