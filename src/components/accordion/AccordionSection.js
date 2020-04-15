import React from "react"
import styled from "styled-components"
import AccordionTitle from "./AccordionTitle"
import AccordionContent from "./AccordionContent"
import { setColor } from "../../styles/styleHelpers"

const AccordionSection = ({ title, children, expanded, onClick }) => {
  return (
    <AccordionSectionWrapper expanded={expanded}>
      <AccordionTitle expanded={expanded} onClick={onClick} title={title} />
      {expanded && <AccordionContent>{children}</AccordionContent>}
    </AccordionSectionWrapper>
  )
}

const AccordionSectionWrapper = styled.div`
  background-color: ${props =>
    props.expanded ? setColor.brandPrimary : setColor.brandWhite};
  &:first-of-type {
    border-radius: 3px;
  }
`

export default AccordionSection
