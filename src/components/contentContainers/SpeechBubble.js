import styled from "styled-components"
import React from "react"
import redSpeechBubble from "../../../static/assets/speech-bubble__tail--red.svg"
import blueSpeechBubble from "../../../static/assets/speech-bubble__tail--blue.svg"
import {
  setColor,
  setSharedBorderRadius,
  breakpoint,
} from "../../styles/styleHelpers"
import PropTypes from "prop-types"

const SpeechBubble = ({ children, bgColor, constrainWidth }) => {
  console.log(constrainWidth);
  return (
    <SpeechBubbleWrapper bgColor={bgColor} constrainWidth={constrainWidth}>
      <SpeechBubbleContent>{children}</SpeechBubbleContent>
    </SpeechBubbleWrapper>
  )
}

const SpeechBubbleWrapper = styled.div`
  background-color: ${props =>
    props.bgColor ? props.bgColor : setColor.brandSecondary};
  border-radius: ${setSharedBorderRadius.radiusSpeechBubble};
  padding: 2rem;
  p {
    margin: 0;
  }
  a {
    color: ${setColor.brandPrimaryLight};
    &:hover,
    &:focus {
      background-color: ${setColor.brandPrimaryLight};
      color: ${setColor.brandPrimary};
    }
  }
  &:after {
    content: "";
    background: url(${redSpeechBubble});
    background: ${props =>
      props.bgColor ? `url(${blueSpeechBubble})` : `url(${redSpeechBubble})`};
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: absolute;
    width: 10rem;
    height: 6rem;
  }
  ${breakpoint.xs`
  width: ${props => props.constrainWidth ? "70%" : null};
  margin-left: auto;
  margin-right: auto;
  `}
  ${breakpoint.md`
  &:after {
    width: 10rem;
    height: 8rem;
  }
  `}
 
`

const SpeechBubbleContent = styled.div`
  color: ${setColor.brandWhite};
  position: relative;
  p {
    font-size: 1.1rem;
    font-family: "Axiforma-Medium";
    margin-bottom: 0.6rem;
  }
  h2 {
    color: ${setColor.brandWhite};
    margin-top: 0.5rem;
    margin-bottom: 0.6rem;
  }
  input {
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
    padding: 0.5rem 1.5rem;
    border: 2px solid ${setColor.brandWhite};
  }
  ul {
    margin-bottom: 1.1rem;
    margin-top: 1.1rem;
  }
  input[type="email"] {
    width: 80%;
    border-radius: ${setSharedBorderRadius.radiusInput};
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

SpeechBubble.propTypes = {
  constrainWidth: PropTypes.bool,
  bgColor: PropTypes.string
}

export default SpeechBubble
