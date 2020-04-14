import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { breakpoint } from "../../styles/styleHelpers"

const Grid = ({
  children,
  gridColNumber,
  gridColUnit,
  gridRowNumber,
  gridRowUnit,
}) => {
  return (
    <GridWrapper gridColNumber={gridColNumber} gridRowNumber={gridRowNumber} gridColUnit={gridColUnit} gridRowUnit={gridRowUnit}>
      {children}
    </GridWrapper>
  )
}

const GridWrapper = styled.div`
  /* grid acts as flexcontainer on smaller screens */
  display: flex;
  flex-direction: column;
  ${breakpoint.md`
    display: grid;
    grid-template-columns: repeat(${props => props.gridColNumber}, ${props =>
    props.gridColUnit});
    grid-template-rows: repeat(${props => props.gridRowNumber}, ${props =>
    props.gridRowUnit});
`}
`

Grid.propTypes = {
  gridColNumber: PropTypes.number.isRequired,
  gridColUnit: PropTypes.string,
  gridRowNumber: PropTypes.number.isRequired,
  gridRowUnit: PropTypes.string,
}

Grid.defaultProps = {
  gridRowNumber: "1fr",
  gridColNumber: "1fr",
}

export default Grid
