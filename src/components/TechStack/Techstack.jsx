import { React, useContext } from "react";
import {
  techstackDataWeb,
  techstackDataBackend,
  techstackOtherData,
} from "../../utils/common-utils";
import "./techstack.css";
import { themeContext } from "../../context";
import { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const techstack = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 0.5, typeof: "spring" };

  const levelHandle = (data) => {
    if (data == 1) {
      return "Advance";
    } else if (data == 2) {
      return "Intermediate";
    } else if (data == 3) {
      return "Beginner";
    } else {
      return "Familiar";
    }
  };
  return (
    <div className="container" id="techstack">
      <h1
        style={{
          textAlign: "center",
          color: darkMode ? "var(--color-primary-variant)" : "",
          marginBottom: "1.2rem",
          marginTop: "1.2rem",
        }}
      >
        My Tech-Stack
      </h1>
      <div className="techstack-container ">
        <motion.div
          initial={{ left: "-40%" }}
          whileInView={{ left: "0%" }}
          className="techstack-left "
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "var(--color-white)" : "",
            border: darkMode ? "2px solid var(--color-white)" : "",
          }}
        >
          <h3 style={{ color: darkMode ? "var(--color-primary-variant)" : "" }}>
            Web Development
          </h3>
          <div className="techstack-content">
            {techstackDataWeb.map((data) => (
              <article className="techstack-details" key={data.id}>
                <img src={data.image} />
                <div>
                  <h4>{data.title}</h4>
                  <small className="text-light">
                    {levelHandle(data.level)}
                  </small>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ right: "-40%" }}
          whileInView={{ right: "0%" }}
          className="techstack-backend"
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "var(--color-white)" : "",
            border: darkMode ? "2px solid var(--color-white)" : "",
          }}
        >
          <h3 style={{ color: darkMode ? "var(--color-primary-variant)" : "" }}>
            Programming Languages & Databases
          </h3>
          <div className="techstack-content">
            {techstackDataBackend.map((data) => (
              <article className="techstack-details" key={data.id}>
                <motion.img
                  initial={{ bottom: "-20%" }}
                  whileHover={{ color: "red" }}
                  transition={transition}
                  src={data.image}
                />
                <div>
                  <h4>{data.title}</h4>
                  <small className="text-light">
                    {levelHandle(data.level)}
                  </small>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="other-section">
        <h1
          style={{
            textAlign: "center",
            color: darkMode ? "var(--color-primary-variant)" : "",
            marginBottom: "1.2rem",
            marginTop: "1.2rem",
          }}
        >
          Tools and Others
        </h1>
        <div className="other-section-child">
          {techstackOtherData.map((data, index) => (
            <motion.div
              style={{
                color: darkMode ? "var(--color-primary-variant)" : "",
                border: darkMode
                  ? "2px solid var(--color-primary-variant)"
                  : "",
                paddingRight: "1.2rem",
                paddingLeft: "1.2rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
              }}
              initial={{ scale: "0.5" }}
              whileInView={{ scale: "1" }}
              transition={transition}
              key={index}
              className=""
            >
              <img src={data.image} alt="" />
              <span style={{ margin: "1rem" }}>{data.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default techstack;
