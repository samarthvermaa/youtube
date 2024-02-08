import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_LIST } from "../utils/constants";
import VideoCard from "./VideoCard";

const MainContainer = () => {
  const [videos, setVideos] = useState();
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_LIST);
    const json = await data.json();
    console.log("json--->", json);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap justify-center">
      {videos?.map((item) => (
        <VideoCard key={item.id} info={item} />
      ))}
    </div>
  );
};

export default MainContainer;
