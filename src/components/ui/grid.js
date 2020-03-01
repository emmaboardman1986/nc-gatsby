import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { breakpoint } from "../../utils/styleHelpers"

const Grid = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>
}

const GridWrapper = styled.div`
  /* grid acts as flexcontainer on smaller screens */
  display: flex;
  flex-direction: column;
  margin-top: -6.5rem;
  ${breakpoint.sm`
margin-top: -8rem;`}
  ${breakpoint.md`
margin-top: -0.5rem;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(27, 2.5rem);
`}
${breakpoint.lg`
grid-template-rows: repeat(24, 2.5rem);
`}
`

export default Grid
