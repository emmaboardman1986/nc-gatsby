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
  margin: 1rem 0;
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
  }

  ${breakpoint.sm`
    flex-direction: row;
    div:first-child {
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
