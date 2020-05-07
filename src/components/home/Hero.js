import styled from "styled-components"
import React from "react"

import {
  setSharedSpacing,
  setSharedHeights,
  breakpoint,
} from "../../styles/styleHelpers"

const Hero = ({ children, isBannerDisplayed }) => {
  return (
    <HeroWrapper isBannerDisplayed={isBannerDisplayed}>{children}</HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 6rem;
  margin-top: ${props =>
    props.isBannerDisplayed
      ? setSharedHeights.navHeight
      : setSharedHeights.navHeightNoMessaging};
  padding-top: 4rem;
  div:first-child {
    display: none;
  }
  div:last-child {
    box-sizing: border-box;
    width: 100%;
    padding-left: ${setSharedSpacing.sectionPadding};
  }

 
  ${breakpoint.sm`
  padding-bottom: 7rem;
  margin-top: ${props =>
    props.isBannerDisplayed
      ? setSharedHeights.navHeightSm
      : setSharedHeights.navHeightNoMessaging};
    flex-direction: row;
  
    div:first-child {
      margin-top: -3rem;
      display: block;
      img {
        width: 220px;
      }
    }
    div:last-child {
      padding-right: ${setSharedSpacing.sectionPadding};
      text-align: right;
    }
    `}

    ${breakpoint.md`
    padding-top: 0;
    padding-bottom: 4rem;
    margin-top: ${props =>
    props.isBannerDisplayed
      ? setSharedHeights.navHeightMd
      : setSharedHeights.navHeightNoMessaging};
    div:first-child {
      margin-top: -2rem;
      img {
        width: 240px;
      }
    }
    div:last-child {
      padding-right: ${setSharedSpacing.sectionPadding};
    }
    
    `}
    
`

export default Hero
