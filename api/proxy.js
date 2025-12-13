// 이 파일은 브라우저가 아닌 'Node.js 서버'에서 실행됩니다.
import axios from "axios";

export default async function handler(request, response) {
  // 1. 프론트엔드에서 보낸 요청 경로를 가져옵니다. (예: /movie/popular)
  // request.url은 '/api/movie/popular?page=1' 형태일 수 있습니다.
  const { url } = request;

  // '/api' 부분을 떼어내고 진짜 TMDB 경로만 남깁니다.
  const endpoint = url.replace(/^\/api/, "");

  // 2. 서버 환경변수에서 비밀키를 꺼냅니다. (Vercel 설정에서 VITE_ 뗀 이름으로 저장하세요!)
  const apiKey = process.env.APP_API_KEY;

  try {
    // 3. 진짜 TMDB로 요청을 보냅니다. (비밀키 부착!)
    const tmdbResponse = await axios.get(
      `https://api.themoviedb.org/3${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: "application/json",
        },
      }
    );

    // 4. TMDB에서 받은 데이터를 프론트엔드에 그대로 돌려줍니다.
    return response.status(200).json(tmdbResponse.data);
  } catch (error) {
    return response
      .status(error.response?.status || 500)
      .json({ error: "TMDB 요청 실패" });
  }
}
