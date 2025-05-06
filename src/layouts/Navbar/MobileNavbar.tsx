import { useState, useEffect } from "react";

import { Menu, X, Home, User, LogOut, Album } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "@/components/ui/MoodToggle";

const navLinks = [
  { name: "Home", href: "", icon: Home },
  { name: "Materials", href: "materials", icon: Album },
  { name: "Profile", href: "profile", icon: User },
  { name: "Logout", href: "logout", icon: LogOut },
];

const MobileNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileSidebarOpen ? "hidden" : "auto";
  }, [mobileSidebarOpen]);

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background dark:bg-slate-900 py-2">
      <nav className="container mx-auto flex justify-between items-center px-4 py-2">
        <Link to="/" className="text-xl">
          Dashboard
        </Link>
        <Menu
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="text-[2rem] cursor-pointer dark:text-white"
        />
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[260px] h-full bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto ${
          mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="text-2xl text-red-500"
          >
            <X />
          </button>
        </div>

        <ul className="flex flex-col p-6 gap-4 text-gray-700 dark:text-white/80">
          {navLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <li key={idx}>
                <NavLink
                  to={link.href}
                  onClick={() => setMobileSidebarOpen(false)}
                  className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  {link.name}
                </NavLink>
              </li>
            );
          })}
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MobileNavbar;
