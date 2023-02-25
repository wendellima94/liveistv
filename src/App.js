import React, { useState } from "react";
import ReactHlsPlayer from "react-hls-player";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const hlsUrl =
    "https://cdn.jmvstream.com/w/LVW-11215/LVW11215_D0pTqTBcCE/playlist.m3u8";

  return (
    <div className="row justify-content-center">
      <ReactHlsPlayer
        src={hlsUrl}
        autoPlay={false}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
}
