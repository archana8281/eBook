import React from "react";
import { video } from "../../utlis";

export default function Sample() {
  return (
    <div>
      <div className="container">
        <h1>Our Rated Section</h1>
        <div className="platform-content">
          {video.map((itm) => (
            <div className="video-list" key={itm.id}>
              {itm.vid}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
