import styled from "styled-components"
import React from "react"
import { setColor, breakpoint, setSharedSpacing} from "../../utils/styleHelpers"
import Nav from "./nav"

const Header = ({ isMenuExpanded, setIsMenuExpanded, children }) => {
  return (
    <HeaderWrapper>
      <HeaderLogo></HeaderLogo>
      <Nav isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded}/>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${setColor.brandPrimary};
  ${breakpoint.sm`
  display: flex;
  justify-content: space-between;
  padding-right: ${setSharedSpacing.sectionPaddingDesktop};
  align-items: center;
  background-color: ${setColor.brandPrimary};
`}
 `

const HeaderLogo = styled.div`
  flex: 1;
`

export default Header
