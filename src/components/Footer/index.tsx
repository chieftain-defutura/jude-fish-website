import React, { useEffect, useState } from "react";
import Mail from "../../assets/icons/mail.png";
import Logo from "../../assets/icons/logo.png";
import { AiOutlinePlus } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsHandIndex } from "react-icons/bs";
import "./Footer.scss";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer-wrapper">
      <div className="mx">
        <div className="subscribe-block">
          <div className="heading-content">
            <div>
              <img src={Mail} alt="" />
            </div>
            <div>
              <h3>Subscribe</h3>
              <h4>to our newsletter</h4>
            </div>
          </div>

          <div className="input-group">
            <input type="email" placeholder="Your email..." />
            <button type="submit">
              <span>Subscribe</span>
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <div className="fish-img">
          <img src={Logo} alt="" />
          <p>
            Etiam consequat sem ullamcorper, euismod metus sit amet, tristique
            justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex
            commodo. Donec lacinia elementum diam. Vivamus volutpat a ligula sit
            amet pretium.
          </p>
        </div>
        <div className="media-icons">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
      <div>
        {isVisible && (
          <div className="topButton" onClick={scrollToTop}>
            <BsHandIndex />
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
