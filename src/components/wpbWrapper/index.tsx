import React from "react";
import Fish from "../../assets/images/fish-img.png";
import Caviar from "../../assets/images/Caviar-img.png";
import FreshwaterFish from "../../assets/images/Freshwater-fish-img.png";
import Lobster from "../../assets/images/lobster-img.png";

import "./wpbWrapper.scss";

const WpbWrapper: React.FC = () => {
  return (
    <div className="wpb-wrapper">
      <div className="mx">
        <div className="wpb-container">
          <div className="wpb-circle">
            <img src={Fish} alt="" />
            <div className="overlay"></div>
          </div>
          <div className="wpb-circle">
            <img src={Lobster} alt="" />
            <div className="overlay"></div>
          </div>
          <div className="wpb-circle">
            <img src={Caviar} alt="" />
            <div className="overlay"></div>
          </div>
          <div className="wpb-circle">
            <img src={FreshwaterFish} alt="" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WpbWrapper;
