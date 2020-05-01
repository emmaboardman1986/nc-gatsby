import styled from "styled-components"
import React from 'react';
import { setColor, setFont } from "../../../styles/styleHelpers"


const Subtitle= ({children}) => {
    return(
        <SubtitleWrapper>
            {children}
        </SubtitleWrapper>
    )
}

const SubtitleWrapper = styled.p`
font-family: ${setFont.fontSecondary};
  font-size: 1.5rem;
  letter-spacing: 0.01rem;
  line-height: 1.6;
  color: ${setColor.brandWhiteOffset};
`

export default Subtitle
