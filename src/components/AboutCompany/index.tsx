import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { ImFileText2 } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import Crab from "../../assets/images/background1.jpeg";
import "./AboutCompany.scss";
import Button from "../Button/Button";

const AboutCompany: React.FC = () => {
  return (
    <div className="about-company-wrapper">
      <div className="mx">
        <div className="about-container">
          <div className="second-content">
            <img src={Crab} alt="" />
          </div>
          <div className="first-content">
            <h6>about company</h6>
            <h3>Raw Meat Production by Leading Farm</h3>
            <p>
              Cras non dui id ex mattis vehicula. Nullam posuere ligula non
              libero mollis, non ornare sapien rutrum. Quisque vitae risus
              venenatis, dignissim felis id, vulputate nisl. Praesent sed felis
              aliquam, ullamcorper tellus.
            </p>
            <div className="tell-content">
              <MdPhoneInTalk />
              <p>+8068-387-01-39</p>
            </div>
            <div className="tell-content">
              <ImFileText2 />
              <p>Download price</p>
            </div>
            <div className="read-btn">
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
    </div>
  );
};

export default AboutCompany;
