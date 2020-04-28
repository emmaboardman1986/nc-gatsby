import styled from "styled-components"
import React from "react"
import QuotationImg from "../../static/assets/testimonial.png"
import {
  setSharedBorderRadius,
  setColor,
} from "../styles/styleHelpers"

const Testimonial = ({ children }) => {
  return (
    <TestimonialWrapper>
      <img src={QuotationImg} alt=""></img>
      {children}
    </TestimonialWrapper>
  )
}

const TestimonialWrapper = styled.div`
  position: relative;
  background-color: ${setColor.brandWhite};
  padding: 2.5rem;
  margin-left: 2rem;
  margin-top: 2rem;
  img {
      width: 4rem;
      position: absolute;
      top: -1rem;
      left: -2rem;
  }
  p {
    font-family: "Poppins-Regular";
    line-height: 1.4rem;
    :last-child {
        text-align: right;
    }
  }

  border-radius: ${setSharedBorderRadius.radiusLarge};
  border: 2px solid ${setColor.brandPrimary};
`

export default Testimonial
