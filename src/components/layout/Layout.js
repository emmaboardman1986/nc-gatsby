import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "../header/Header"
import Main from "./Main"
import Footer from "../../components/footer/Footer"
import "../../components/layout.css"
import "../../styles/main.scss"
import { breakpoints } from "../../styles/styleHelpers"
import H1Font from "../../../static/assets/fonts/poppins-bold-webfont.woff2"
import { Helmet } from "react-helmet"
import { BannerContext } from "../../context/UpdateBannerContext"
import UpdateBanner from "../layout/UpdateBanner"

const Layout = ({ children }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)
  const { state, dispatch } = useContext(BannerContext)

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
      <Container>
        <UpdateBanner isBannerDisplayed={state.isBannerDisplayed} />
        <Header
          isBannerDisplayed={state.isBannerDisplayed}
          isMenuExpanded={isMenuExpanded}
          setIsMenuExpanded={setIsMenuExpanded}
        />

        <Main>{children}</Main>
        <Footer></Footer>
      </Container>
    </>
  )
}

const Container = styled.div`
  max-width: ${breakpoints.xl};
  margin-left: auto;
  margin-right: auto;
`
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
