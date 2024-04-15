const KEY = "8dde12f4320dfb903a75be6414b18b540d2f23555d92793d4f2a8e4a24a587f7";

export const fetchingPlayer = async function (id) {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_players&player_id=${id}&APIkey=${KEY}`
  );
  return res.json();
};

export const fetchingTransfers = async function (id) {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_players&player_id=${id}&APIkey=${KEY}`
  );
  return res.json();
};
