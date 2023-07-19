const GOOGLE_API_KEY = "AIzaSyBnLDuHH43WFi3DtiOOGzxmUKwyP0SgYdo";

export const YOUTUBE_API_KEY = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;

//   [YOUR_SEARCH_TEXT]&key=[YOUR_API_KEY]'
