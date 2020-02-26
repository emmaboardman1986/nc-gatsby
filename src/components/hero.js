import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"

const Hero = ({ children }) => {
  return <HeroWrapper>{children}</HeroWrapper>
}

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #f8f8f8;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15%;
  @media (min-width: 576px) {
    flex-direction: row;
    padding-bottom: 0;
  }
  div:first-child {
    display: flex;
    justify-content: center;
    width: 70%;
    margin-top: -2%;
    @media (min-width: 576px) {
      margin-left: -10%;
      padding-right: 10%;
    }
    @media (min-width: 787px) {
      width: 40%;
    }
    @media (min-width: 1050px) {
      width: 35%;
    }
  }
  div:last-child {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    h1 {
      margin-bottom: 0;
    }

    @media (min-width: 787px) {
      text-align: right;
      margin-right: 8%;
    }
  }
`

export default Hero
