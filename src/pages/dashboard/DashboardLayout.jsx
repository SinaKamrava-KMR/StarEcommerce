import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

function DashboardLayout() {
  return (
    <div>
      <DashboardHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
