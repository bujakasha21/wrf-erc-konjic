"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import ReactPlayer from "react-player";

const AboutVideo = () => {
  const videoRef = useRef(null);
  const isVideoInView = useInView(videoRef);

  const videoConfig = {
    youtube: {
      playerVars: {
        autoplay: 1,
        controls: 0,
        cc_load_policy: 0,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        vq: "hd1080", // This sets the video quality to 720p
      },
    },
  };
  return (
    <div className="relative">
      <div className="bg-[#f2f2f2] absolute top-0 h-[2rem] sm:h-[3rem] md:h-[4rem] lg:h-[10rem] w-full z-10"></div>
      <div className="bg-[#f2f2f2] absolute bottom-0 h-[2rem] sm:h-[3rem] md:h-[4rem] lg:h-[10rem] w-full z-10"></div>
      <div className="player-wrapper pointer-events-none" ref={videoRef}>
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=jcJMp9AWrXc"
          muted
          playing={isVideoInView}
          loop
          playsinline
          controls={false}
          config={videoConfig}
          className="react-player"
        />
      </div>
    </div>
  );
};

export default AboutVideo;
