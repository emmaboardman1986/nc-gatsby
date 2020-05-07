import styled from "styled-components"
import React from "react"
import { setColor, setFont, setFontSize } from "../../../styles/styleHelpers"
import PropTypes from "prop-types"

const BodyText = ({ children, font, color, align, size }) => {
  return <BodyTextWrapper font={font} color={color} align={align} size={size}>{children}</BodyTextWrapper>
}

const BodyTextWrapper = styled.p`
  font-family: ${props => props.font ? props.font : setFont.fontPrimaryRegular};
  font-size: ${props => props.size ? props.size : "1rem"};
  letter-spacing: 0.01rem;
  line-height: ${props => props.font === setFont.fontSecondary ? "1.2" : "1.4"};
  color: ${props => props.color ? props.color : setColor.brandBlack};
  text-align: ${props => props.align ? props.align : null};
  margin-bottom: 0;
  margin-top: ${props => props.font ? props.font === setFont.fontSecondary ? null : '3px' : null};
`

BodyText.propTypes = {
    font: PropTypes.oneOf([setFont.fontSecondary, setFont.fontPrimaryBold, setFont.fontPrimarySemiBold, setFont.fontPrimaryRegular]),
    color: PropTypes.oneOf([setColor.brandWhite, setColor.brandWhiteOffset, setColor.brandPrimary, setColor.brandBlack]),
    size: PropTypes.oneOf([setFontSize.muted, setFontSize.small, setFontSize.regular, setFontSize.medium])
}

export default BodyText
