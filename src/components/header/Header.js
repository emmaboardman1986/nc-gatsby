import styled from "styled-components"
import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import {
  setColor,
  breakpoint,
  setSharedSpacing,
} from "../../styles/styleHelpers"
import Nav from "./Nav"

const Header = ({ isMenuExpanded, setIsMenuExpanded, children }) => {
  const headerLogoEl = useRef()

  useEffect(() => {
    // TODO: configure flow parsing to allow for refactor to useRef()
    // TODO: reconsider this design choice in general 
    if (typeof window !== `undefined`) {
      const currentPage = window.location.href
      const lastChar = currentPage.substr(-1)
      if (headerLogoEl && lastChar == "/") {
        headerLogoEl.current.classList.add("hidden-on-home")
      } else if (headerLogoEl && lastChar !== "/") {
        headerLogoEl.current.classList.remove("hidden-on-home")
      }
    }
  }, [])

  return (
    <HeaderWrapper>
      <HeaderLogo ref={headerLogoEl}>
        <Link to="/">NS</Link>
      </HeaderLogo>
      <Nav
        isMenuExpanded={isMenuExpanded}
        setIsMenuExpanded={setIsMenuExpanded}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${setColor.brandPrimary};
  background-color: ${setColor.brandPrimary};
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 9.5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${breakpoint.sm`
  height: 12vh;`}
  ${breakpoint.md`
  position: relative;
  width: auto;
  padding-right: ${setSharedSpacing.sectionPaddingDesktop};
  background-color: ${setColor.brandPrimary};
`};
`

const HeaderLogo = styled.div`
  &.hidden-on-home {
    visibility: hidden;
  }

  flex: 1;
  img {
    padding-top: 1rem;
  }
  a {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
    color: ${setColor.brandWhite};
    text-decoration: none;
    font-family: "Poppins-SemiBold", sans-serif;
  }
`

export default Header
