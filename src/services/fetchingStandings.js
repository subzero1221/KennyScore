import { KEY } from "./fetchingMatches";

export async function fetchingStandings(league) {
  const res =
    await fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=${league}&APIkey=${KEY}
 `);
  return res.json();
}
