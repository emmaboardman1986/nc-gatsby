import React from "react"
import Icon from "../icon/Icon"
import styled from "styled-components"
import { setFlex, setColor, breakpoint } from "../../styles/styleHelpers"

const TimelineImage = ({ icon }) => {
  return (
    <TimelineImageWrapper>
      <IconWrapper data-icon>
        <Icon icon={icon} color={setColor.brandWhite} fill={setColor.brandWhite}/>
      </IconWrapper>
    </TimelineImageWrapper>
  )
}

const TimelineImageWrapper = styled.div`
    ${setFlex};
    z-index: 1;
  ${breakpoint.md`
    order: 1;`}
`

const IconWrapper = styled.div`
  padding: 0.5rem;
  border-radius: 50%;
  border: 3px solid ${setColor.brandPrimaryMedium} ;
  background-color: ${setColor.brandPrimary};
  margin-left: calc(-0.5rem - 3px);
`

export default TimelineImage
