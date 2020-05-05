import React from "react"
import styled from "styled-components"
import Icon from "../../components/icon/Icon"
import NCLogoSm from "../../../static/assets/logoNCsm.svg"
import {
  breakpoint,
  setFlex,
  setSharedSpacing,
  setFont,
  setColor,
} from "../../styles/styleHelpers"
import FlexContainer from "../../components/layout/FlexContainer/FlexContainer"
import TextLink from "../../components/ui/TextLink"
import BodyText from "../ui/typography/BodyText"

const Footer = () => {
  // TODO replace footer hardcoded spacing with spacing component
  return (
    
    <FooterWrapper>
      <FooterLogo>
        <FooterImage
          src={NCLogoSm}
          alt="Nihongo Connection"
          style={{ width: `200px` }}
        ></FooterImage>
      </FooterLogo>
      <FooterContent>
        <BodyText font={setFont.fontSecondary} color={setColor.brandWhite}>
        <span style={{fontSize: "1rem"}}>
          Nihongo Scotland is a part of Nihongo Connection. Visit{" "}
          <TextLink link="https://nihongoconnection.com" isExternal isOnBrandBg>
            NihongoConnection.com
          </TextLink>{" "}
          for more Japanese learning opportunities and resources.</span>
        </BodyText>

        <FlexContainer
          flexDirection={{ _: "column", xs: "row" }}
          justifyContent={{ _: "center", xs: "space-between" }}
          alignItems={{ _: "center", xs: "flex-end" }}
        >
          <FooterCopyright style={{ marginTop: "1rem" }}>
            <BodyText font={setFont.fontSecondary} color={setColor.brandWhite}>
              {" "}
             <span style={{fontSize: "1rem"}}> © {new Date().getFullYear()} Nihongo Connection</span>
            </BodyText>
          </FooterCopyright>
          <FooterSocialIcons style={{ marginTop: "0.75rem" }}>
            <a
              href="https://www.instagram.com/nihongo_connection/"
              target="_blank"
              style={{ marginRight: "0.5rem" }}
            >
              <Icon icon="instagram" fill="white" stroke="none" />
              <span class="visually-hidden">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/groups/984083104951153/"
              target="_blank"
              style={{ marginRight: "0.5rem" }}
            >
              <Icon icon="facebook" fill="white" stroke="none" />
              <span class="visually-hidden">Facebook</span>
            </a>
            <a href="https://twitter.com/nihongoconnect" target="_blank">
              <Icon icon="twitter" fill="white" stroke="none" />
              <span class="visually-hidden">Twitter</span>
            </a>
          </FooterSocialIcons>
        </FlexContainer>
      </FooterContent>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #2f549c;
  padding: ${setSharedSpacing.sectionPadding};
  ${setFlex()};
  text-align: center;
  flex-direction: column;
  ${breakpoint.xs`
  flex-direction: row;
  text-align: left;
  `}
`


const FooterLogo = styled.div``

const FooterImage = styled.img`
margin-bottom: 0.5rem;
${breakpoint.xs`
margin-bottom: 0;`}`

const FooterContent = styled.div`
  margin-left: 5%;
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
