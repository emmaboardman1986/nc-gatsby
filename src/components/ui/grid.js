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
display: flex;
flex-direction: column;
margin-top: -22%;
@media (min-width: 576px){
    margin-top: -10%;
}
@media (min-width: 992px){
    margin-top: 0;
    margin-left: 3%;
    margin-right: 3%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(11, 1fr);
}
`

export default Grid