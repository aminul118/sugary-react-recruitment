import {
  Calendar,
  CalendarRange,
  GalleryHorizontal,
  Home,
  Rows4,
  User,
} from "lucide-react";

const navLinks = [
  { to: "materials", label: "Materials", icon: <Calendar /> },
  { to: "upcoming-events", label: "Upcoming Events", icon: <Rows4 /> },
  { to: "add-events", label: "Add Events", icon: <CalendarRange /> },
  {
    to: "add-upcoming-events",
    label: "Add Upcoming Event",
    icon: <Calendar />,
  },
  {
    to: "scrolling-text",
    label: "Add Scrolling Text",
    icon: <GalleryHorizontal />,
  },
  { to: "/", label: "Dashboard Home", icon: <Home /> },
];

const bottomLinks = [
  {
    to: "/",
    label: "Home",
    icon: <Home />,
    external: true,
  },
  { to: "profile", label: "Profile", icon: <User /> },
];

export { navLinks, bottomLinks };
