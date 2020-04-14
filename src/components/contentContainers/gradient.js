import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"

const Gradient = ({ children }) => {
  return <GradientWrapper>{children}</GradientWrapper>
}

const GradientWrapper = styled.div`
  box-sizing: border-box;
  li {
    padding: 0.5rem 0;
    &:last-of-type {
      padding-bottom: 0;
    }
  }
  @media (min-width: 992px) {
    width: 100%;
  }
  padding: 1rem;
  position: relative;
  background: linear-gradient(
    to right,
    #434599,
    cyan,
    green,
    yellow,
    orange,
    #ed2530
  );
  border-radius: 20px;
`

export default Gradient
