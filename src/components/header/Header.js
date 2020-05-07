import styled from "styled-components"
import React, { useContext} from "react"
import {
  setColor,
  breakpoint,
  setSharedSpacing,
  setFlex,
} from "../../styles/styleHelpers"
import Nav from "./Nav"
import LogoHeader from "../../../static/assets/logo__header.svg"
import BodyText from "../ui/typography/BodyText"
import TextLink from "../ui/TextLink"


const Header = ({ isMenuExpanded, setIsMenuExpanded, isBannerDisplayed }) => {
  return (
    <HeaderWrapper isBannerDisplayed={isBannerDisplayed}>
      <HeaderLogo>
        <TextLink link="/" isOnBrandBg noUnderline>
          <span>
            <img src={LogoHeader} alt="Nihongo Scotland"></img>
            <BodyText color={setColor.brandWhite}>Nihongo Scotland</BodyText>
          </span>
        </TextLink>
      </HeaderLogo>
      <Nav
        isMenuExpanded={isMenuExpanded}
        setIsMenuExpanded={setIsMenuExpanded}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${setColor.brandPrimary};
  color: ${setColor.brandWhite};
  position: fixed;
  z-index: 2;
  top: ${props => props.isBannerDisplayed ? "17vh" : "0px"};
  left: 0px;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  ${breakpoint.sm`
  height: 12vh;`}
  ${breakpoint.md`
  position: relative;
  width: auto;
  padding-right: ${setSharedSpacing.sectionPaddingDesktop};
  background-color: ${setColor.brandPrimary};
`};

  span {
    ${setFlex()};
    justify-content: flex-start;
    p {
      margin-left: 0.25rem;
      margin-top: 3px;
      display: inline-block !important;
    }
  }
`

const StandardHeaderWrapper = styled.div`
  width: 100%;
`

const HeaderLogo = styled.div`
  /* Compensate for bottom spacing on SVG */
  padding-top: 3.5px;
  img {
    height: 26px;
    padding-left: 1rem;
  }
  ${breakpoint.md`
  padding-top: 0px;`}

  flex: 1;
`

export default Header
