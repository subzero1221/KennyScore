import { useQuery } from "@tanstack/react-query";
import { fetchingScorers } from "../../services/fetchingScorers";
import { useState } from "react";
import Spinner from "../../ui/Spinner";
import RenderScorers from "./RenderScorers";

const buts = [
  { name: "Premier League", id: "152" },
  { name: "La Liga", id: "302" },
  { name: "Seria A", id: "207" },
  { name: "Bundesliga", id: "175" },
  { name: "Ligue 1", id: "168" },
];

function GettingScorers() {
  const [open, setOpen] = useState(null);

  const { data: EPL, isLoading } = useQuery({
    queryKey: ["EPL", open],
    queryFn: () => fetchingScorers(open),
    enabled: !!open, // Ensure fetching only occurs if 'open' is not null
  });

  const toggleOpen = (id) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-5 space-y-5 px-14">
      {buts.map((league) => (
        <div key={league.id} className="flex flex-col items-center w-full">
          <button
            value={league.id}
            onClick={() => toggleOpen(league.id)}
            className="w-1/3 px-4 py-3 text-lg font-bold text-white transition duration-300 ease-in-out bg-blue-400 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
          >
            {league.name}
          </button>
          {open === league.id && (
            <div className="w-full mt-3">
              {isLoading ? <Spinner /> : <RenderScorers EPL={EPL} />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default GettingScorers;
