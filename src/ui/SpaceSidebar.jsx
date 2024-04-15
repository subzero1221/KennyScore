import { NavLink } from "react-router-dom";

function SpaceSidebar() {
  return (
    <div className="fixed flex flex-col items-center justify-center h-full p-4 space-y-4 text-white bg-orange-600 w-54 ring-2">
      <img
        src="KennyMcCormick.png"
        alt="Space Avatar"
        className="h-20 bg-white border border-orange-900 rounded-full"
      />
      <h2 className="text-xl font-bold">KennyScore</h2>
      <NavLink to="/home" className="px-4 py-2 rounded-md hover:bg-orange-400">
        Home
      </NavLink>
      <NavLink
        to="/Matches"
        className="px-4 py-2 rounded-md hover:bg-orange-400"
      >
        Matches
      </NavLink>
      <NavLink
        to="/standings"
        className="px-4 py-2 rounded-md hover:bg-orange-400"
      >
        Standings
      </NavLink>
      <NavLink
        to="/transfers"
        className="px-4 py-2 rounded-md hover:bg-orange-400"
      >
        Top Scorers
      </NavLink>
    </div>
  );
}

export default SpaceSidebar;
