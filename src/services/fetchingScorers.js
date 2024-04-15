import { KEY } from "./fetchingMatches";

export async function fetchingScorers(league) {
  const res =
    await fetch(`https://apiv3.apifootball.com/?action=get_topscorers&league_id=${league}&APIkey=${KEY}
 `);
  return res.json();
}
