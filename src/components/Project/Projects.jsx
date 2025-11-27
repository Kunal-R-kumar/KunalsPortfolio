// import { React, useContext } from "react";
// import { themeContext } from "../../context";
// import { motion } from "framer-motion";
// import "./project.css";
// import { projectsList } from "../../utils/common-utils";
// const Projects = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   return (
//     <div className="container" id="Projects">
//       <h1
//         style={{
//           textAlign: "center",
//           color: darkMode ? "var(--color-primary-variant)" : "",
//           marginBottom: "1.4rem",
//           marginTop: "1.4rem",
//         }}
//       >
//         My Recents Projects
//       </h1>
//       <div className="project_container">
//         {projectsList.map(({ id, image, title, github, demo }) => (
//           <motion.article
//             initial={{ scale: 0.5 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 0.3 }}
//             key={id}
//             className="project_items"
//             style={{ border: darkMode ? "2px solid var(--color-white)" : "" }}
//           >
//             <img src={image} alt="" className="project_items-image" />
//             <motion.h3
//               initial={{ left: "40px" }}
//               style={{ color: darkMode ? "var(--color-primary-variant)" : "" }}
//             >
//               {title}
//             </motion.h3>
//             <div className="project_item_CTA">
//               <a
//                 href={github}
//                 className="btn"
//                 style={{
//                   color: darkMode ? "var(--color-primary-variant)" : "",
//                   border: darkMode
//                     ? "2px solid var(--color-primary-variant)"
//                     : "",
//                 }}
//                 target="_blank"
//               >
//                 Github
//               </a>
//               <a
//                 href={demo}
//                 className="btn btn-primary "
//                 target="_blank"
//                 style={{
//                   background: darkMode ? "var(--color-primary-variant)" : "",
//                   border: darkMode
//                     ? "2px solid var(--color-primary-variant)"
//                     : "",
//                 }}
//               >
//                 Live Demo
//               </a>
//             </div>
//           </motion.article>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { React, useContext } from "react";
import { themeContext } from "../../context";
import { motion } from "framer-motion";
import "./project.css";
import { projectsList } from "../../utils/common-utils";
import { toast } from "react-toastify"; // 👉 Added toast import

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleDemoClick = (demo) => {
    if (demo === "#") {
      toast.info("🔒 Preview not available yet!", { autoClose: 3000 });
      return;
    }
    window.open(demo, "_blank");
  };

  return (
    <div className="container" id="Projects">
      <h1
        style={{
          textAlign: "center",
          color: darkMode ? "var(--color-primary-variant)" : "",
          marginBottom: "1.4rem",
          marginTop: "1.4rem",
        }}
      >
        My Recent Projects
      </h1>

      <div className="project_container">
        {projectsList.map(({ id, image, title, github, demo }) => (
          <motion.article
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            key={id}
            className="project_items"
            style={{ border: darkMode ? "2px solid var(--color-white)" : "" }}
          >
            <img src={image} alt={title} className="project_items-image" />

            <motion.h3
              initial={{ left: "40px" }}
              style={{ color: darkMode ? "var(--color-primary-variant)" : "" }}
            >
              {title}
            </motion.h3>

            <div className="project_item_CTA">
              <a
                href={github}
                className="btn"
                target="_blank"
                style={{
                  color: darkMode ? "var(--color-primary-variant)" : "",
                  border: darkMode
                    ? "2px solid var(--color-primary-variant)"
                    : "",
                }}
              >
                Github
              </a>

              {/* 👉 Replaced default anchor behavior */}
              <button
                onClick={() => handleDemoClick(demo)}
                className="btn btn-primary"
                style={{
                  background: darkMode ? "var(--color-primary-variant)" : "",
                  border: darkMode
                    ? "2px solid var(--color-primary-variant)"
                    : "",
                  cursor: "pointer",
                }}
              >
                Live Demo
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
