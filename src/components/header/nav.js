import styled from "styled-components"
import React, { useState } from "react"
import TopLevelLinkListItem from "./topLevelLinkListItem"
import SubMenuLinkListItem from "./subMenuLinkListItem"
import SubMenuLinkList from "./subMenuLinkList"
import { Link } from "gatsby"
import {
  setColor,
  breakpoint,
  setSharedHeights,
  setSharedSpacing,
} from "../../utils/styleHelpers"
import BurgerButton from "./burgerButton"
import TopLevelLinkList from "./topLevelLinkList"

const Nav = ({ isMenuExpanded, setIsMenuExpanded}) => {
  
  // const handleMenuButtonClick = () => {
  //   const navButton = document.querySelector("nav button")

  //   const burgerLines = document.querySelectorAll('nav button span');
  //   console.log(burgerLines);
  //   for (let burgerLine of burgerLines) {
  //     console.log(burgerLine.classList);
  //     burgerLine.classList.add = 'open';
  //   }

  //   let expanded = navButton.getAttribute("aria-expanded") === "true"
  //   navButton.setAttribute("aria-expanded", !expanded)
  // }

  return (
    <NavWrapper>
      <BurgerButton isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} />
      <TopLevelLinkList isMenuExpanded={isMenuExpanded}>
        <TopLevelLinkListItem>
          <Link to="/about-us">About Us</Link>
        </TopLevelLinkListItem>
        <TopLevelLinkListItem hasSubMenu="true">
          <Link to="#">Bootcamps</Link>
          <SubMenuLinkList >
            <SubMenuLinkListItem>
              <Link to="/jlpt-bootcamp">
                JLPT Bootcamp
              </Link>
            </SubMenuLinkListItem>
            <SubMenuLinkListItem>
              <Link to="/jlpt-bootcamp">
                Beginner's Bootcamp
              </Link>
            </SubMenuLinkListItem>
          </SubMenuLinkList>
        </TopLevelLinkListItem>
        <TopLevelLinkListItem>
          <Link to="/friday-study-club">Friday Study Club</Link>
        </TopLevelLinkListItem>
        <TopLevelLinkListItem>
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