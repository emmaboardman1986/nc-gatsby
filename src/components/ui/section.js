import styled from "styled-components"
import React from "react"
import { setColor, setSharedSpacing, breakpoint } from "../../utils/styleHelpers"
import PropTypes from "prop-types"


const Section = styled.section`
padding: ${setSharedSpacing.sectionPadding};
background-color: ${props => props.bgColor};
  ${breakpoint.sm`
  background-image: url(${props => (props.bgImg ? props.bgImg : "none")});
  background-repeat: no-repeat;
  background-position: 50% 20%;
  padding: ${setSharedSpacing.sectionPaddingDesktop};
  `
}
`

Section.propTypes = {
  bgColor: PropTypes.string,
  bgImg: PropTypes.string,
}

Section.defaultProps = {
  bgColor: setColor.brandWhite,
}

export default Section
