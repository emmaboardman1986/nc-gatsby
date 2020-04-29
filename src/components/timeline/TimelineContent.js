import React from "react"
import styled from "styled-components"
import TimelineDate from "./TimelineDate"
import Card from "../contentContainers/Card"
import Outline from "../contentContainers/Outline"
import { breakpoint } from "../../styles/styleHelpers"

const TimelineContent = ({ year, content }) => {


  function createMarkup(content) {
    return { __html: content }
  }

  return (
    <TimelineContentWrapper>
      {/* <Outline> */}
        <Card>
          <TimelineDate>{year}</TimelineDate>
          <p dangerouslySetInnerHTML={createMarkup(content)}></p>
        </Card>
      {/* </Outline> */}
    </TimelineContentWrapper>
  )
}

const TimelineContentWrapper = styled.div`
  flex-grow: 1;
  ${breakpoint.sm`
  flex-grow: 0;
  width: 45%;
  `}
`

export default TimelineContent
