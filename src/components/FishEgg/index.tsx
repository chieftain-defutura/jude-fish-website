import React from "react";
import { GiFishEggs } from "react-icons/gi";
import { GiCirclingFish } from "react-icons/gi";
import { GiSadCrab } from "react-icons/gi";
import { GiFlatfish } from "react-icons/gi";
import "./FishEgg.scss";

const FishEgg: React.FC = () => {
  return (
    <div>
      <div className="fish-egg-bg-img">
        <div className="fish-icons-content">
          <div className="fish-para">
            <GiFishEggs className="fish-icon" />
            <h6>Only fresh products</h6>
          </div>
          <div className="fish-para">
            <GiCirclingFish className="fish-icon" />
            <h6>Convenient vacuum packaging</h6>
          </div>
          <div className="fish-para">
            <GiSadCrab className="fish-icon" />
            <h6>International quality certificates</h6>
          </div>
          <div className="fish-para">
            <GiFlatfish className="fish-icon" />
            <h6>Professional fish filleting</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishEgg;
