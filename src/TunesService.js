export const getTunes = async () => {
  let body = await fetch(
    "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/apple-music/new-releases/all/100/explicit.json"
  );
  let res = await body.json();
  return res;
};
