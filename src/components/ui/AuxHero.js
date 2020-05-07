import React from 'react'
import styled from "styled-components"
import {
  setColor,
  setSharedSpacing,
  breakpoint,
  setSharedHeights
} from "../../styles/styleHelpers"


const AuxHero = ({children, isBannerDisplayed}) => {
  return (
    <AuxHeroWrapper isBannerDisplayed={isBannerDisplayed}>
  {children}
    </AuxHeroWrapper>
  )
}
const AuxHeroWrapper = styled.div`
  padding: ${setSharedSpacing.sectionPadding};
  padding-top: 3rem;
  padding-bottom: 8rem;
  margin-top: ${props => props.isBannerDisplayed ? setSharedHeights.navHeight : setSharedHeights.navHeightNoMessaging};
  ${breakpoint.md`
  padding-top: 4rem;
  margin-top: 0;
  `}
  h1 {
    color: ${setColor.brandWhite};
    font-size: 3.5rem;
    line-height: 4.2rem;
    margin-top: 0.5rem;
  }
`

export default AuxHero
