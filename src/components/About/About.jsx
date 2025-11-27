import { React, useContext } from "react";
import { themeContext } from "../../context";
import HtmlImg from "../../assets/img/htmlpng.png";
import cssImg from "../../assets/img/csspng.png";
import jsImg from "../../assets/img/jspng.png";
import reactImg from "../../assets/img/reactpng.png";
import tailwindImg from "../../assets/img/tailwindpng.png";
import skillpng from "../../assets/img/skills.png";
import nodePng from "../../assets/img/nodejspng.png";
import cpng from "../../assets/img/cpng.png";
import cpppng from "../../assets/img/cpppng.png";
import mysqlPng from "../../assets/img/mysqlpng.png";
import javaPng from "../../assets/img/javapng.png";
import pythonLogo from "../../assets/img/pythonLogo.png";
import androidLogo from "../../assets/img/androidLogo.png";
import { motion } from "framer-motion";

import "./about.css";
const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 0.9, typeof: "spring" };

  return (
    <div className="container about" id="About">
      <h1
        style={{
          color: darkMode ? "var(--color-primary-variant)" : "",
          textAlign: "center",
        }}
      >
        A Glimpse of Me
      </h1>
      <div className="skills-container ">
        <motion.div
          initial={{ translateX: "-20%" }}
          whileInView={{ translateX: "0%" }}
          transition={transition}
          className="skill-container-left"
        >
          <h2
            style={{ color: darkMode ? "var(--color-primary-variant)" : "" }}
            className="skill-heading"
          >
            <span className="caps">M</span>e and
            <br />
            <i>My Skillset</i>
          </h2>
          <div className="skill-subHeading">
            <p>
              Hi Everyone! I’m Kunal — an enthusiastic Frontend web & Android
              Developer and also a Python GUI Developer too. I enjoy creating
              applications that are user-friendly, visually appealing, and
              meaningful for everyday use.
            </p>
            <p>
              I mainly work with Android development (Java + XML) and Python
              Desktop Applications using Tkinter. I have developed several
              interactive Python desktop tools, such as a Contact Book, Secure
              Notepad, To-Do App, Password Generator, Secure Zipper, Calculator,
              and Rock-Paper-Scissor Game — each helping me improve my UI design
              and problem-solving skills.
            </p>
            <p>
              On Android, I’ve worked on projects like Konvo — a WhatsApp-like
              chat app — and Diary Maker app. Through these projects, I have
              built strong skills in layouts, navigation, themes, authentication
              UI, and responsive design.
            </p>
            <p>
              I believe in learning through building real projects. I am always
              excited to explore new ideas, refine my work, and grow my
              abilities as a developer. With this dedication and curiosity, I
              aim to create web applications(websites) that provide great user
              experiences and solve real-world problems. 🚀
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ translateX: "20%" }}
          whileInView={{ translateX: "0%" }}
          transition={transition}
          className="skill-container-right"
        >
          <div
            className="con"
            style={{ borderColor: darkMode ? "var(--color-white)" : "" }}
          >
            <div className="icon">
              <div className="imgBox">
                <img src={HtmlImg} alt="" />
              </div>
              <div className="imgBox">
                <img src={cssImg} alt="" />
              </div>
              <div className="imgBox">
                <img src={jsImg} alt="" />
              </div>
              <div className="imgBox">
                <img src={reactImg} alt="" />
              </div>
              <div className="imgBox">
                <img src={tailwindImg} alt="" />
              </div>
              <div className="imgBox">
                <img src={cpng} alt="" />
              </div>
              <div className="imgBox">
                <img src={cpppng} alt="" />
              </div>
              <div className="imgBox">
                <img src={pythonLogo} alt="" />
              </div>
              <div className="imgBox">
                <img src={skillpng} alt="" />
              </div>
            </div>
            <div className="content">
              <div className="icon2">
                <div className="imgBox1">
                  <img src={nodePng} alt="" />
                </div>
                <div className="imgBox1">
                  <img src={mysqlPng} alt="" />
                </div>
                <div className="imgBox1">
                  <img src={javaPng} alt="" />
                </div>
                <div className="imgBox1">
                  <img src={androidLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
