import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const API_URL =
  import.meta.env.PROD
    ? "https://portfolio-backend.onrender.com/api/contact"
    : "http://localhost:5000/api/contact";

  const [status, setStatus] = useState("");

 function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");


    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent ✔");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (err) {
      setStatus("Server error ❌");
    }
  }
  const copyEmail = () => {
  navigator.clipboard.writeText("nouramouri15@gmail.com");
  alert("Email copied to clipboard!");
};


  return (
    <section id="contact">
      <div className="section-inner">
        <h2 className="section-title">Get in touch</h2>

        <div className="contact-layout">
        <div className="contact-info">

            <p className="contact-text">
              Have a <span> question </span>, <span>idea </span>, or <span>opportunity</span>?  
              Send me a message — I’d love to hear from you!
            </p>

     
      <div className="contact-links">
        <a
          href="https://github.com/Namouri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/nour-amouri-8673132b3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <div className="email-copy" onClick={copyEmail}>
  <FaEnvelope />
  <span>nouramouri15@gmail.com</span>
</div>

            </div> 
            </div>
        


<div className="contact-window">
  <div className="window-header">
    <span className="dot red" />
    <span className="dot yellow" />
    <span className="dot green" />
  </div>
         
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send message</button>
            {status && <p>{status}</p>}
          </form>
          </div>
        </div>
              </div>

    </section>
  );
}


