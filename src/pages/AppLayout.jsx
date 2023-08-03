import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
