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
box-sizing: border-box;
 @media(min-width: 992px) {
     width: 100%;
     margin-bottom: 0;
 }

     padding: 1rem;
     position: relative;
     background: linear-gradient(to right, #434599, cyan, green, yellow, orange, #ED2530);
     border-radius: 20px;
     margin-bottom: 5%;
`

export default Gradient