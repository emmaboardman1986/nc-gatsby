import React from "react"
import styled, { css } from "styled-components"
import { setColor } from "../../styles/styleHelpers"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const TextLink = ({ children, link, isOnBrandBg, isExternal, noUnderline }) => {
  return (
    <>
      {isExternal ? (
        <ExternalTextLinkWrapper
          href={link}
          target="_blank"
          isOnBrandBg={isOnBrandBg}
          noUnderline={noUnderline}
        >
          {children}
        </ExternalTextLinkWrapper>
      ) : (
        <InternalTextLinkWrapper
          to={link}
          isOnBrandBg={isOnBrandBg}
          noUnderline={noUnderline}
        >
          {children}
        </InternalTextLinkWrapper>
      )}
    </>
  )
}

const onBrandBgStyles = css`
  color: ${setColor.brandWhite};
  &:hover {
    color: ${setColor.brandGreyDark};
    background-color: ${setColor.brandWhite};
  }
`

const sharedStyles = css`
  display: inline;
  text-decoration: ${props => (props.noUnderline ? "none" : "underline")};
  font-family: "Poppins-SemiBold";
  color: ${setColor.brandPrimary};
  &:hover {
    color: ${setColor.brandGreyDark};
    background-color: ${setColor.brandPrimary};
  }
  ${props => props.isOnBrandBg && onBrandBgStyles};
`

const ExternalTextLinkWrapper = styled.a`
  ${sharedStyles};
`
const InternalTextLinkWrapper = styled(Link)`
  ${sharedStyles};
`

TextLink.propTypes = {
  link: PropTypes.string.isRequired,
  isOnBrandBg: PropTypes.bool,
}

TextLink.defaultProps = {
  link: "#",
}

export default TextLink
