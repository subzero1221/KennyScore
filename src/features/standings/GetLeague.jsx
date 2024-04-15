import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchingStandings } from "../../services/fetchingStandings";
import RenderStandings from "./RenderStandings";
import Spinner from "./../../ui/Spinner";

function GetLeague() {
  const [league, setLeague] = useState("152");

  const { data, isError, isLoading } = useQuery({
    queryKey: ["standings", league],
    queryFn: () => fetchingStandings(league),
  });

  function handleLeague(e) {
    setLeague(e.target.value);
  }

  return (
    <>
      <div className="flex items-center justify-center h-20 grid-cols-5 p-4 overflow-y-hidden bg-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center mr-4">
          <svg
            className="w-6 h-6 mr-2 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <button
            type="button"
            className="p-6 text-gray-800 rounded-md hover:bg-orange-400"
            value="152"
            onClick={(e) => handleLeague(e)}
          >
            Premier League
          </button>

          <button
            type="button"
            className="p-6 text-gray-800 rounded-md hover:bg-orange-400"
            value="302"
            onClick={(e) => handleLeague(e)}
          >
            La Liga
          </button>

          <button
            type="button"
            className="p-6 text-gray-800 rounded-md hover:bg-orange-400"
            value="207"
            onClick={(e) => handleLeague(e)}
          >
            Seria A
          </button>

          <button
            type="button"
            className="p-6 text-gray-800 rounded-md hover:bg-orange-400"
            value="175"
            onClick={(e) => handleLeague(e)}
          >
            Bundesliga
          </button>

          <button
            type="button"
            className="p-6 text-gray-800 rounded-md hover:bg-orange-400 "
            value="168"
            onClick={(e) => handleLeague(e)}
          >
            Ligue 1
          </button>
        </div>
      </div>
      {isLoading ? <Spinner /> : <RenderStandings data={data} />}
    </>
  );
}

export default GetLeague;
