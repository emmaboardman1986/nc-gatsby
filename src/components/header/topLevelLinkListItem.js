import styled from "styled-components"
import React, { useRef } from "react"
import { setColor, breakpoint } from "../../styles/styleHelpers"

const TopLevelLinkListItem = ({ children, isMenuExpanded }) => {
  const topLevelLinkItemEl = useRef()
  if (!isMenuExpanded) {
    setTimeout(function() {
      topLevelLinkItemEl.current.classList.add("hidden-on-mobile")
    }, 500)
  } else {
    topLevelLinkItemEl.current.classList.remove("hidden-on-mobile");
  }
  return (
    <TopLevelLinkListItemWrapper
      isMenuExpanded={isMenuExpanded}
      ref={topLevelLinkItemEl}
    >
      {children}
    </TopLevelLinkListItemWrapper>
  )
}

const TopLevelLinkListItemWrapper = styled.li`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
  &.hidden-on-mobile {
    display: none;
    ${breakpoint.md`
    display: flex;`}
  }
  a {
    color: ${setColor.brandGreyDark};
    font-size: 1.2rem;
    text-decoration: none;
    font-family: "Poppins-Medium";
  }
  &:nth-of-type(1) {
    background-color: ${setColor.gradientCyanLight};
  }
  &:nth-of-type(2) {
    background-color: ${setColor.gradientGreenLight};
  }
  &:nth-of-type(3) {
    background-color: ${setColor.gradientYellowLight};
  }
  &:nth-of-type(4) {
    background-color: ${setColor.gradientOrange};
  }
  &:nth-of-type(5) {
    background-color: ${setColor.gradientRed};
  }

  ${breakpoint.md`
        padding: initial;
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: flex-end;
        margin-left: 2rem;
        position: relative;
        a {
            white-space: nowrap;
            color: ${setColor.brandWhite};
            font-size: 1.1rem;
            border-bottom: 2px solid ${setColor.brandPrimary};
            padding-bottom: 0.25rem;
                &:hover {
                border-bottom: 2px solid white;
                }
            }
        :nth-of-type(1),
        :nth-of-type(2),
        :nth-of-type(3),
        :nth-of-type(4),
        :nth-of-type(5)
        {
            background-color: ${setColor.brandPrimary};
        }
    `}
`

export default TopLevelLinkListItem
