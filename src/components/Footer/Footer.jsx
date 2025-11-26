import { React, useContext } from "react";
import { themeContext } from "../../context";
import { GiFleurDeLys } from "react-icons/gi";

import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import "./footer.css";
const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <footer
      className=""
      style={{ background: darkMode ? "var(--color-primary-variant)" : "" }}
    >
      <a href="#" className="footer_logo">
        <GiFleurDeLys />
        {" Kunal Kumar"}
      </a>
      <ul className="permalinks">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#techstack">TechStack</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/kunal-kumar-rk/">
          <FiLinkedin />
        </a>
        <a href="https://github.com/Kunal-R-kumar">
          <FiGithub />
        </a>
        <a href="https://instagram.com/k.unal__">
          <FiInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>
          "That's all about ~{" "}
          <i>
            <GiFleurDeLys />
            {" Kunal Kumar"}
          </i>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
