import React from "react"
import styled from "styled-components"
import AccordionTitle from "./AccordionTitle"
import AccordionContent from "./AccordionContent"


const AccordionSection = ({ title, children, expanded, onClick }) => {
  return (
    <AccordionSectionWrapper>
      <AccordionTitle expanded={expanded} onClick={onClick} title={title} />
      {expanded && <AccordionContent>{children}</AccordionContent>}
    </AccordionSectionWrapper>
  )
}

const AccordionSectionWrapper = styled.div``

export default AccordionSection
