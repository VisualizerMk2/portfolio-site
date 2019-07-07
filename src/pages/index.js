import React from "react"

import Hero from "../components/hero"
import Header from "../components/header"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Footer from "../components/footer"
import Contact from "../components/contact"
import Head from "../components/head"

import "../styles/index.scss"

const HomePage = () => {
  return (
    <div>
      <Head />
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
