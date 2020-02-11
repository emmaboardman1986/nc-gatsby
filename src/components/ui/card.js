import styled from "styled-components"
import React from 'react';
import PropTypes from 'prop-types'


const Card = ({children}) => {
    return(
        <CardWrapper>
            {children}
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
  /* width: 100%; */
  padding: 1.5rem;
  padding-left: 1.5rem;
  border-radius: 10px;
  position: relative;
  background: #f9f9f9;
  color: black;
  h3 {
      margin-bottom: 0;
      margin-top: 0;
  }
  h4 {
      margin-top: 2%;
      margin-bottom: 0;
      
  }
  p {
      margin-bottom: 0;
      font-size: 1.1rem;
  }
`

export default Card