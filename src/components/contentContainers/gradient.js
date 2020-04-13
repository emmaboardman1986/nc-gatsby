import styled from "styled-components"
import React from 'react';
import PropTypes from 'prop-types'


const Gradient = ({children, positioning}) => {
    return(
        <GradientWrapper positioning={positioning}>
            {children}
        </GradientWrapper>
    )
}

const GradientWrapper = styled.div`
box-sizing: border-box;
margin-top: ${props => props.positioning ?  "-8rem" : "0"};
li {
    padding: 0.5rem 0;
    &:last-of-type {
        padding-bottom: 0;
    }
}
 @media(min-width: 992px) {
     width: ${props => props.positioning ?  "70%" : "100%"};
     /* margin-bottom: ${props => props.positioning ?  "2rem" : "0"}; */
 }
     padding: 1rem;
     position: relative;
     background: linear-gradient(to right, #434599, cyan, green, yellow, orange, #ED2530);
     border-radius: 20px;
     margin-bottom: 5%;
`

export default Gradient