import { useParams } from "react-router-dom";
import { fetchingPlayer } from "../../services/fetchingPlayer";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./../../ui/Spinner";

function PlayerStatistic() {
  const { player } = useParams();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["players", player],
    queryFn: () => fetchingPlayer(player),
  });

  console.log(data);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col items-center min-h-screen py-8 space-y-8 bg-gradient-to-r from-yellow-200 to-orange-500">
            <div className="p-6 mx-auto text-white transition duration-500 transform shadow-2xl max-w-80 bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl hover:scale-105">
              <div className="flex justify-center mb-4 -mt-20">
                <img
                  className="object-cover w-40 h-40 border-4 border-blue-900 rounded-full shadow-xl"
                  src={data[0].player_image}
                  alt="Player photo"
                />
              </div>
              <div className="mb-4 text-center">
                <h2 className="mb-2 text-xl text-yellow-400 first-line:font-bold">
                  {data[0].player_name}
                  {data[1]?.player_is_captain && "Cap"}
                </h2>
                <p className="text-green-400">
                  Position:{" "}
                  <span className="font-semibold">
                    {data[0]?.player_type?.replace("s", "")}
                  </span>
                </p>
              </div>
              <div className="flex justify-around">
                <div className="text-center ">
                  <h3 className="">country</h3>
                  <p className="font-bold ">{data[0]?.team_name || "-"}</p>
                </div>
                <div className="text-center">
                  <h3 className="">born</h3>
                  <p className="pl-4 font-bold">
                    {data[0]?.player_birthdate || "-"}
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="">age</h3>
                  <p className="pl-2 font-bold ">
                    {data[0]?.player_age || "-"}
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-4xl p-8 mx-auto text-white transition duration-500 transform shadow-2xl bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl hover:scale-105">
              <div className="mb-6 text-center">
                <h2 className="mb-3 text-2xl font-bold text-yellow-400">
                  Player Stats
                </h2>
              </div>

              {""}
              <div className="grid grid-cols-5 gap-4">
                <div className="text-center">
                  <h3 className="text-lg">Goals Scored</h3>
                  <p className="text-2xl font-bold">
                    {data[1] ? data[1].player_goals : data[0].player_goals}
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg">Assists</h3>
                  <p className="text-2xl font-bold">
                    {data[1] ? data[1].player_assists : data[0].player_assists}
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg">Duels won</h3>
                  <p className="text-2xl font-bold">
                    {" "}
                    {data[1]
                      ? data[1].player_duels_won
                      : data[0].player_duels_won}
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg">Match Played</h3>
                  <p className="text-2xl font-bold">
                    {" "}
                    {data[1]
                      ? data[1].player_match_played
                      : data[0].player_match_played}
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg">Average Rating</h3>
                  <p className="text-2xl font-bold">
                    {data[1] ? data[1].player_rating : data[0].player_rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PlayerStatistic;
