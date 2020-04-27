import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "../header/Header"
import Main from "./Main"

import Icon from "../../components/icon/Icon"
import Footer from "../../components/footer/Footer"
import "../../components/layout.css"
import "../../styles/main.scss"

import H1Font from "../../../static/assets/fonts/poppins-bold-webfont.woff2"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  if (typeof window !== `undefined`) {
    window.prismic = {
      endpoint: "https://nihongoscotland.cdn.prismic.io/api/v2",
    }
  }

  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="font"
          href={H1Font}
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Header
        isMenuExpanded={isMenuExpanded}
        setIsMenuExpanded={setIsMenuExpanded}
      />

      <Main>{children}</Main>
    <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
