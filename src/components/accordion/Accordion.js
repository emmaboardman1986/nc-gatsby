import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { setColor, breakpoint } from "../../styles/styleHelpers"
import AccordionSection from "./AccordionSection"

const Accordion = ({ children }) => {
  const [expandedSections, setExpandedSections] = useState({})
  const [expandAll, setExpandAll] = useState(false)

  useEffect(() => {
    let availableSections = {}
    let reducer = (returnedObject, sectionIndex) => {
      if (!returnedObject[sectionIndex.props.title]) {
        returnedObject[sectionIndex.props.title] = false
      }
      return returnedObject
    }
    children.reduce(reducer, availableSections)
    setExpandedSections(availableSections)
  }, [])

  const handleClick = index => {
    setExpandedSections({
      ...expandedSections,
      [index]: !expandedSections[index],
    })
  }

  const toggleAll = () => {
    let updatedSections = {}
    let reducer = (returnedObject, sectionIndex) => {
      returnedObject[sectionIndex.props.title] = !expandAll
      return returnedObject
    }
    children.reduce(reducer, updatedSections)
    setExpandedSections(updatedSections)
    setExpandAll(!expandAll)
  }

  return (
    <AccordionWrapper>
      <AccordionToggle
        role="switch"
        aria-pressed={expandAll}
        onClick={toggleAll}
        className={expandAll ? "pressed-in" : "popped-out"}
      >
        {expandAll === true ? "Collapse All" : "Expand All"}
      </AccordionToggle>
      <AccordionMain>
        {children.map((child, index) => (
          <AccordionSection
            key={index}
            title={child.props.title}
            onClick={() => handleClick(child.props.title)}
            expanded={expandedSections[child.props.title]}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </AccordionMain>
    </AccordionWrapper>
  )
}

const AccordionWrapper = styled.div`
  width: 100%;
  ${breakpoint.md`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  `}
`
const AccordionMain = styled.div`
  border-radius: 6px;
  border: 2px solid ${setColor.brandPrimary};
  margin: 1rem 0;
`

const AccordionToggle = styled.button`
  border-radius: 3px;
  border: 2px solid ${setColor.brandPrimary};
  box-shadow: 4px 4px 0 0px #172a4e;
  transition: box-shadow .1s ease-in;
  margin-bottom: 0.15rem;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  background-color: ${setColor.brandWhite};
  min-width: 120px;
  &.pressed-in {
    box-shadow: 3px 3px 0 0px #172a4e;
    transform: translate(2px, 10%);
  }
`

export default Accordion
