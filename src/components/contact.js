import React from "react"
import { contact, contactList } from "./contact.module.scss"

const Contact = () => {
  return (
    <section id="contact" className={contact}>
      <div>
        <h1>Contact</h1>
        <p>You can get in touch with me here!</p>
        <ul className={contactList}>
          <li>
            Twitter:{" "}
            <a href="https://twitter.com/thisdotAaron" target="_blank">
              @thisdotAaron
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/aaronmbarnett/"
              target="_blank"
            >
              Aaron Barnett
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
