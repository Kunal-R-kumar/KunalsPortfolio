import { React, useContext } from "react";
import { themeContext } from "../../context";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import emailjs from "@emailjs/browser";

import { useRef } from "react";

import "./contact.css";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="container" id="Contact">
      <h1
        style={{
          textAlign: "center",
          color: darkMode ? "var(--color-primary-variant)" : "",
        }}
      >
        Contact Me
      </h1>
      <div className="container contact_container">
        <motion.div
          initial={{ translateX: "-30%" }}
          whileInView={{ translateX: "0%" }}
          transition={{ duration: 0.5 }}
          className="contact_options"
          style={{ background: darkMode ? "var(--color-primary-variant)" : "" }}
        >
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h5>kkumar021104@gmail.com</h5>
            <a href="mailto:kkumar021104@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/kunal-kumar-rk/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+918708719044&text=Hi Kunal, I Want to hire you, Reply if you are interested to join our team "
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </motion.div>
        <form ref={form} className="form" onSubmit={sendEmail}>
          <div className="formfield-container">
            <motion.input
              initial={{ translateX: "30%" }}
              whileInView={{ translateX: "0%" }}
              transition={{ duration: 0.5 }}
              className="formfield"
              type="text"
              name="name"
              id="Name"
              placeholder="Enter your name"
              required
            />

            <motion.input
              initial={{ translateX: "30%" }}
              whileInView={{ translateX: "0%" }}
              transition={{ duration: 0.5 }}
              className="formfield"
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email address"
            />

            <motion.input
              initial={{ translateX: "30%" }}
              whileInView={{ translateX: "0%" }}
              transition={{ duration: 0.5 }}
              className="formfield"
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Enter your subject"
            />

            <motion.textarea
              initial={{ translateX: "30%" }}
              whileInView={{ translateX: "0%" }}
              transition={{ duration: 0.5 }}
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              className="formfield formfield-textarea"
              placeholder="Enter your message"
            ></motion.textarea>
          </div>

          <div>
            <motion.button
              initial={{ translateX: "60%" }}
              whileInView={{ translateX: "0%" }}
              transition={{ duration: 0.5 }}
              type="submit"
              className="btn btn-primary"
              id="submit"
              style={{
                background: darkMode ? "var(--color-primary-variant)" : "",
                border: darkMode
                  ? "2px solid var(--color-primary-variant)"
                  : "",
                textAlign: "center",
              }}
            >
              {"Send Message "}
              <FaPaperPlane className="submit-icon" />
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// import { React, useContext } from "react";
// import { themeContext } from "../../context";
// import { FaPaperPlane } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { MdOutlineEmail } from "react-icons/md";
// import { BsWhatsapp } from "react-icons/bs";
// import { AiOutlineLinkedin } from "react-icons/ai";
// import "./contact.css";

// const Contact = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   return (
//     <div className="container" id="Contact">
//       <h1
//         style={{
//           textAlign: "center",
//           color: darkMode ? "var(--color-primary-variant)" : "",
//         }}
//       >
//         Contact Me
//       </h1>

//       <div className="container contact_container">
//         <motion.div
//           initial={{ translateX: "-30%" }}
//           whileInView={{ translateX: "0%" }}
//           transition={{ duration: 0.5 }}
//           className="contact_options"
//           style={{ background: darkMode ? "var(--color-primary-variant)" : "" }}
//         >
//           <article className="contact_option">
//             <MdOutlineEmail className="contact_option-icon" />
//             <h5>kkumar021104@gmail.com</h5>
//             <a href="mailto:kkumar021104@gmail.com" target="_blank">
//               Send a message
//             </a>
//           </article>

//           <article className="contact_option">
//             <AiOutlineLinkedin className="contact_option-icon" />
//             <h4>LinkedIn</h4>
//             <a
//               href="https://www.linkedin.com/in/kunal-kumar-rk/"
//               target="_blank"
//             >
//               Send a message
//             </a>
//           </article>

//           <article className="contact_option">
//             <BsWhatsapp className="contact_option-icon" />
//             <h4>WhatsApp</h4>
//             <a
//               href="https://api.whatsapp.com/send?phone=+918708719044&text=Hi Kunal, I Want to hire you, Reply if you are interested to join our team"
//               target="_blank"
//             >
//               Send a message
//             </a>
//           </article>
//         </motion.div>

//         {/* 🔥 Netlify Form Starts Here */}
//         <form
//           name="contactFromKunalsPortfolio"
//           method="POST"
//           data-netlify="true"
//           onSubmit="submit"
//           className="form"
//         >
//           <input
//             type="hidden"
//             name="form-name"
//             value="contactFromKunalsPortfolio"
//           />
//           <input type="hidden" name="bot-field" />

//           <label>
//             <input
//               className="formfield slidein"
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               required
//             />
//           </label>

//           <label>
//             <input
//               className="formfield slidein"
//               type="email"
//               name="email"
//               placeholder="Enter your email address"
//               required
//             />
//           </label>

//           <label>
//             <input
//               className="formfield slidein"
//               type="text"
//               name="subject"
//               placeholder="Enter your subject"
//               required
//             />
//           </label>

//           <label>
//             <textarea
//               className="formfield formfield-textarea slidein"
//               name="message"
//               cols="30"
//               rows="10"
//               placeholder="Enter your message"
//               required
//             ></textarea>
//           </label>

//           <button
//             type="submit"
//             className="btn btn-primary slidein"
//             id="submit"
//             style={{
//               background: darkMode ? "var(--color-primary-variant)" : "",
//               border: darkMode ? "2px solid var(--color-primary-variant)" : "",
//               textAlign: "center",
//             }}
//           >
//             Send Message <FaPaperPlane className="submit-icon" />
//           </button>
//         </form>

//         {/* 🔥 Netlify Form Ends */}
//       </div>
//     </div>
//   );
// };

// export default Contact;
