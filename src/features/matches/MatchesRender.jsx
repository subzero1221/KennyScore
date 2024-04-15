import Spinner from "./../../ui/Spinner";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";
import { FootballContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

function MatchesRender({ isLoading, pagesData }) {
  const { state, dispatch } = useContext(FootballContext);
  const navigate = useNavigate();

  const data = pagesData
    ?.flat()
    ?.reverse()
    .slice(state.curPage - 10, state.curPage);

  function handleOpen(e) {
    dispatch({
      type: "set/stats",
      payload: data[e.currentTarget.value - 1],
    });

    navigate("statistics");
  }

  function handleNext() {
    if (Math.ceil(pagesData.length) * 10 >= state.curPage)
      dispatch({ type: "next/curPage" });
  }

  function handlePrev() {
    if (pagesData.length > state.curPage) dispatch({ type: "prev/curPage" });
  }

  useEffect(
    function () {
      dispatch({
        type: "set/pages",
      });
    },
    [pagesData, dispatch]
  );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container py-2 mx-auto">
          <div className="flex items-center justify-center">
            <button
              className="p-3 text-xl text-orange-900 border-orange-900 rounded-full border-3 hover:bg-orange-400"
              onClick={handlePrev}
            >
              <HiChevronDoubleLeft />
            </button>
            <img
              src={data?.at(0)?.league_logo}
              alt="Image"
              className="w-12 h-12 mx-6"
            />
            <h1 className="mx-6 mb-2 text-xl font-bold text-center">
              {data?.at(0)?.league_name}
            </h1>
            <button
              className="p-3 text-xl text-orange-900 border-orange-900 rounded-full border-3 hover:bg-orange-400"
              onClick={handleNext}
            >
              <HiChevronDoubleRight />
            </button>
          </div>
          <div className="flex justify-center">
            <table className="w-1/2 overflow-hidden bg-white rounded-lg shadow-lg">
              <thead className="text-white bg-gray-900">
                <tr>
                  <th className="px-1 py-1 text-xs">Team 1</th>
                  <th className="px-1 py-1 text-xs">Score</th>
                  <th className="px-1 py-1 text-xs">Team 2</th>
                  <th className="px-1 py-1 text-xs">Status</th>
                  <th className="px-1 py-1 text-xs">Date</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((match, i) => (
                  <>
                    <tr key={match?.match_id} className="text-center">
                      <td className="px-1 py-1 border-t-2 border-b-2 border-orange-300">
                        <img
                          src={match?.team_home_badge}
                          alt="Team 1 Badge"
                          className="inline mr-1 w-9 h-9"
                        />
                        {match.team_home_name}
                      </td>
                      <td className="px-1 py-1 border-t-2 border-b-2 border-orange-300">
                        {match.match_hometeam_score} -{" "}
                        {match.match_awayteam_score}
                      </td>
                      <td className="px-1 py-1 border-t-2 border-b-2 border-orange-300">
                        <img
                          src={match?.team_away_badge}
                          alt="Team 2 Badge"
                          className="inline mr-1 w-9 h-9"
                        />
                        {match.team_away_name}
                      </td>
                      <td className="px-1 py-1 border-t-2 border-b-2 border-orange-300 max-w-4">
                        {match.match_status ? match.match_status : "loading"}
                      </td>
                      <td className="px-1 py-1 border-t-2 border-b-2 border-orange-300">
                        {match.match_date} {match.match_time}
                        <button
                          value={i + 1}
                          className="pl-6 underline hover:text-gray-400 text-decoration-line:"
                          onClick={(e) => handleOpen(e)}
                        >
                          <HiArrowTopRightOnSquare />
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <h1>
            {"<"} {Math.ceil(state.curPage / 10)} ...{" "}
            {Math.ceil(pagesData.length / 10)}
            {">"}
          </h1>
        </div>
      )}
    </>
  );
}

export default MatchesRender;
