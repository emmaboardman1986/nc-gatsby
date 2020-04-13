import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { breakpoint } from "../../utils/styleHelpers"

const Grid = ({ children, pageType }) => {
  return <GridWrapper pageType={pageType}>{children}</GridWrapper>
}

const GridWrapper = styled.div`
  /* grid acts as flexcontainer on smaller screens */
  display: flex;
  flex-direction: column;
  ${breakpoint.md`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(27, 2.5rem);
`}
${breakpoint.lg`
grid-template-rows: repeat(24, 2.5rem);
`}
`

Grid.propTypes = {
  pageTpe: PropTypes.oneOf(["Home", "Aux"]),
}

export default Grid
