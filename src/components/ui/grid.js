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
/* grid acts as flexcontainer on smaller screens */
display: flex;
flex-direction: column;
margin-top: -6.5rem;
@media (min-width: 576px){
    margin-top: -10%;
}
@media (min-width: 992px){
    margin-top: -0.5rem;
    margin-left: 3%;
    margin-right: 3%;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(23, 2.5rem);
}
`

export default Grid