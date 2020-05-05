import styled from "styled-components"
import React from "react"
import { setColor, setFont } from "../../../styles/styleHelpers"
import PropTypes from "prop-types"

const BodyText = ({ children, font, color, align, size }) => {
  return <BodyTextWrapper font={font} color={color} align={align} size={size}>{children}</BodyTextWrapper>
}

const BodyTextWrapper = styled.p`
  font-family: ${props => props.font ? props.font : setFont.fontPrimaryRegular};
  font-size: ${props => props.size ? props.size : "1.1rem"};
  letter-spacing: 0.01rem;
  line-height: ${props => props.font === setFont.fontSecondary ? "1.2" : "1.4"};
  color: ${props => props.color ? props.color : setColor.brandBlack};
  text-align: ${props => props.align ? props.align : null};
  margin-bottom: 0;
`

BodyText.propTypes = {
    font: PropTypes.oneOf([setFont.fontSecondary, setFont.fontPrimaryBold, setFont.fontPrimarySemiBold, setFont.fontPrimaryRegular]),
    color: PropTypes.oneOf([setColor.brandWhite, setColor.brandWhiteOffset, setColor.brandPrimary, setColor.brandBlack]),
    // size: PropTypes.oneOf([])
}

export default BodyText
