import React from "react";
import img from "../assets/image2.jpeg";
import PhoneButton from "./PhoneButton";
import { Link } from "react-scroll";

function TopNavBar() {
const phoneNumber = "+13182642314";

  return (
    <nav className="top-nav">
      <div className="top-nav__brand">
        <a href="/">
          <img src={img} alt="LoadMeSomething" />
        </a>
      </div>
      <ul className="top-nav__menu">
        {/* <li className="top-nav__item">
          <Link
            to="target-element-id1"
            smooth={true}
            duration={500}
            className="top-nav__link"
          >
            Home
          </Link>
        </li>
        <li className="top-nav__item">
          <Link
            to="target-element-id2"
            smooth={true}
            duration={500}
            className="top-nav__link"
          >
            About
          </Link>
        </li>
        <li className="top-nav__item">
          <Link
            to="target-element-id3"
            smooth={true}
            duration={500}
            className="top-nav__link"
          >
            Plans & Prices
          </Link>
        </li> */}
        <li className="top-nav__item">
          <PhoneButton phoneNumber={phoneNumber} />
        </li>
      </ul>
    </nav>
  );
}

export default TopNavBar;