import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tu70asf",
        "template_gr322pj",
        formRef.current,
        "xXtBq1ExlhIwMSii5"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );

    e.target.reset(); // Optional: reset the form after sending
  };
  return (
    <>
      <div className="contact bg-gray-500 h-auto text-white py-15" id="contact">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">
          Let's Get Connected
        </h2>
        <form className="contact_form" ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="input"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            required
            className="input h-32"
          ></textarea>
          <button type="submit" className="btn_contact mt-5">
            Send Message
          </button>
        </form>
        <h3 className="text-center font-bold mt-3">My Socail Profiles:</h3>
        <div className="social flex flex-col sm:flex-row gap-6 w-[88%] mx-auto p-4 justify-center items-center">
          <a
            href="https://github.com/M-Zaid-Asif"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-black hover:text-blue-600"
          >
            <FaGithub />
            <strong>GitHub</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/m-zaid-asif-77891b373/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-black hover:text-blue-600"
          >
            <FaLinkedin />
            <strong>LinkedIn</strong>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
