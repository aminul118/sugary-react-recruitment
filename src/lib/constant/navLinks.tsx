import { Album, Home, LogOut } from "lucide-react";

const navLinks = [
  { to: "materials", label: "Materials", icon: <Album /> },

  { to: "/dashboard", label: "Dashboard Home", icon: <Home /> },
];

const bottomLinks = [
  {
    to: "/",
    label: "Home",
    icon: <Home />,
    external: true,
  },
  {
    to: "/logout",
    label: "Logout",
    icon: <LogOut />,
    external: true,
  },
];

export { navLinks, bottomLinks };
