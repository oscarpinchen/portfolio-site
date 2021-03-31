import axios from "axios";

export const getNewsArticles = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_KEY}`
    );
    console.log(response);
    if (response.status === 200) {
      return response.data.articles;
    }
  } catch (error) {
    // Handle the error by showing an error message
    console.log(error);
  }
};
