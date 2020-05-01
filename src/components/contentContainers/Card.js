import styled from "styled-components"
import React from "react"
import { setColor, breakpoint } from "../../styles/styleHelpers"

const Card = ({ children, bgColor, color, doublePaddingBottom }) => {
  return <CardWrapper bgColor={bgColor} color={color} doublePaddingBottom={doublePaddingBottom}>{children}</CardWrapper>
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  padding-left: 1.5rem;
  border-radius: 10px;
  position: relative;
  background: ${props => (props.bgColor ? props.bgColor : setColor.brandWhite)};
  color: ${props => (props.color ? props.color : setColor.brandBlack)};

  h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
  }
  p {
    &:not(:last-of-type) {
      margin-bottom: 1rem;
     
    }

  }
  ${breakpoint.md`
  padding-bottom: ${props => props.doublePaddingBottom ? "3rem" : null}`}
`

export default Card
