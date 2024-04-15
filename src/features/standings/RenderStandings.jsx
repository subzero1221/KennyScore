import { useNavigate } from "react-router-dom";

function RenderStandings({ data }) {
  const navigate = useNavigate();

  function handleTeam(e) {
    navigate(`/Matches/statistics/${e.currentTarget.value}`);
  }

  return (
    <div className="px-4 pt-4 pl-[12%]">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-2">
                Team
              </th>
              <th scope="col" className="px-3 py-2">
                Played
              </th>
              <th scope="col" className="px-3 py-2 text-green-500">
                Won
              </th>
              <th scope="col" className="px-3 py-2 text-yellow-400">
                Drawn
              </th>
              <th scope="col" className="px-3 py-2 text-red-500">
                Lost
              </th>
              <th scope="col" className="px-3 py-2">
                GD
              </th>
              <th scope="col" className="px-3 py-2">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((team, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  className={
                    index <= 3
                      ? "flex px-3 py-2 font-bold text-gray-900 whitespace-nowrap underline underline-offset-4 decoration-4 decoration-green-600 dark:text-white"
                      : index == 4
                        ? "flex px-3 py-2 font-bold text-gray-900 whitespace-nowrap underline underline-offset-4 decoration-4 decoration-orange-600 dark:text-white"
                        : "flex px-3 py-2 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                  }
                >
                  <span className="w-8 pt-4 pr-3">
                    {team.overall_league_position}.
                  </span>
                  <button value={team.team_id} onClick={(e) => handleTeam(e)}>
                    <img src={team.team_badge} className="w-8" />
                  </button>
                </td>
                <td className="px-3 py-2">{team.overall_league_payed}</td>
                <td className="px-3 py-2">{team.overall_league_W}</td>
                <td className="px-3 py-2">{team.overall_league_D}</td>
                <td className="px-3 py-2">{team.overall_league_L}</td>
                <td className="px-3 py-2">
                  {Number(team.overall_league_GF) -
                    Number(team.overall_league_GA)}
                </td>
                <td className="px-3 py-2">{team.overall_league_PTS}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RenderStandings;
