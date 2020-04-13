import styled from "styled-components"
import React from "react"
import { setColor, breakpoint } from "../../utils/styleHelpers"

const SubMenuLinkList = ({ hasSubMenu, children }) => {
  return (
    <SubMenuLinkListWrapper hasSubMenu={hasSubMenu}>
      {children}
    </SubMenuLinkListWrapper>
  )
}

const SubMenuLinkListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  ${breakpoint.sm`
  position: absolute;
  right: 0;
  padding: 0;
  list-style: none;
  height: 1px;
  width: 1px;
  overflow: hidden;
  `}
`

export default SubMenuLinkList
