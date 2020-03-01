import styled from "styled-components"
import React from "react"
import redSpeechBubble from "../../../static/assets/speech-bubble__tail--red.svg"
import { setColor, setSharedBorderRadius } from "../../utils/styleHelpers"

const SpeechBubble = ({ children }) => {
  return (
    <SpeechBubbleWrapper>
        <SpeechBubbleContent>{children}</SpeechBubbleContent>
    </SpeechBubbleWrapper>
  )
}



const SpeechBubbleWrapper = styled.div`
  background-color: ${setColor.brandSecondary};
  border-radius: ${setSharedBorderRadius.radiusLarge};
  padding: 2rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  margin-bottom: 4rem;
  &:after {
    content: "";
    background: url(${redSpeechBubble});
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: absolute;
    width: 45%;
    height: 6rem;
  }
`


const SpeechBubbleContent = styled.div`
  color: ${setColor.brandWhite};
  position: relative;
  p {
    font-size: 1.1rem;
    font-family: "Axiforma-Medium";
    margin-bottom: 0.6rem;
  }
  h3 {
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

export default SpeechBubble
