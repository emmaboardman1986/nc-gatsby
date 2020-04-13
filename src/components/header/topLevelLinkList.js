import styled from "styled-components"
import React from "react"
import { setColor, breakpoint } from "../../utils/styleHelpers"

const TopLevelLinkList = ({ isMenuExpanded, children }) => {
  return (
    <TopLevelLinkListWrapper isMenuExpanded={isMenuExpanded}>
      {children}
    </TopLevelLinkListWrapper>
  )
}

const TopLevelLinkListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  height: 92vh;
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  overflow: auto;
  transition: 0.5s;
  padding-left: 0;
  margin-bottom: 0;
  width: 85vw;
  align-items: center;
  border-top-left-radius: 20px;
  transform: ${props =>
    props.isMenuExpanded ? "translateX(0)" : "translateX(100%)"};
 
  ${breakpoint.xs`
        width: 60vw;
  `}
  ${breakpoint.sm`
    display: flex;
    transform: translateX(0);
    background-color: ${setColor.brandPrimary};
    flex-direction: row;
    position: relative;
    justify-content: space-between;
    height: 100%;
    overflow: visible;
    transition: none;
    width: initial;
  `}
`

export default TopLevelLinkList
