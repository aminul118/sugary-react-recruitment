import { Album, Home, LogOut, User } from "lucide-react";

const navLinks = [
  { to: "materials", label: "Materials", icon: <Album /> },

  { to: "/dashboard", label: "Dashboard Home", icon: <Home /> },
];

const bottomLinks = [
  {
    to: "profile",
    label: "Profile",
    icon: <User />,
  },

  {
    to: "/logout",
    label: "Logout",
    icon: <LogOut />,
    external: true,
  },
];

export { navLinks, bottomLinks };
