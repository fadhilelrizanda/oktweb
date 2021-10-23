import React from "react";
import {
  arrowIcon,
  downArrow,
  fb,
  gallery1,
  gallery2,
  gallery3,
  ig,
  placeIcon,
  twitter,
} from "../../assets";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <header>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </header>
      <div className="container">
        <div className="hero-s">
          <div className="hover-icon">
            <img className="icon-2" src={downArrow} alt="arrow" />
          </div>
        </div>
        <div className="overlay">
          <div className="text-container">
            <div className="text-overlay">
              <h4>Rest Your Body and Soul</h4>
              <p>
                Let yourself get comfort, serenity, and freshness by traveling
                with us with us
              </p>
              <div className="gap"></div>
              <button className="btnClass">
                Explore <img className="icon" src={arrowIcon} alt="arrow" />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="hero">
          <nav className="menu">
            <h3 className="brand">RAUN .</h3>
            <ul className="menu-list">
              <li>
                <p className="theme-text">Home</p>
              </li>
              <li>Destination</li>
              <li>Contact Us</li>
              <li>
                <button className="btnClass">Explore</button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <h3>Facility</h3>
          <div className="gallery">
            <div className="gallery-card">
              <img src={gallery1} alt="Gallery" />
              <div className="caption">
                <h4>Speedboat</h4>
                <p>
                  Give the experience and treat the eyes with the beauty of
                  coral reefs.
                </p>
              </div>
            </div>
            <div className="gallery-card">
              <img src={gallery2} alt="Gallery" />
              <div className="caption">
                <h4>Snorkling</h4>
                <p>
                  Give the experience and treat the eyes with the beauty of
                  coral reefs.
                </p>
              </div>
            </div>
            <div className="gallery-card">
              <img src={gallery3} alt="Gallery" />
              <div className="caption">
                <h4>Diving</h4>
                <p>
                  Give experience and feast your eyes with the diversity of
                  marine animals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="account">
            <h3 className="brand">RAUN .</h3>
            <div className="place">
              <p>
                <img className="icon" src={placeIcon} alt="Place Icon" />
                Jl. Cenderwasih 20, Jakarta Barat, Indonesia
              </p>
            </div>
            <div className="media-social">
              <img className="icon" src={fb} alt="facebook" />
              <img className="icon" src={ig} alt="instagram" />
              <img className="icon" src={twitter} alt="twitter" />
            </div>
          </div>
          <div className="form">
            <h4>Contact Us</h4>
            <div className="form-submit">
              <input
                className="inputEmail"
                type="email"
                placeholder="Your Email @"
              />{" "}
              <br />
              <input
                className="inputText"
                type="text"
                placeholder="Send Me Text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
