import styled from "styled-components"
import React from 'react';


const GridCoordinates = ({colStart, colFinish, rowStart, rowFinish, mobileOrder, children}) => {
    return(
        <GridCoordinatesWrapper colStart={colStart} colFinish={colFinish} rowStart={rowStart} rowFinish={rowFinish} mobileOrder={mobileOrder}>
            {children}
        </GridCoordinatesWrapper>
    )
}

const GridCoordinatesWrapper = styled.div`
  grid-column: ${props => props.colStart} / ${props => props.colFinish};
  grid-row: ${props => props.rowStart} / ${props => props.rowFinish};
  position: relative;
  order: ${props => props.mobileOrder} ;
`

export default GridCoordinates