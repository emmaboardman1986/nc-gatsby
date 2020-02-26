import styled from "styled-components"
import React from 'react';
import PropTypes from 'prop-types'
import redSpeechBubble  from '../../../static/assets/speech-bubble--red.svg';
import blueSpeechBubble  from '../../../static/assets/speech-bubble--blue.svg';


const SpeechBubble = ({bgColor, children}) => {
    return(
        <SpeechBubbleWrapper bgColor={bgColor}>
            <SpeechBubbleContent>
            {children}
            </SpeechBubbleContent>
        </SpeechBubbleWrapper>
    )
}


const SpeechBubbleContent = styled.div`
    color: white;
    p {
        font-size: 1.1rem;
        font-family: 'Axiforma-SemiBold';
        margin-bottom: 1%;
    }
    h3 {
        color: white;
        margin-top: 2%;
        margin-bottom: 2%;
    }
    input {
        margin-top: 1%;
        margin-bottom: 1%;
        padding: 3% 6%;
        border: 2px solid white;
        
    }
    ul {
        margin-bottom: 7%;
        margin-top: 7%;
    }
    input[type="email"]{
            width: 70%;
            border-radius: 6px;
            margin-top: 2%;
            margin-bottom: 2%;
            /* border: black 1px #FF5861; */
           
        }
    label {
        margin-top: 6%;
    }
    `
const SpeechBubbleWrapper = styled.div`
    background-color: ${props => props.bgColor};
    border-radius: 20%;
    padding: 10%;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    
    margin-bottom: 60px;
     &:after {
         content: "";
   
    background: url(${props => props.bgColor == "#ED2530" ? redSpeechBubble : blueSpeechBubble});
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: absolute;
    /* bottom: 0; */
    width: 175px;
    height: 200px;
    margin-bottom: -114px;
    transform: ${props => props.bgColor == "#ED2530" ? "none" : "rotateY(180deg)"};
    @media (min-width: 992px){
    left: ${props => props.bgColor == "#ED2530" ? "20%" : "45%"};
    }
    

     }
     @media (min-width: 576px){
        width: 50%;
     }
     @media (min-width: 992px){
        width: 80%;
        margin-top: -30%;
        margin-bottom: 0px;
        padding: 10%;
        margin-left: initial;
    margin-right: initial;
     }
`

export default SpeechBubble