import styled from "styled-components"
import React, { useState } from "react"
import TopLevelLinkListItem from "./topLevelLinkListItem"
import { Link } from "gatsby"
import {
  setColor,
  breakpoint,
  setSharedHeights,
  setSharedSpacing,
} from "../../utils/styleHelpers"
import BurgerButton from "./burgerButton"
import TopLevelLinkList from "./topLevelLinkList"

const Nav = ({ isMenuExpanded, setIsMenuExpanded }) => {
  return (
    <NavWrapper>
      <BurgerButton isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} />
      <TopLevelLinkList isMenuExpanded={isMenuExpanded}>
        <TopLevelLinkListItem isMenuExpanded={isMenuExpanded}>
          <Link to="/about-us">About Us</Link>
        </TopLevelLinkListItem>
        <TopLevelLinkListItem isMenuExpanded={isMenuExpanded}>
          <Link to="/jlpt-bootcamp">JLPT Bootcamp</Link>
        </TopLevelLinkListItem>
        <TopLevelLinkListItem isMenuExpanded={isMenuExpanded}>
          <Link to="/beginners-bootcamp">Beginner's Bootcamp</Link>
        </TopLevelLinkListItem>
        <TopLevelLinkListItem isMenuExpanded={isMenuExpanded}>
          <Link to="/friday-study-club">Friday Study Club</Link>
        </TopLevelLinkListItem>
        <TopLevelLinkListItem isMenuExpanded={isMenuExpanded}>
          <Link to="/friday-study-club">日本語</Link>
        </TopLevelLinkListItem>
      </TopLevelLinkList>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background-color: ${setColor.brandPrimary};
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: ${setSharedHeights.navHeight};
  top: 0;
  right: 0;
 
  ${breakpoint.sm`
  background-color: transparent;
  width: initial;
  height: initial;
  position: relative;
  flex: 1;
    `}
  ${breakpoint.lg`
      margin-right: ${setSharedSpacing.heroRightOffset};
      `}
`

export default Nav
