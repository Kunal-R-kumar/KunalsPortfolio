import { React, useContext } from "react";
import { GiFleurDeLys } from "react-icons/gi";

import "./navbar1.css";
import Toggle from "../Toggle/Toggle";
import { themeContext } from "../../context";

const Navbar1 = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="container"
      id="Navbar"
      style={{ color: darkMode ? "var(--color-black)" : "" }}
    >
      <div className="nav-name">
        {" "}
        <GiFleurDeLys />
        {"Kunal Kumar "}
      </div>
      <Toggle />
    </div>
  );
};

export default Navbar1;
