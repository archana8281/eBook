import React from "react";
import Header from "../../components/Header/header";
import { Content, video } from "../../utlis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function View() {
  return (
    <div>
      <Header />
      <div className="user-view">
        <div className="recent-view">
          <div className="container">
            <h2>Recently view</h2>
            <hr className='uline'/>
            <div className="recent-content">
              {video.map((itm) => (
                <div className="video-list" key={itm.id}>
                  {itm.vid}
                </div>
              ))}
            </div>
            <h4><a href="/review">Show all</a></h4>
          </div>
        </div>
        <div className="content-view">
          <div className="container">
          <h2>Your Gallery</h2>
          <hr className='uline'/>
          <div className="search">
            <input
              type="search"
              name="content"
              placeholder=" search the data"
            />
            <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" /></button>
          </div>
            
            <div className="recent-content">
              {Content.map((itm) => (
                <div className="video-list" key={itm.id}>
                  {itm.vid}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
