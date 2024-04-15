import { Outlet } from "react-router-dom";
import SpaceHeader from "./Header";
import SpaceSidebar from "./SpaceSidebar";

function AppLayout() {
  return (
    <div>
      <SpaceSidebar />
      <SpaceHeader />

      <main className="text-center">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
