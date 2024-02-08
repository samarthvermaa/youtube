import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  return (
    <div className="rounded-lg shadow-xl p-2 h-88 w-72 m-2">
      <img
        className="rounded-lg"
        alt="id"
        src={snippet.thumbnails.medium.url}
      />
      <p className="font-bold">{info.snippet.title}</p>
      <p>{snippet.channelTitle}</p>
      <p>{statistics.viewCount} views</p>
    </div>
  );
};

export default VideoCard;
