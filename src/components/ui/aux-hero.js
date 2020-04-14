import styled from "styled-components"
import React from "react"
import { setColor, setSharedSpacing, breakpoint } from "../../styles/styleHelpers"
import PropTypes from "prop-types"



const AuxHero = styled.div`
padding: ${setSharedSpacing.sectionPadding};
padding-top: 4rem;
padding-bottom: 8rem;
h1 {
    color: ${setColor.brandWhite};
    font-size: 4rem;
    line-height: 4.2rem;
    margin-top: 0.5rem;
}
`

export default AuxHero
