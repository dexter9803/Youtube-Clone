import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerMain from "./ShimmerMain";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setvideos(json.items);
  };

  if(!videos[0]){
    return (<ShimmerMain/>)
  }

  return (
    <div className="flex flex-wrap z-0 pl-6">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"watch?v="+video?.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
