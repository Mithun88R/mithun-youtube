export const YOUTUBE_VIDEO_KEY =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  import.meta.env.VITE_YOUTUBE_API_KEY;

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_SUGGESSTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
