import React from "react"
import styled from "styled-components"
import TimelineBlock from "./TimelineBlock"
import {
  setColor,
  breakpoint,
  setSharedSpacing,
} from "../../styles/styleHelpers"
const Timeline = () => {
  const timelineContent = [
    {
      year: "2020",
      yearContent:
        "Friday Night Study Club moves online! <a href='https://zoom.us/j/169628752' target='_blank'>Join us on Zoom</a> for Japanese Conversation, every Friday between 6pm and 8pm GMT.",
    },
    {
      year: "2019",
      yearContent:
        "Club founder Jess wins the Scottish Samurai Award for her long-standing services to Japan and Scotland",
    },
    {
      year: "2018",
      yearContent:
        "Club founder Jess leaves her job at the Consulate General of Japan to dedicate herself full-time to Japanese language education, and the Japanese-language community in Edinburgh and beyond.",
    },
    {
      year: "2016",
      yearContent:
        "First JLPT Bootcamp takes place, with the support of JETAA Scotland and the University of Edinburgh",
    },
    {
      year: "2014",
      yearContent: "Nihongo Scotland begins!",
    },
  ]
  return (
    <TimelineWrapper>
      <TimelineContainer>
        {timelineContent.map((contentBlock, index) => (
          <TimelineBlock
            year={contentBlock.year}
            content={contentBlock.yearContent}
            key={index}
          />
        ))}
      </TimelineContainer>
    </TimelineWrapper>
  )
}

const TimelineWrapper = styled.div`
  overflow: hidden;
  padding: ${setSharedSpacing.sectionPadding};
`

const TimelineContainer = styled.div`
  a {
    color: ${setColor.brandPrimary};
    &:hover {
      background-color: ${setColor.brandPrimary};
      color: ${setColor.brandWhite};
    }
  }
  position: relative;
  padding: ${setSharedSpacing.sectionPadding};
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 8px;
    border-radius: 4px;
    background: black;
    ${breakpoint.sm`
      left: 50%;
      transform: translateX(-50%);`}
  }
`

export default Timeline
