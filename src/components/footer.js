import React from "react"
import { footerBase, artistCredit, copyright } from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerBase}>
      <p className={copyright}>©2019 Aaron Barnett</p>
      <p className={artistCredit}>
        Avatar by{" "}
        <a href="https://twitter.com/EnSomnios" target="_blank">
          @EnSomnios
        </a>{" "}
      </p>
    </footer>
  )
}

export default Footer
