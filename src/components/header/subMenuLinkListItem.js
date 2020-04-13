import styled from "styled-components"
import React from "react"
import { setColor, breakpoint } from "../../utils/styleHelpers"

const SubMenuLinkListItem = ({ hasSubMenu, children }) => {
  return (
    <SubMenuLinkListItemWrapper hasSubMenu={hasSubMenu}>
      {children}
    </SubMenuLinkListItemWrapper>
  )
}

const SubMenuLinkListItemWrapper = styled.li`
  list-style: none;
  background-color: ${setColor.brandWhite};
  padding: 1rem;
  padding-left: 0.5rem;
  a {
      color: ${setColor.brandPrimary};
  }
`

export default SubMenuLinkListItem
