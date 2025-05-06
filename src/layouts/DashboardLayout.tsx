import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const DashboardLayout = () => {
  return (
    <section className="flex">
      <SideNav />
      <div className="ml-[270px] xl:ml-[300px] px-4">
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardLayout;
