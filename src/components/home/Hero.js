import styled from "styled-components"
import React from "react"

import {
  setSharedSpacing,
  setSharedHeights,
  breakpoint,
  setColor,
} from "../../styles/styleHelpers"

const Hero = ({ children }) => {
  return <HeroWrapper>{children}</HeroWrapper>
}

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${setColor.brandWhiteOffset};
  align-items: center;
  justify-content: space-between;
  padding-bottom: 6rem;
  margin-top: ${setSharedHeights.navHeight};
  p {
  font-family: "AnonymousPro-Regular";
  text-rendering: optimizeLegibility;
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: 0.01em;
  }
  div:first-child {
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
  div:last-child {
    text-align: center;
   
    h1 {
      margin-bottom: 0;
    }
  }

  ${breakpoint.sm`
    flex-direction: row;
    div:first-child {
      margin-left: -9rem;
      padding-right: 4rem;
      img {
        width: 80%;
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
      width: 55%;
    }
    div:last-child {
      white-space: nowrap;
    }
    `}
    ${breakpoint.lg`
    div:first-child {
      width: 35%;
      img {
        width: 50%;
      }
    }
    div:last-child {
      margin-right: ${setSharedSpacing.heroRightOffset};
    }
    `}
    ${breakpoint.xl`
    div:first-child{
      width: 25%;
      img {
        /* width: 35%; */
      }
    }`}
    
`

export default Hero
