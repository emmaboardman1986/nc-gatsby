import styled from "styled-components"
import React from 'react';
import PropTypes from 'prop-types'
import redSpeechBubble  from '../../../static/assets/speech-bubble--red.png';
import blueSpeechBubble  from '../../../static/assets/speech-bubble--blue.png';


const SpeechBubble = ({bgColor, children}) => {
    return(
        <SpeechBubbleWrapper bgColor={bgColor}>
            {children}
        </SpeechBubbleWrapper>
    )
}

const SpeechBubbleWrapper = styled.div`
 @media(min-width: 576px) {
     width: 100%;
     margin-bottom: 0;
 }
    margin-top: -10%;
     padding: 0.75rem;
     position: relative;
     background: url(${props => props.bgColor === "red" ? redSpeechBubble : blueSpeechBubble});
     background-repeat: no-repeat;
     background-size: contain;
     margin-bottom: 5%;
     height: 100%;
`

export default SpeechBubble