import { useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function RenderScorers({ EPL }) {
  const navigate = useNavigate();
  const [more, setMore] = useState(5);

  function handleMore() {
    if (more === 5) setMore(15);
    if (more === 15) setMore(5);
  }

  function handlePlayer(e) {
    navigate(`/Matches/statistics/${e.target.id}/${e.target.value}`);
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Rank
              </th>
              <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Player
              </th>
              <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Team
              </th>
              <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Goals
              </th>
              <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Assists
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {EPL.slice(0, more).map((scorer, index) => (
              <tr key={scorer.id} className="hover:bg-gray-100">
                <td className="px-6 py-2 text-sm text-left bg-white border-b border-gray-200">
                  {index + 1}
                </td>
                <td className="px-5 py-2 text-left bg-white border-b border-gray-200 text-md">
                  <button
                    className="hover:text-orange-400"
                    value={scorer.player_key}
                    id={scorer.team_key}
                    onClick={handlePlayer}
                  >
                    {scorer.player_name}
                  </button>
                </td>
                <td className="px-5 py-2 text-sm text-left bg-white border-b border-gray-200">
                  {scorer.team_name}
                </td>
                <td className="px-8 py-2 text-sm text-left bg-white border-b border-gray-200">
                  {scorer.goals}
                </td>
                <td className="px-8 py-2 text-sm text-left bg-white border-b border-gray-200">
                  {scorer.assists ? scorer.assists : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center p-4">
          <button
            onClick={handleMore}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default RenderScorers;
