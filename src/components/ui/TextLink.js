import React from 'react'
import styled, { css } from "styled-components"
import { setColor } from "../../styles/styleHelpers"
import PropTypes from "prop-types"

const TextLink = ({children, link, isOnBrandBg, isExternal}) => {
    return (
        <TextLinkWrapper href={link} target="_blank" isOnBrandBg={isOnBrandBg} target={isExternal ? "_blank" : null}>
            {children}
        </TextLinkWrapper>
    )
}

const onBrandBgStyles = css`
 color: ${setColor.brandWhite};
 &:hover {
     color: ${setColor.brandGreyDark};
     background-color: ${setColor.brandWhite};
 }
`

const TextLinkWrapper = styled.a`
 all: inherit;
 display: inline;
 text-decoration: underline;
 font-family: 'Poppins-SemiBold';
 color: ${setColor.brandPrimary};
 &:hover {
     color: ${setColor.brandGreyDark};
     background-color: ${setColor.brandPrimary};
 }
 ${props => props.isOnBrandBg && onBrandBgStyles};
`

TextLink.propTypes = {
link: PropTypes.string.isRequired,
isOnBrandBg: PropTypes.bool
}

TextLink.defaultProps = {
    link: "#"
}

export default TextLink
