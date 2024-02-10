import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <Link key={item.id} to={`watch?v=${item.id}`}>
          <VideoCard info={item} />
        </Link>
      ))}
    </div>
  );
};

export default MainContainer;
