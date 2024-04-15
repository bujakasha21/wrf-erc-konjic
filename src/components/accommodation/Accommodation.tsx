"use client";
import React from "react";
import ReactPlayer from "react-player/youtube";

export default function Accommodation() {
  return (
    <div className="player-wrapper pointer-events-none">
      <ReactPlayer
        width="100%"
        height="100%"
        url='https://www.youtube.com/embed/85ITTM97__A?si=3Cvke_olYqOEZkm3&amp;start=11"'
        muted
        playing
        loop
        playsinline
        controls={false}
        className="react-player"
      />
    </div>
  );
}
