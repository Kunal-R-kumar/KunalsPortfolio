import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import TechStack from "./components/TechStack/Techstack";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar1 from "./components/Nav/Navbar1";
import Navbar2 from "./components/Nav/Navbar2";
import Projects from "./components/Project/Projects";
import { useContext } from "react";
import { themeContext } from "./context";
import AnimatedCursor from "react-animated-cursor";
// import AnimCursor from "./components/AnimCursor/AnimCursor";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "var(--color-black)" : "var(--color-brown)",
        color: darkMode ? "var(--color-white)" : "",
      }}
    >
      {/* <AnimCursor/> */}
      {/* // color={darkMode ? "122, 122, 122" : "68,61,202"} */}
      <AnimatedCursor
        key={darkMode ? "dark" : "light"}
        innerSize={15}
        outerSize={20}
        color={darkMode ? "122, 122, 122" : "139,89,162"}
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar1 />
      <Header />
      <Navbar2 />
      <TechStack />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
