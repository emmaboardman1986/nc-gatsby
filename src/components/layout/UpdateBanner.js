import React, { useContext } from "react"
import styled from "styled-components"
import BodyText from "../ui/typography/BodyText"
import TextLink from "../ui/TextLink"
import { setColor, setFont } from "../../styles/styleHelpers"
import { BannerContext } from "../../context/UpdateBannerContext"

const UpdateBanner = ({isBannerDisplayed}) => {
  const { state, dispatch } = useContext(BannerContext)
  return (
    <>
      {isBannerDisplayed &&
       (
        <UpdateWrapper>
          <BodyText color={setColor.brandWhite}>
            Due to covid-19, Nihongo Scotland has moved online. We hope you'll
            join us on Zoom for a{" "}
            <TextLink link="/beginnersbootcamp" isOnBrandBg>
              Beginner's Bootcamp
            </TextLink>
            , or{" "}
            <TextLink link="/fridaystudyclub" isOnBrandBg>
              Friday Study Club
            </TextLink>
            !
          </BodyText>
          <UpdateWrapperButton
            onClick={() => dispatch({ type: "toggle" }, state)}
          >
            <span className="visually-hidden">Close Message</span>X
          </UpdateWrapperButton>
        </UpdateWrapper>
      )
      }
    </>
  )
}

const UpdateWrapper = styled.aside`
  display: flex;
  background-color: ${setColor.brandBlack};
  width: 100%;
  position: fixed;
  top: 0;
  padding: 0.75rem;
  height: 17vh;
  z-index: 10;
  box-sizing: border-box;
  transition: height 0.25s ease;
  &.dismissed {
    height: 0;
  }
`

const UpdateWrapperButton = styled.button`
  height: 44px;
  position: absolute;
  bottom: 0;
  right: 0;
  min-width: 44px;
  font-family: ${setFont.fontPrimaryBold};
  color: ${setColor.brandWhite};
  align-self: flex-end;
  line-height: 1.4;
  padding: 0;
  margin: 0;
`

export default UpdateBanner
