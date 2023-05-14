import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Header.scss";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Logo from "../../assets/images/logo.png";
// import slide1Img from "../../assets/images/background1.jpeg";
// import slide3Img from "../../assets/images/background3.jpeg";
// import slide9Img from "../../assets/images/background9.jpeg";
import slide5Img from "../../assets/images/background2.jpeg";
import slide6Img from "../../assets/images/background5.jpeg";
import slide7Img from "../../assets/images/background6.jpeg";
import slide8Img from "../../assets/images/background7.jpeg";

const slides = [
  {
    title: "Feel the freashnees",
    background: slide6Img,
    description: "Fresh from the sea to your plate ",
  },
  {
    title: "oceans in your plates",
    background: slide5Img,
    description: "For the love of seafood",
  },
  {
    title: "Fresh",
    background: slide7Img,
    description: "Catch the flavor of the sea with our top-quality fish",
  },
  {
    title: "For Restaurant",
    background: slide8Img,
    description: "lorem ipsum lorem ipsum",
  },
];

const Header: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((s) =>
        s === 0 ? s + 1 : s === slides.length - 1 ? 0 : s + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="slideshow-container">
        <div className="">
          <div className="header-wrapper">
            <div className="header-top">
              <div className="social-media">
                <h5>Follow us -</h5>
                <FaTwitter className="social-icon" />
                <FaFacebookF className="social-icon" />
                <FaInstagram className="social-icon" />
                <FaYoutube className="social-icon" />
              </div>
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="search">
                <IoIosContact className="search-icon" />
                <AiOutlineShoppingCart className="search-icon" />
                <AiOutlineSearch className="search-icon" />
              </div>
            </div>
            <div className="header-bottom">
              <h4>
                Home <span>+</span>
              </h4>
              <h4>
                About us <span>+</span>
              </h4>
              <h4>
                Fishes <span>+</span>
              </h4>
              <h4>
                Contacts <span>+</span>
              </h4>
              <h4>
                Photos <span>+</span>
              </h4>
              <h4>
                Pages <span>+</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="slideshow-wrapper">
          {slides.map((slide, index) => {
            return (
              <AnimatePresence mode="wait">
                {currentSlide === index && (
                  <motion.div
                    className="slide-card"
                    key={index.toString()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="card-background"
                      style={{ backgroundImage: `url(${slide.background})` }}
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.2 }}
                      transition={{ duration: 30 }}
                    ></motion.div>
                    <motion.div
                      className="card-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 3 }}
                    >
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>
        <div className="slide-arrows">
          <button
            className="left-arrow"
            onClick={() =>
              setCurrentSlide((s) => (s === 0 ? slides.length - 1 : s - 1))
            }
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            className="right-arrow"
            onClick={() =>
              setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1))
            }
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
