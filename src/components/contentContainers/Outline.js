import styled from "styled-components"
import React from "react"
import { setColor } from "../../styles/styleHelpers"

const Outline = ({ children, widthMd }) => {
  return <OutlineWrapper widthMd={widthMd}>{children}</OutlineWrapper>
}

const OutlineWrapper = styled.div`
  p {
    font-family: 'Poppins-Regular';
  }
  box-sizing: border-box;
  margin: 1.5rem 0;
  li {
    padding: 0.5rem 0;
    &:last-of-type {
      padding-bottom: 0;
    }
  }
  @media (min-width: 992px) {
    margin: 0;
    width: ${props => props.widthMd ? props.widthMd : '100%'};
  }
  padding: 0.5rem;
  position: relative;
  background: ${setColor.brandBlack};
  border-radius: 20px;
`

export default Outline
