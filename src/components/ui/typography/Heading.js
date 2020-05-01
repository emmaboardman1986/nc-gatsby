import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { setColor, setFont } from "../../../styles/styleHelpers"

const Heading = ({ variant, text, color }) => {
  // const H = variant

  return <HeadingWrapper as={variant} color={color}>{text}</HeadingWrapper>
}

const H1Styles = css`
  font-family: ${setFont.fontPrimaryBold};
  font-size: 4.5rem;
  line-height: 1;
  letter-spacing: 0.01em;
  color: ${props => props.color ? props.color : setColor.brandWhiteOffset};
`

const H2Styles = css`
  font-family: ${setFont.fontPrimaryBold};
  font-size: 2.2rem;
  line-height: 1.2;
  color: ${props => props.color ? props.color : setColor.brandPrimary};
`

export const H3Styles = css`
  font-family: ${setFont.fontPrimarySemiBold};
  font-size: 1.2rem;
  line-height: 1.3;
  text-transform: uppercase;
`


const HeadingWrapper = styled.div`
  text-rendering: optimizeLegibility;
  ${props => props.as === "h1" && H1Styles};
  ${props => props.as === "h2" && H2Styles};
  ${props => props.as === "h3" && H3Styles};
`

Heading.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"])
    .isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf([setColor.brandBlack, setColor.brandWhiteOffset, setColor.brandWhite, setColor.brandPrimary])
}

Heading.defaultProps = {
  variant: "h1",
  text: "Placeholder Title",
}

export default Heading
