import React from "react";

import "./HomePageFooter.scss";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import WorldMap from "../../assets/images/map.png";

const linkItems = [
  "Services",
  "Order",
  "Research",
  "Resources",
  "About",
  "Contact",
];

function HomePageFooter() {
  return (
    <div className="footer-container">
      <div className="address">
        <div className="address-text">
          <p>
            <b>SeizureCare</b>
          </p>
          <div className="countries-list">
            <a href="https://seizurecarenet.com">USA</a>
            <a href="https://seizurecarenet.in">India</a>
          </div>
        </div>
        <img className="world-map" alt="SeizureCare" src={WorldMap} />
      </div>
      <div className="footer-links">
        {linkItems.map((item, i) => {
          const link = `/${item.toLowerCase()}`;
          return (
            <div key={i}>
              <span className="link">
                <a href={link}>{item}</a>
              </span>
              {i !== linkItems.length - 1 && "|"}
            </div>
          );
        })}
      </div>
      <div className="socials-container">
        <FontAwesomeIcon className="icon-fb" icon={faFacebook} />
        <FontAwesomeIcon className="icon-yt" icon={faYoutubeSquare} />
        <FontAwesomeIcon className="icon-in" icon={faLinkedin} />
      </div>
    </div>
  );
}

export default HomePageFooter;
