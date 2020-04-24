import React from "react"
import styled from "styled-components"
import TimelineDate from "./TimelineDate"
import Card from "../contentContainers/Card"
import Outline from "../contentContainers/Outline"
import { breakpoint } from "../../styles/styleHelpers"

const TimelineContent = () => {
  return (
    <TimelineContentWrapper>
      
        <Card>
          <TimelineDate>2014</TimelineDate>
          <p >
            Nihongo Scotland began in the early Summer of 2014. JET Programme
            Alumni Jess Brown had been organising and participating in Japanese
            lessons for the JETAA Community for a number of years and felt that
            speaking Japanese once a week for a couple of hours was not
            conducive to good progress. She also found herself regularly
            hurriedly completing homework assignments just minutes before her
            class, thereby still condensing her Japanese practice into only one
            day. The other students in the class admitted to the same.
          </p>
        </Card>
      
    </TimelineContentWrapper>
  )
}

const TimelineContentWrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  p {
    text-align: left;
  }
  ${breakpoint.xs`
  flex-direction: row;
  p {
      padding-left: 2rem;
      margin-top: .5rem;
  }
  `}
  ${breakpoint.sm`
  width: 45%;
  
  `}
`

export default TimelineContent
