import { React, useContext } from "react";
import { themeContext } from "../../context";

const CTA = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="ctn">
      <a
        style={{
          color: darkMode ? "var(--color-primary-variant)" : "",
          border: darkMode ? "2px solid var(--color-primary-variant)" : "",
        }}
        href={
          "https://drive.google.com/file/d/101U6aM6SZi30JBn_3poZkIExWuCuehMp/view?usp=drive_link"
        }
        download="Kunal's Resume"
        className="btn"
        target="_blank"
      >
        Download Resume
      </a>
      <a
        style={{
          background: darkMode ? "var(--color-primary-variant)" : "",
          border: darkMode ? "2px solid var(--color-primary-variant)" : "",
        }}
        href="#Contact"
        className="btn btn-primary"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
