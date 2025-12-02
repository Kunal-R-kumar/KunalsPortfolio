import { React, useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

import myImg from "../../assets/img/mypic.png";
import glassesemoji from "../../assets/img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import CTA from "./CTA";
import { themeContext } from "../../context";
import { motion } from "framer-motion";
import { socialMediaLinks } from "../../utils/common-utils";

import "./header.css";

const Header = () => {
  const transition = { duration: 0.5, typeof: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className=" container header" id="Home">
      <motion.div
        initial={{ left: "-20%" }}
        whileInView={{ left: "0%" }}
        transition={transition}
        className="header-left "
      >
        <div className="name">
          <span>
            Hi! I'm{" "}
            <b style={{ color: darkMode ? "var(--color-primary-variant" : "" }}>
              {" "}
              Kunal
            </b>
          </span>
          <span style={{ fontWeight: 400, letterSpacing: "-1.1px" }}>
            I am a{" "}
            <b
              style={{ color: darkMode ? "var(--color-primary-variant)" : "" }}
            >
              <TypeAnimation
                sequence={[
                  "Frontent Developer",
                  500,
                  "Python Developer",
                  500,
                  "Android Developer",
                  500,
                  "Software Engineer",
                  500,
                ]}
                repeat={Infinity}
              />
            </b>
          </span>
          <span>
            Hi, I’m a passionate Software Developer focused on building
            intelligent, user-centered digital experiences. I love turning ideas
            into real, working products — especially in Android development,
            modern web technologies and python software development.
            <br />
            <br /> Here you’ll learn about my journey as a Developer.
          </span>
        </div>
        <CTA />
        <div className="i-icons">
          <AiOutlineLinkedin
            style={{ color: "#0077b5" }}
            className="social-icon-hover"
            onClick={() => window.open(socialMediaLinks[0].Linkedin)}
          />
          <AiOutlineGithub
            style={{
              color: darkMode ? "var(--color-white)" : "var(--color-black",
            }}
            className="social-icon-hover"
            onClick={() => window.open(socialMediaLinks[0].github)}
          />
          <AiOutlineInstagram
            style={{ color: "#DD2A7B" }}
            className="social-icon-hover"
            onClick={() => window.open(socialMediaLinks[0].Instagram)}
          />
        </div>
      </motion.div>
      <div className="header-right">
        <img src={myImg} alt="" />
        <motion.img
          initial={{ left: "-15%" }}
          whileInView={{ left: "10%" }}
          transition={transition}
          src={glassesemoji}
          alt=""
        />
        <motion.div
          initial={{ right: "-20%", top: "-4%" }}
          whileInView={{ right: "5%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv
            img={"https://img.icons8.com/plasticine/100/android-os.png"}
            title1="Android App"
            title2={"Developer"}
          />
        </motion.div>
        <motion.div
          initial={{ bottom: "10%", left: "-20%" }}
          whileInView={{ left: "10%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv
            img={"https://img.icons8.com/?size=160&id=gEUAVzkSqR4R&format=png"}
            title1="Web "
            title2={"Developer"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "10%", left: "-20%" }}
          whileInView={{ left: "10%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv
            img={"https://img.icons8.com/?size=160&id=Vra58PN2KmI5&format=png"}
            title1="Frontend"
            title2={"Developer"}
          />
        </motion.div>
        <motion.div
          initial={{ bottom: "10%", right: "-20%" }}
          whileInView={{ right: "0%" }}
          transition={transition}
          style={{ bottom: "10%", right: "0%" }}
          className="floating-div"
        >
          <FloatingDiv
            img={"https://img.icons8.com/plasticine/100/python.png"}
            title1="Python"
            title2={"Developer"}
          />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem ",
            left: "-9rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
