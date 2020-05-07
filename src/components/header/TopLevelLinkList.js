import styled from "styled-components"
import React, { useContext }  from "react"
import { setColor, breakpoint } from "../../styles/styleHelpers"
import { BannerContext } from "../../context/UpdateBannerContext"

const TopLevelLinkList = ({ isMenuExpanded, children }) => {
  const { state } =  useContext(BannerContext);
  return (
    <TopLevelLinkListWrapper isMenuExpanded={isMenuExpanded} isBannerDisplayed={state.isBannerDisplayed}>
      {children}
    </TopLevelLinkListWrapper>
  )
}

const TopLevelLinkListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  height: ${props => props.isBannerDisplayed ? "73vh" : "90vh"};
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  overflow: auto;
  padding-left: 0;
  margin-bottom: 0;
  width: 85vw;
  align-items: center;
  border-top-left-radius: 20px;
  transition: 0.5s;
  transform: ${props =>
    props.isMenuExpanded ? "translateX(0)" : "translateX(100%)"};
  ${breakpoint.xs`
        width: 60vw;
  `}
  ${breakpoint.sm`
  height: ${props => props.isBannerDisplayed ? "76vh" : "90vh"};
  width: 40vw;`}
  ${breakpoint.md`
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
