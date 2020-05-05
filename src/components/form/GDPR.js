import React from "react"
import styled from "styled-components"
import BodyText from "../ui/typography/BodyText"
import {setColor} from "../../styles/styleHelpers"

const GDPR = ({ children, className }) => {
  return <GDPRWrapper className={className}><BodyText size="0.8rem" color={setColor.brandWhite}>{children}</BodyText></GDPRWrapper>
}

const GDPRWrapper = styled.div`
  margin-top: 1rem;
  fieldset {
    border: none;
    display: flex;
  }
`

export default GDPR
