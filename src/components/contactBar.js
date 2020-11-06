import React from "react"
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const ContactBar = () => (
    <div id="contact-bar">
        <a href="https://github.com/aviwarner" target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/in/aviwarner" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="contact-icon" />
        </a>
        <a href="https://www.twitter.com/aviwarner" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="contact-icon" />
        </a>
    </div>
)

export default ContactBar
