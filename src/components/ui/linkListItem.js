import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const LinkListItem = ({ children }) => {
  return (
    <LinkListItemWrapper>
      {children}
    </LinkListItemWrapper>
  )
}

const LinkListItemWrapper = styled.li`
list-style: none;
`


export default LinkListItem
