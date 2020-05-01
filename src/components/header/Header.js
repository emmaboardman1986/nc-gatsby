import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"
import {
  setColor,
  breakpoint,
  setSharedSpacing,
} from "../../styles/styleHelpers"
import Nav from "./Nav"
import LogoHeader from "../../../static/assets/logo__header.svg"

const Header = ({ isMenuExpanded, setIsMenuExpanded, children }) => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link to="/">
          <img src={LogoHeader}></img>
         </Link>
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
img {
  /* width: 20px; */
  height: 26px;
  /* padding-top: 0.5rem; */
  padding-left: 1rem;
}
  
  flex: 1;
  /* img {
    padding-top: 1rem;
  } */

  a {
    color: ${setColor.brandWhite};
    text-decoration: none;
  }
`

export default Header
