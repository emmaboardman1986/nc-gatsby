import styled from "styled-components"
import React from "react"

import {
  setSharedSpacing,
  setSharedHeights,
  breakpoint,
} from "../../styles/styleHelpers"

const Hero = ({ children, isBannerDisplayed }) => {
  return <HeroWrapper isBannerDisplayed={isBannerDisplayed}>{children}</HeroWrapper>
}

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 6rem;
  margin-top: ${props => props.isBannerDisplayed ? setSharedHeights.navHeight : setSharedHeights.navHeightNoMessaging};
  padding-top: 10vh;
 
  div:first-child {
    display: none;
    width: 70%;
    height: auto;
    img {
      width: 100%;
      height: auto;
      ${breakpoint.xs`
      width: 70%;
  `}
    }
  }
  ${breakpoint.sm`
  margin-top: ${props => props.isBannerDisplayed ? setSharedHeights.navHeightSm : setSharedHeights.navHeightNoMessaging};
    flex-direction: row;
    div:first-child {
      display: block;
     margin-left: -6rem;
      img {
        width: 90%;
      }
    }
    div:last-child {
      text-align: right;
    }
    `}
  ${breakpoint.md`
    margin-top: 0;
    padding-bottom: 1.5rem;
    div:first-child {
      img {
        width: 75%;
      }
    }
    div:last-child {
      white-space: nowrap;
    }
    `}
    ${breakpoint.lg`
    div:first-child {
      img {
        width: 60%;
      }
    }
    div:last-child {
      margin-right: ${setSharedSpacing.heroRightOffset};
    }
    `}
    @media (min-width: 1400px){
      div:first-child {
      img {
        width: 50%;
      }
    }
    }
    ${breakpoint.xl`
    div:first-child{
     
      width: 45%;
     
    }`}
    
`

export default Hero
