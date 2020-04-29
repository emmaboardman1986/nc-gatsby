import styled from "styled-components"
import React from "react"
import { setColor, breakpoint } from "../../styles/styleHelpers"
import PropTypes from "prop-types"

const Outline = ({
  children,
  widthMd,
  outlineSize,
  color,
  font,
  orderDesktop,
}) => {
  return (
    <OutlineWrapper
      widthMd={widthMd}
      outlineSize={outlineSize}
      color={color}
      font={font}
      orderDesktop={orderDesktop}
    >
      {children}
    </OutlineWrapper>
  )
}

const OutlineWrapper = styled.div`
  p {
    font-family: ${props => (props.font ? props.font : "Poppins-Regular")};
  }
  box-sizing: border-box;
  margin: 1.5rem 0;
  li {
    padding: 0.5rem 0;
    &:last-of-type {
      padding-bottom: 0;
    }
  }
  
  ${breakpoint.md`
  order: ${props => (props.orderDesktop ? props.orderDesktop : null)};
  margin: 0;
    width: ${props => (props.widthMd ? props.widthMd : "100%")};
  `}
    
  padding: ${props => props.outlineSize};
  position: relative;
  background: ${props => (props.color ? props.color : setColor.brandBlack)};
  border-radius: 20px;
`
Outline.propTypes = {
  outlineSize: PropTypes.oneOf(["0.5rem", "1rem"]).isRequired,
  color: PropTypes.oneOf([setColor.brandPrimary, setColor.brandBlack]),
}

Outline.defaultProps = {
  outlineSize: "1rem",
}

export default Outline
