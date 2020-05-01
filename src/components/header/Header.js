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
          <img src={LogoHeader} alt="Nihongo Scotland"></img>
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
  position: fixed;
  z-index: 2;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
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
/* Compensate for bottom spacing on SVG */
padding-top: 3.5px;
  img {
    height: 26px;
    padding-left: 1rem;
  }
  ${breakpoint.md`
  padding-top: 0px;`}

  flex: 1;
`

export default Header
