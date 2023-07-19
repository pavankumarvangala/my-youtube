import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-52 overflow-hidden p-2 m-3">
      <img alt="thumnail" src={thumbnails?.medium?.url} />
      <ul>
        <li>{channelTitle}</li>
        <li>{title}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-black">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
