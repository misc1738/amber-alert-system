
import { Link, useLocation } from "react-router-dom";
import { Home, List, PlusCircle, UserCircle, Radio, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const { user, roles, signOut } = useAuth();

  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/alerts", label: "Live Alerts", icon: List },
    { to: "/submit-tip", label: "Submit Tip", icon: PlusCircle },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      {/* Live ticker */}
      <div className="h-7 bg-critical/10 border-b border-critical/20 overflow-hidden relative">
        <div className="animate-ticker whitespace-nowrap flex gap-12 items-center h-full text-[11px] font-mono uppercase tracking-widest text-critical/90">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center px-6 shrink-0">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-critical animate-pulse" /> LIVE — 3 Active Alerts</span>
              <span>Nairobi · Missing since 14:22 EAT</span>
              <span>Mombasa · Verified alert</span>
              <span>Kisumu · Community search in progress</span>
              <span>Nakuru · Tip received</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative flex items-center justify-center w-8 h-8 rounded-md bg-critical text-critical-foreground font-display font-bold">
            <Radio className="w-4 h-4" />
            <span className="absolute inset-0 rounded-md bg-critical animate-pulse-ring" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-sm tracking-tight">AMBER ALERT</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Kenya · KE</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={cn(
                    "inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:inline-flex gap-2">
                  <UserCircle className="w-4 h-4" />
                  <span className="max-w-[120px] truncate">{user.email}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {roles.length ? roles.join(" · ") : "Signed in"}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
                  <LogOut className="w-4 h-4 mr-2" /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link to="/auth"><UserCircle className="w-4 h-4 mr-2" />Sign In</Link>
            </Button>
          )}
          <Button asChild size="sm" className="bg-critical hover:bg-critical-hover text-critical-foreground shadow-lg shadow-critical/30">
            <Link to="/submit-tip">Report Now</Link>
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      <ul className="md:hidden flex items-center justify-around border-t border-border/60 py-2">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <li key={link.to}>
              <Link to={link.to} className={cn("flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] uppercase tracking-wider font-mono", isActive ? "text-critical" : "text-muted-foreground")}>
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
