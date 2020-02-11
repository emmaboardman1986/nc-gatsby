import styled from "styled-components"
import React from 'react';
import PropTypes from 'prop-types'


const Grid= ({children}) => {
    return(
        <GridWrapper>
            {children}
        </GridWrapper>
    )
}

const GridWrapper = styled.div`
display: block;
margin-top: -20%;
@media (min-width: 576px){
    margin-top: 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
}
`

export default Grid