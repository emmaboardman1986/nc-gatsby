import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
// import "../../styles/main.scss";

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
  padding-bottom: rem(16);
  margin-top: ${setSharedHeights.navHeight};
  p {
  font-family: "AnonymousPro-Regular";
  text-rendering: optimizeLegibility;
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: 0.01em;
  }
  div:first-child {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: auto;
    width: 70%;
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
    flex-direction: column;
    justify-content: center;
    h1 {
      margin-bottom: 0;
    }
  }

  ${breakpoint.sm`
    margin-top: 0;
    flex-direction: row;
    div:first-child {
      width: 100%;
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
    }
    div:last-child {
      margin-right: ${setSharedSpacing.heroRightOffset};
    }
    `}
    
`

export default Hero
