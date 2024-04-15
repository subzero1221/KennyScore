import { useContext } from "react";
import { FootballContext } from "../Context";
import { useNavigate } from "react-router-dom";

function Statistics() {
  const { state, dispatch } = useContext(FootballContext);
  const navigate = useNavigate();

  const {
    statistics,
    team_home_badge,
    team_away_badge,
    match_hometeam_name,
    match_awayteam_name,
    match_hometeam_ft_score,
    match_awayteam_ft_score,
    match_awayteam_id,
    match_hometeam_id,
  } = state.statistics;

  function handleOpenedClub(e) {
    dispatch({
      type: "set/club",
      payload: e.currentTarget.value,
    });
    navigate(e.currentTarget.value);
  }

  const uniqueTypes = Array.from(new Set(statistics.map((item) => item.type)));
  const filteredData = uniqueTypes.map((type) =>
    statistics.find((item) => item.type === type)
  );

  return (
    <div
      className="py-4 overflow-x-hidden overflow-y-hidden"
      style={{ paddingLeft: "13%" }}
    >
      <div className="sticky top-0 bottom-0 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 ">
          <button
            className="flex items-center duration-500 transform hover:scale-105"
            value={match_hometeam_name + match_hometeam_id}
            onClick={handleOpenedClub}
          >
            <img
              className="w-16 h-16"
              src={team_home_badge}
              alt="Home Team Badge"
            />
            <p className="ml-4">{match_hometeam_name}</p>
          </button>
          <div>
            <span className="mr-6 text-xl font-bold ">
              {match_hometeam_ft_score} - {match_awayteam_ft_score}
            </span>
          </div>
          <button
            value={match_awayteam_name + match_awayteam_id}
            className="flex items-center duration-500 hover:scale-105"
            onClick={handleOpenedClub}
          >
            <p className="mr-4">{match_awayteam_name}</p>
            <img
              className="w-16 h-16"
              src={team_away_badge}
              alt="Away Team Badge"
            />
          </button>
        </div>

        {/* Stats Table */}
        <div className="overflow-hidden border-t border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((stat, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {stat.home}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {stat.type}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {stat.away}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
