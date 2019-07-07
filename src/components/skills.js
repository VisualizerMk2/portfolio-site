import React from "react"
import skillsStyles from "./skills.module.scss"
import looksIcon from "../img/looks.png"
import logicIcon from "../img/logic.png"
import techIcon from "../img/cog.png"

const Skills = () => {
  return (
    <section id="skills" className={skillsStyles.skillsBase}>
      <div className={skillsStyles.header}>
        <h1>Skills</h1>
        <p>
          My CS education utilized mostly C++ and a little Python. Since I began
          focusing on web dev, most of my skills are in JavaScript libraries and
          frameworks - for both front and back-end. Functions as first class
          objects <em>is</em> pretty handy!
        </p>
      </div>
      <div className={skillsStyles.skills}>
        <div className={skillsStyles.card}>
          <div className={skillsStyles.cardContainer}>
            <figure className={skillsStyles.figure}>
              <img src={looksIcon} alt="Looks Icon" />
            </figure>
            <h2>Looks</h2>
            <ul className={skillsStyles.skillsList}>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SCSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className={skillsStyles.card}>
          <div className={skillsStyles.cardContainer}>
            <figure className={skillsStyles.figure}>
              <img src={logicIcon} alt="Looks Icon" />
            </figure>
            <h2>Logic</h2>
            <ul className={skillsStyles.skillsList}>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>C++</li>
            </ul>
          </div>
        </div>
        <div className={skillsStyles.card}>
          <div className={skillsStyles.cardContainer}>
            <figure className={skillsStyles.figure}>
              <img src={techIcon} alt="Looks Icon" />
            </figure>
            <h2>Technologies + Frameworks</h2>
            <ul className={skillsStyles.skillsList}>
              <li>React</li>
              <li>Redux</li>
              <li>MongoDB</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>NestJS</li>
              <li>D3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
