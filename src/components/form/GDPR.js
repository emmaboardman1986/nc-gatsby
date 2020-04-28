import React from "react"
import styled from "styled-components"

const GDPR = ({ children, className }) => {
  return <GDPRWrapper className={className}>{children}</GDPRWrapper>
}

const GDPRWrapper = styled.div`
  margin-top: 1rem;
  p {
    font-size: 0.8rem;
    font-family: "Poppins-Regular";
  }
  
  font-size: 0.6rem;
  font-family: "Poppins-Regular";
  fieldset {
    border: none;
    display: flex;
  }
`

export default GDPR
