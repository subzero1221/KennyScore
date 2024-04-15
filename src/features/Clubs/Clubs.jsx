import { HiOutlineInformationCircle } from "react-icons/hi2";

import { useQuery } from "@tanstack/react-query";
import { fetchingClubs } from "../../services/fetchingClubs";
import Spinner from "../../ui/Spinner";
import { useParams, useNavigate } from "react-router-dom";

function Clubs() {
  const { club } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["clubs", club],
    queryFn: () => fetchingClubs(club),
  });
  const navigate = useNavigate();

  function handlePlayer(e) {
    navigate(e.currentTarget.value);
  }

  const myClub = data?.[0];
  const attack = myClub?.players.filter((el) => el.player_type === "Forwards");
  const mid = myClub?.players.filter((el) => el.player_type === "Midfielders");
  const def = myClub?.players.filter((el) => el.player_type === "Defenders");

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div
        className="grid py-8 bg-gray-100 rounded-lg shadow-md place-items-center"
        style={{ paddingLeft: "12%" }}
      >
        <img
          className="w-24 h-24 border-2 border-gray-300 rounded-full"
          src={myClub.team_badge}
          alt="Team Badge"
        />
        <h1 className="mt-4 text-xl font-bold">{myClub.team_name}</h1>
        <h2 className="text-sm text-gray-600">
          Founded : {myClub.team_founded} - {myClub.team_country}
        </h2>
        <h2 className="text-sm text-gray-600">
          Stadium : {myClub.venue.venue_name} ({myClub.venue.venue_city})
        </h2>
      </div>
      <div
        className="flex flex-wrap justify-around mt-6"
        style={{ paddingLeft: "12%" }}
      >
        <div className="p-4 bg-white rounded-lg shadow-lg w-1/8">
          <h2 className="mb-2 font-semibold text-red-500 underline">
            Forwards
          </h2>
          {attack.map((el) => (
            <div
              key={el.player_id}
              className="flex items-center justify-between py-1"
            >
              <p>{el.player_name}</p>
              <button
                className="text-blue-500 hover:text-blue-700"
                value={el.player_id}
                onClick={handlePlayer}
              >
                <HiOutlineInformationCircle />
              </button>
            </div>
          ))}
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg w-1/8">
          <h2 className="mb-2 font-semibold text-yellow-500 underline">
            Midfielders
          </h2>
          {mid.map((el) => (
            <div
              key={el.player_id}
              className="flex items-center justify-between py-1"
            >
              <p>{el.player_name}</p>
              <button
                className="text-blue-500 hover:text-blue-700"
                value={el.player_id}
                onClick={handlePlayer}
              >
                <HiOutlineInformationCircle />
              </button>
            </div>
          ))}
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg w-1/8">
          <h2 className="mb-2 font-semibold text-green-500 underline">
            Defenders
          </h2>
          {def.map((el) => (
            <div
              key={el.player_id}
              className="flex items-center justify-between py-1"
            >
              <p>{el.player_name}</p>
              <button
                className="text-blue-500 hover:text-blue-700"
                value={el.player_id}
                onClick={handlePlayer}
              >
                <HiOutlineInformationCircle />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6" style={{ paddingLeft: "8%" }}>
        <div className="p-4 bg-white rounded-lg shadow-lg w-1/8">
          <h2 className="font-semibold underline text-stale-500">Coach:</h2>
          <div className="flex pl-2">
            <p>{myClub.coaches[0].coach_name}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clubs;
