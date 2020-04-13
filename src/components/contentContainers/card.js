import styled from "styled-components"
import React from 'react';
import PropTypes from 'prop-types'
import {setColor} from "../../utils/styleHelpers"


const Card = ({children}) => {
    return(
        <CardWrapper>
            {children}
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  padding-left: 1.5rem;
  border-radius: 10px;
  position: relative;
  background: white;
  color: black;
  h2 {
      margin-bottom: 0;
      margin-top: 0;
      color: ${setColor.brandPrimary};
  }
  h3 {
      margin-top: 2%;
      margin-bottom: 0;
      
  }
  p {
      margin-bottom: 1%;
      font-size: 1.1rem;
      :last-child {
          margin-bottom: 5%;
          padding-bottom: 5%;
      }
  }
`

export default Card