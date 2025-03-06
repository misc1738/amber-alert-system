
import { Link, useLocation } from "react-router-dom";
import { Home, List, PlusCircle, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/alerts", label: "Alerts", icon: List },
    { to: "/submit-tip", label: "Submit Tip", icon: PlusCircle },
    { to: "/auth", label: "Sign In", icon: UserCircle },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Kenya Missing Persons Alert</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex justify-center md:w-auto">
            <ul className="flex items-center justify-between md:space-x-4">
              {links.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={cn(
                        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:text-primary",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      <link.icon className="mr-2 h-4 w-4" />
                      <span className="hidden md:inline">{link.label}</span>
                    </Link>
                  </li>
                )}
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
