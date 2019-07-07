import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"

import { header, container } from "./404.module.scss"

const NotFound = () => {
  return (
    <div className={container}>
      <Head title="404" />
      <h1 className={header}>Uh oh...</h1>
      <p>
        We couldn't find that page. You can head back to the home page{" "}
        <Link to="/">Here</Link>
      </p>
    </div>
  )
}

export default NotFound
