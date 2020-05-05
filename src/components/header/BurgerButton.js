import styled from "styled-components"
import React from "react"
import {
  setColor,
  setSharedHeights,
  breakpoint,
} from "../../styles/styleHelpers"

const BurgerButton = ({ isMenuExpanded, setIsMenuExpanded }) => {
  return (
    <BurgerButtonWrapper
      aria-expanded={isMenuExpanded}
      onClick={() => setIsMenuExpanded(!isMenuExpanded)}
      aria-label="Open Site Navigation Menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </BurgerButtonWrapper>
  )
}

const BurgerButtonWrapper = styled.button`
  margin-right: 0.5rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 0;
  span {
    display: block;
    height: 6px;
    width: 40px;
    background: ${setColor.brandWhite};
    border-radius: 9px;
    opacity: 1;
    transition: 0.25s ease-in-out;
  }


  &[aria-expanded="true"] {
    span {
      :nth-child(1) {
        transform: rotate(-45deg) translateY(13px) translateX(-6px);
      }
      :nth-child(2) {
        opacity: 0;
      }
      :nth-child(3) {
     
        transform: rotate(45deg) translateY(-13px) translateX(-6px);
      }
    }
  }
  ${breakpoint.md`
    display: none;`}
`

export default BurgerButton
