import { Outlet } from "react-router-dom";

import SideNav from "./SideBar/SideNav";
import MobileNavbar from "./Navbar/MobileNavbar";

const DashboardLayout = () => {
  return (
    <section className="flex">
      <SideNav />
      <MobileNavbar />
      <div className="lg:ml-[270px] xl:ml-[300px] px-4  w-full h-full">
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardLayout;
