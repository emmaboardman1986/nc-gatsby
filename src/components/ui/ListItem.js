import React from "react"
import styled from "styled-components"

const ListItem = ({ children, flex }) => {
  return <ListItemWrapper flex={flex}>{children}</ListItemWrapper>
}

const ListItemWrapper = styled.li`
  display: ${props => (props.flex ? "flex" : null)};
  &:not(:last-of-type){
  margin-bottom: 0.5rem;
  }
  width: 100%;
`

export default ListItem
