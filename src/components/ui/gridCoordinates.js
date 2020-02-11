import styled from "styled-components"
import React from 'react';
import PropTypes from 'prop-types'


const GridCoordinates = ({colStart, colFinish, rowStart, rowFinish, children}) => {
    return(
        <GridCoordinatesWrapper colStart={colStart} colFinish={colFinish} rowStart={rowStart} rowFinish={rowFinish}>
            {children}
        </GridCoordinatesWrapper>
    )
}

const GridCoordinatesWrapper = styled.div`
  grid-column: ${props => props.colStart} / ${props => props.colFinish};
  grid-row: ${props => props.rowStart} / ${props => props.rowFinish};
`

export default GridCoordinates