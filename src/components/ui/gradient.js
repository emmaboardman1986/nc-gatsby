import styled from "styled-components"
import React from 'react';
import PropTypes from 'prop-types'


const Gradient = ({children}) => {
    return(
        <GradientWrapper>
            {children}
        </GradientWrapper>
    )
}

const GradientWrapper = styled.div`
 @media(min-width: 576px) {
     width: 100%;
     margin-bottom: 0;
     margin-top: -3%;
 }

     padding: 1rem;
     position: relative;
     background: linear-gradient(to right, #434599, cyan, green, yellow, orange, #ED2530);
     border-radius: 20px;
     margin-bottom: 5%;
`

export default Gradient