import axios from "axios";

const API_URL = `https://api.pokemontcg.io/v2`;
const API_KEY = "5a4558c6-04cc-4531-a8e7-9c091033d2ce";

export default {
  getTCGCards() {
    return axios
      .get(`${API_URL}/cards`, {
        headers: { "X-Api-Key": API_KEY }
      })
      .then((res) => res)
      .catch((err) => err);
  }
};
