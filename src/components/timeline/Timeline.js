import React from "react"
import styled from "styled-components"
import TimelineBlock from "./TimelineBlock"
import { setColor, breakpoint } from "../../styles/styleHelpers"
const Timeline = () => {
  return (
    <TimelineWrapper>
      <TimelineBlock />
      <TimelineBlock />
      <TimelineBlock />
      <TimelineBlock />
    </TimelineWrapper>
  )
}

const TimelineWrapper = styled.div`
  position: relative;
  > div:nth-child(even) {
    ${breakpoint.sm`
    flex-direction: row-reverse;
    margin-right: 2.5rem;`}
  }
  > div:nth-child(odd) {
    ${breakpoint.sm`
      margin-left: 2.5rem;`}
  }
  > div:nth-child(odd) > div:last-child {
    ${breakpoint.sm`
    flex-direction: row-reverse;
    p {
        text-align: right;
        padding-right: 2rem;
    }
    `}
  }
`

export default Timeline
