import axios from "axios";

const URL = "https://covid-19-news.p.rapidapi.com/v1/covid";

const options = {
  params: { q: "covid", lang: "en", media: "True" },
  headers: {
    "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
    "x-rapidapi-key": "cba64ac887mshd9a3cafd4b476a2p1cec43jsnc1ac09edaf76",
  },
};

export const getNewsData = async () => {
  try {
    const {
      data: { articles },
    } = await axios.get(URL, options);

    return articles;
  } catch (error) {
    console.log(error);
  }
};
