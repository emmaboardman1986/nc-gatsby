import styled from "styled-components"
import React from "react"
import {
  setColor,
  setSharedSpacing,
  breakpoint,
} from "../../styles/styleHelpers"
import PropTypes from "prop-types"

const Section = ({ children, flexDirection, bgColor, bgImg, noPaddingBottom}) => {
  return (
    <SectionWrapper flexDirection={flexDirection} bgColor={bgColor} noPaddingBottom={noPaddingBottom} bgImg={bgImg}>
      {children}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  padding: ${setSharedSpacing.sectionPadding};
  padding-bottom: ${props => props.noPaddingBottom ? "0" : null };
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  ${breakpoint.sm`
  background-image: url(${props => (props.bgImg ? props.bgImg : "none")});
  background-repeat: no-repeat;
  background-size: 150% auto;
  background-position: 10vw 12vh;
  padding: ${setSharedSpacing.sectionPaddingDesktop};
  padding-bottom: ${props => props.noPaddingBottom ? "0" : null };
  `}
  ${breakpoint.md`
  background-position: 15vw 8vh;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${props => (props.flexDirection ? "flex-start" : null)};
  justify-content: ${props => (props.flexDirection ? "space-between" : null)};
  padding-bottom: ${setSharedSpacing.sectionPaddingDesktop};
  `}
 
  
`

Section.propTypes = {
  bgColor: PropTypes.string,
  bgImg: PropTypes.string,
}

Section.defaultProps = {
  bgColor: setColor.brandWhite,
}

export default Section
