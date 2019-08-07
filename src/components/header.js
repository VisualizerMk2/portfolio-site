import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <header className={headerStyles.headerBase}>
      <div className={headerStyles.container}>
        <div className={headerStyles.header}>
          <div className={headerStyles.name}>
            <h1>{data.site.siteMetadata.author}</h1>
          </div>
          <nav>
            <ul className={headerStyles.navList}>
              <li>
                <AnchorLink
                  activeClassName={headerStyles.activeNavItem}
                  className={headerStyles.navItem}
                  href="#skills"
                >
                  Skills
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  activeClassName={headerStyles.activeNavItem}
                  className={headerStyles.navItem}
                  href="#experience"
                >
                  Résumé
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  activeClassName={headerStyles.activeNavItem}
                  className={headerStyles.navItem}
                  href="#projects"
                >
                  Projects
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  activeClassName={headerStyles.activeNavItem}
                  className={headerStyles.navItem}
                  href="#contact"
                >
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
