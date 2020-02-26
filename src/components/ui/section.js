import styled from "styled-components"
import React from "react"
import { setFlex } from "../../styleHelpers"
import { setColor } from "../../styleHelpers"
import PropTypes from "prop-types"


const Section = styled.section`
  @media (max-width: 500px){
    background-image: none;
    background-position: 10% 10%;
    background-size: cover;
  }
  background-color: ${props => props.bgColor};
  background-image: url(${props => (props.bgImg ? props.bgImg : "none")});
  background-repeat: no-repeat;
  background-position: 50% 20%;
  padding: 5%;
`

Section.propTypes = {
  bgColor: PropTypes.string,
  bgImg: PropTypes.string,
}

Section.defaultProps = {
  bgColor: setColor.brandWhite,
}

export default Section
