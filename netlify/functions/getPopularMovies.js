import axios from "axios";
const API_KEY = process.env.VITE_APP_API_KEY;

export const handler = async function (event, context) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
