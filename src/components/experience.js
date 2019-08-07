import React from "react"

import expStyles from "./experience.module.scss"

const Experience = () => {
  return (
    <section id="experience" className={expStyles.container}>
      <header className={expStyles.header}>
        <h1>Experience & Education</h1>
        <p>
          Below is a brief timeline of my work experience & education. If you'd
          like to see my full resume, please click the link below!
        </p>
        <a
          className={expStyles.btn}
          target="_blank"
          href="https://drive.google.com/file/d/1HYvYP1J4MO_SCEztu_2Fxs-FIRdlS_z1/view?usp=sharing"
        >
          Full Resume
        </a>
      </header>
      <section className={expStyles.timeline}>
        <ul className={expStyles.ul}>
          <li className={expStyles.listLine}>
            <div classname={expStyles.boxes}>
              <h2>University of Houston</h2>
              <small>Exp. Grad Summer 2019</small>
              <p>Bachelor of Science, Computer Science | Dean's List</p>
            </div>
          </li>
          <li className={expStyles.listLine}>
            <div classname={expStyles.boxes}>
              <h2>Spartacus Consulting, Inc.</h2>
              <small>Las Vegas, NV | Oct 2012 - Sep 2015</small>
              <p>
                Worked as a government contractor for the United States Air
                Force conducting medical research with the 99th Medical Division
                at Nellis AFB.
              </p>
            </div>
          </li>
          <li className={expStyles.listLine}>
            <div classname={expStyles.boxes}>
              <h2>New York University</h2>
              <small>Sep 2008 - May 2012</small>
              <p>Bachelor of Arts, Biochemistry | Minor in Mathematics</p>
            </div>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Experience
