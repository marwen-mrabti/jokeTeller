import axios from "axios";

const jokeUrl =
  "https://sv443.net/jokeapi/v2/joke/any";

export const getJoke = async () => {
  const res = await axios.get(jokeUrl);
  let joke = "";
  // Assign One or Two Part Joke
  if (res.data.setup) {
    joke = `${res.data.setup} ... ${res.data.delivery}`;
  } else {
    joke = res.data.joke;
  }

  return joke;
};
