export const KEY =
  "8dde12f4320dfb903a75be6414b18b540d2f23555d92793d4f2a8e4a24a587f7";

export const fetchMatches = async function (league, date) {
  const myDate = date
    .toLocaleDateString()
    .replaceAll(".", "-")
    .split("-")
    .reverse()
    .join("-");

  console.log(myDate);

  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_events&from=${myDate}&to=${myDate}&league_id=${league}&APIkey=${KEY}`
  );
  return res.json();
};
