import styled from "styled-components"
import React from "react"
import LinkListItem from "../ui/linkListItem"
import { Link } from "gatsby"
import { setColor, breakpoint, setSharedHeights, setSharedSpacing } from "../../utils/styleHelpers"

const Nav = ({}) => {
  const handleMenuButtonClick = () => {
    const navButton = document.querySelector("nav button")
    let expanded = navButton.getAttribute("aria-expanded") === "true"
    navButton.setAttribute("aria-expanded", !expanded)
  }

  return (
    <NavWrapper>
      <button aria-expanded="false" onClick={handleMenuButtonClick}>
        X
      </button>
      <ul>
        <LinkListItem>
          <Link to="/about-us">About Us</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to="/jlpt-bootcamp">JLPT Bootcamp</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to="/jlpt-bootcamp">Beginner's Bootcamp</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to="/friday-study-club">Friday Study Club</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to="/friday-study-club">日本語</Link>
        </LinkListItem>
      </ul>
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
  button[aria-expanded="false"] + ul {
    transform: translateX(100%);
  }
  button[aria-expanded="true"] + ul {
    transform: translateX(0);
  }
  button {
    background-color: transparent;
    color: white;
    display: flex;
    font-size: 1.5rem;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    height: ${setSharedHeights.navHeight};
    border: 0;
    width: 20vw;
  }
  ul {
    display: flex;
    flex-direction: column;
    height: 92vh;
    position: fixed;
    z-index: 1;
    bottom: 0;
    right: 0;
    overflow-x: hidden;
    transition: 0.5s;
    padding-left: 0;
    margin-bottom: 0;
    width: 85vw;
    align-items: center;
    border-top-left-radius: 20px;
    li {
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem 4rem;
      a {
        color: ${setColor.brandGreyDark};
        font-size: 1.2rem;
      }
    }
    li:nth-of-type(1) {
      background-color: ${setColor.gradientCyanLight};
    }
    li:nth-of-type(2) {
      background-color: ${setColor.gradientGreenLight};
    }
    li:nth-of-type(3) {
      background-color: ${setColor.gradientYellowLight};
    }
    li:nth-of-type(4) {
      background-color: ${setColor.gradientOrange};
    }
    li:nth-of-type(5) {
      background-color: ${setColor.gradientRed};
    }
  }
  a {
    text-decoration: none;
    font-family: "Poppins-Medium";
  }
  ${breakpoint.xs`
    ul {
        width: 60vw;
    }
  `}
  ${breakpoint.sm`
  background-color: transparent;
  width: initial;
  height: initial;
  position: relative;
  flex: 1;
  button {
      display: none;
  }
  button[aria-expanded=false] + ul, 
  ul {
    display: flex;
    transform: translateX(0);
    background-color: ${setColor.brandPrimary};
    flex-direction: row;
    position: relative;
    justify-content: space-between;
    height: initial;
    transition: none;
    width: initial;
    li {
        padding: initial;
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: flex-end;
        margin-left: 2rem;
        a {
            white-space: nowrap;
            color: ${setColor.brandWhite};
            font-size: 1.1rem;
            border-bottom: 2px solid ${setColor.brandPrimary};
            padding-bottom: 0.25rem;
                &:hover {
                border-bottom: 2px solid white;
                }
            }
        }
        li:nth-of-type(1),
        li:nth-of-type(2),
        li:nth-of-type(3),
        li:nth-of-type(4),
        li:nth-of-type(5)
        {
            background-color: ${setColor.brandPrimary};
        }
    }
      
    `}
    ${breakpoint.lg`
      margin-right: ${setSharedSpacing.heroRightOffset};
      `}
`
   


const NavLogo = styled.div``

export default Nav
