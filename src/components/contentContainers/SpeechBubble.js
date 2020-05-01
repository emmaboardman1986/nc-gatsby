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

const SpeechBubble = ({ children, bgColor, constrainWidth, orderDesktop }) => {
  return (
    <SpeechBubbleWrapper
      bgColor={bgColor}
      constrainWidth={constrainWidth}
      orderDesktop={orderDesktop}
    >
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
  width: ${props => (props.constrainWidth ? "70%" : null)};

  `}

  ${breakpoint.md`
  order: ${props => (props.orderDesktop ? props.orderDesktop : null)};
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
    font-size: 1rem;
    font-family: "Poppins-Regular";
    margin-bottom: 0.75rem;
  }
`

SpeechBubble.propTypes = {
  constrainWidth: PropTypes.bool,
  bgColor: PropTypes.string,
}

export default SpeechBubble
