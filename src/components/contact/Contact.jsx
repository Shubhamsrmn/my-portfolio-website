import React from "react";
import "./contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import ContactItem from "./ContactItem";
const contacts = [
  {
    id: 1,
    type: "Email",
    subtype: "shubhamsrmn@gmail.com",
    link: "mailto:shubhamsrmn@gmail.com",
    icon: MdOutlineEmail,
  },
  {
    id: 2,
    type: "Messenger",
    subtype: "shubhamsrmn",
    link: "mailto:shubhamsrmn@gmail.com",
    icon: RiMessengerLine,
  },
  {
    id: 3,
    type: "Whatsapp",
    subtype: "+91 234433223",
    link: "https://api.whatsapp.com//send?phone=+912345678",
    icon: BsWhatsapp,
  },
];
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          {contacts.map((contact) => {
            return <ContactItem key={contact.id} data={contact} />;
          })}
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
