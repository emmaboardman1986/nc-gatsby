import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./ui/header"
import NCLogoSm from "../../static/assets/logoNCsm.svg"
import "./layout.css"

const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

  return (
    <>
      <Header/>
      
        <main>{children}</main>
        <footer>
        <div class="footer__logo">
        <img src={NCLogoSm} alt="Nihongo Connection" style={{width: `200px`}}></img>
        </div>
        <div class="footer__info">
        <p>Nihongo Scotland is a part of <a href="https://nihongoconnection.com" target="_blank">Nihongo Connection</a>.
         Check out <a href="https://nihongoconnection.com" target="_blank">NihongoConnection.com</a> for more Japanese learning opportunities and
          resources.</p>
          © {new Date().getFullYear()} Nihongo Connection
          </div>
        </footer>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout