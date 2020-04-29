import React from "react"
import styled from "styled-components"
import Icon from "../../components/icon/Icon"
import NCLogoSm from "../../../static/assets/logoNCsm.svg"
import {
  breakpoint,
  setFlex,
  setSharedSpacing,
} from "../../styles/styleHelpers"
import FlexContainer from "../../components/layout/FlexContainer/FlexContainer"

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo>
        <img
          src={NCLogoSm}
          alt="Nihongo Connection"
          style={{ width: `200px` }}
        ></img>
      </FooterLogo>
      <FooterContent>
        <p>
          Nihongo Scotland is a part of{" "}
          <a href="https://nihongoconnection.com" target="_blank">
            Nihongo Connection
          </a>
          . Visit{" "}
          <a href="https://nihongoconnection.com" target="_blank">
            NihongoConnection.com
          </a>{" "}
          for more Japanese learning opportunities and resources.
        </p>
        <FlexContainer
          flexDirection={{ _: "column", xs: "row" }}
          justifyContent={{ _: "center", xs: "space-between" }}
          alignItems={{_: "center", xs: "flex-end"}}
        >
          <FooterCopyright style={{marginTop: "1rem"}}>
            © {new Date().getFullYear()} Nihongo Connection
          </FooterCopyright>
          <FooterSocialIcons style={{marginTop: "0.75rem"}}>
            <a href="https://www.instagram.com/nihongo_connection/" target="_blank" style={{marginRight: "0.5rem"}}><Icon icon="instagram" fill="white" stroke="none"/></a>
            <a href="https://www.facebook.com/groups/984083104951153/" target="_blank" style={{marginRight: "0.5rem"}}><Icon icon="facebook" fill="white" stroke="none" /></a>
            <a href="https://twitter.com/nihongoconnect" target="_blank"><Icon icon="twitter" fill="white" stroke="none" /></a>
          </FooterSocialIcons>
        </FlexContainer>
      </FooterContent>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #2f549c;
  color: #fff;
  padding: ${setSharedSpacing.sectionPadding};
  font-family: "AnonymousPro-Regular";
  ${setFlex()};
  text-align: center;
  flex-direction: column;
  ${breakpoint.xs`
  flex-direction: row;
  text-align: left;
  `}
`

const FooterLogo = styled.div``

const FooterContent = styled.div`
  margin-left: 5%;

  a {
    color: white;
    font-family: "AnonymousPro-Bold";
    border-bottom: 1px solid #2f549c;
    text-decoration: none;
    padding-bottom: 0.01%;
    &:hover {
      border-bottom: 1px solid white;
    }
  }
`

const FooterCopyright = styled.div``

const FooterSocialIcons = styled.div`
  padding-top: ${setSharedSpacing.sectionPadding};
  svg {
    &:not(:first-of-type) {
      padding-left: 1rem;
    }
  }
  ${breakpoint.xs`
  padding-top: 0;
  padding-right: ${setSharedSpacing.sectionPadding};`}
`

export default Footer
