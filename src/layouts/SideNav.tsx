import { bottomLinks, navLinks } from "@/lib/constant/navLinks";
import { Link, NavLink } from "react-router";
import { ModeToggle } from "../components/ui/MoodToggle";

const SideNav = () => {
  const linkStyle =
    "flex gap-2 items-center hover:text-blue-400 transition-all";

  return (
    <aside className="fixed left-0 top-0 h-screen w-[270px] xl:w-[300px] px-4 bg-slate-900 shadow-lg overflow-y-auto z-50 text-white/95 flex flex-col justify-between">
      {/* Top - Title & Navigation */}
      <div>
        <div className="ml-6 py-4">
          <NavLink to="/dashboard" className="text-2xl font-semibold ">
            Dashboard
          </NavLink>
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            {navLinks.map(({ to, label, icon }) => (
              <li key={to}>
                <Link to={to} className={linkStyle}>
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom - Profile & Logout */}
      <div className="p-4 border-t border-white/20">
        <ul className="space-y-3">
          {bottomLinks.map(({ to, label, icon, external }) => (
            <li key={to}>
              <Link
                to={to}
                target={external ? "_blank" : undefined}
                className={linkStyle}
              >
                {icon}
                {label}
              </Link>
            </li>
          ))}
          <ModeToggle />
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
