import styled from "styled-components"
import React, { useState } from "react"
import { setColor, breakpoint } from "../../utils/styleHelpers"

const TopLevelLinkListItem = ({ hasSubMenu, children, isMenuExpanded }) => {
  const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false)

  return (
    <TopLevelLinkListItemWrapper
      isMenuExpanded={isMenuExpanded}
      hasSubMenu={hasSubMenu}
      aria-haspopup={hasSubMenu ? "true" : "false"}
      aria-expanded={hasSubMenu ? isSubMenuExpanded : "false"}
      onClick={
        hasSubMenu ? () => setIsSubMenuExpanded(!isSubMenuExpanded) : undefined
      }
    >
      {children}
    </TopLevelLinkListItemWrapper>
  )
}

const TopLevelLinkListItemWrapper = styled.li`
  display: ${props => !props.isMenuExpanded ? "none" : "flex"};
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
  &[aria-expanded="true"] {
    ul {
        position: absolute;
        top: 2rem;
        right: 0;
        text-align: right;
        height: auto;
        width: auto;
        a {
          color: ${setColor.brandPrimary};
        }
      }
  }
  a {
    color: ${setColor.brandGreyDark};
    font-size: 1.2rem;
    text-decoration: none;
    font-family: "Poppins-Medium";
  }
  > a:after {
    display: ${props => (props.hasSubMenu ? "inline-block" : "none")};
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid ${setColor.brandWhite};
    content: " ";
    margin-left: 0.5rem;
    margin-bottom: 0.11rem;
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

  ${breakpoint.sm`
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
