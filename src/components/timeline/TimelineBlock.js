import React from "react"
import styled, { css } from "styled-components"
import TimelineContent from "./TimelineContent"
import TimelineImage from "./TimelineImage"
import FlexContainer from "../layout/FlexContainer/FlexContainer"
import { setColor, breakpoint } from "../../styles/styleHelpers"
import Gradient from "../contentContainers/Gradient"
import Card from "../contentContainers/Card"

const TimelineBlock = () => {
  return (
    <TimelineWrapper>
      <TimelineImage icon="star"></TimelineImage>
      <TimelineContent></TimelineContent>
    </TimelineWrapper>
  )
}

const TimelineWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1.5rem;
  &:before {
    content: "";
    position: absolute;
    top: 0.15rem;
    left: 0.5rem;
    height: 100%;
    width: 0.5rem;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    background: ${setColor.brandBlack};
  }
  ${breakpoint.xs`
  padding-left: 1rem;
  &:before {
    left: 1.5rem;
  }`}
  ${breakpoint.sm`
  &:before {
    left: 50%;
  }
  `}

`

export default TimelineBlock
