import React from "react"
import profilePic from "../img/profilepic.jpg"
import heroStyles from "./hero.module.scss"

const Hero = () => {
  return (
    <section id="hero" className={heroStyles.hero}>
      <div>
        <img
          src={profilePic}
          alt="Profile Image"
          className={heroStyles.profilePic}
        />
      </div>

      <div className={heroStyles.heroTextBase}>
        <div className={heroStyles.heroText}>
          <h2>Hello, I'm Aaron!</h2>
          <p>
            After a career in medical research, I decided to apply my love of
            technology and computers towards a post-baccalaureate degree in
            Computer Science. During my education, I fell in love with web and
            web app development and have been spending my time since then
            sharpening my skills in the browser.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
