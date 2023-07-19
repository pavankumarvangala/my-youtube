import React, { useEffect, useState } from "react";
import { SEARCH_QUERY_API, YOUTUBE_API_KEY } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const { isSearched, searchQueryText } = useSelector((store) => store.result);

  useEffect(() => {
    isSearched ? fetchSearchVideos() : fetchVideos();
  }, [searchQueryText]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };
  const fetchSearchVideos = async () => {
    const data = await fetch(SEARCH_QUERY_API + searchQueryText);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap overflow-hidden">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
