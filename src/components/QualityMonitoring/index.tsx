import React from "react";
import MeatImg from "../../assets/images/meat-new.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { FaTemperatureHigh } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import Button from "../Button/Button";
import "./QualityMonitoring.scss";

const QualityMonitoring: React.FC = () => {
  return (
    <div className="quality-wrapper">
      <div className="mx">
        <div className="quality-container">
          <div className="quality-content-first">
            <img src={MeatImg} alt="" />
          </div>
          <div className="quality-content-second">
            <h6>Technologies</h6>
            <h2>Quality monitoring</h2>
            <div className="testing-icons-content">
              <div>
                <FaTemperatureHigh />
                <h6>Temperature Control</h6>
              </div>
              <div>
                <GrTest />
                <h6>Laboratory Testing</h6>
              </div>
              <div>
                <FaTemperatureHigh />
                <h6>Antibacterial Treatment</h6>
              </div>
            </div>
            <p>
              Cras non dui id ex mattis vehicula. Nullam posuere ligula non
              libero mollis, non ornare sapien rutrum. Quisque vitae risus
              venenatis, dignissim felis id, vulputate nisl. Praesent sed felis
              aliquam, ullamcorper tellus.
            </p>
            <Button
              varient="primary"
              size="medium"
              rightIcon={<AiOutlinePlus />}
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityMonitoring;
