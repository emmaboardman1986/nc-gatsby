import styled from "styled-components"
import React from "react"
import { Link} from "gatsby";
import { setColor, breakpoint, setSharedSpacing} from "../../styles/styleHelpers"
import Nav from "./nav"


const Header = ({ isMenuExpanded, setIsMenuExpanded, isSubMenuExpanded, setIsSubMenuExpanded, children }) => {
  return (
    <HeaderWrapper>
      <HeaderLogo><Link to="/">NS</Link></HeaderLogo>
      <Nav isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} isSubMenuExpanded={isSubMenuExpanded} setIsSubMenuExpanded={setIsSubMenuExpanded}/>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${setColor.brandPrimary};
  ${breakpoint.md`
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
