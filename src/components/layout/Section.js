import styled from "styled-components"
import React from "react"
import {
  setColor,
  setSharedSpacing,
  breakpoint,
} from "../../styles/styleHelpers"
import PropTypes from "prop-types"

const Section = ({ children, flexDirection, bgColor, noPaddingBottom}) => {
  return (
    <SectionWrapper flexDirection={flexDirection} bgColor={bgColor} noPaddingBottom={noPaddingBottom}>
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
  background-position: 15vw 8vh;
  padding: ${setSharedSpacing.sectionPaddingDesktop};
  `}
  ${breakpoint.md`
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${props => (props.flexDirection ? "flex-start" : null)};
  justify-content: ${props => (props.flexDirection ? "space-between" : null)};`}
`

Section.propTypes = {
  bgColor: PropTypes.string,
  bgImg: PropTypes.string,
}

Section.defaultProps = {
  bgColor: setColor.brandWhite,
}

export default Section
