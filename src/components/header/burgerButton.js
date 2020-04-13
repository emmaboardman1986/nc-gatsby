import styled from "styled-components"
import React from "react"
import {
  setColor,
  setSharedHeights,
  breakpoint,
} from "../../utils/styleHelpers"
import PropTypes from "prop-types"

const BurgerButton = ({isMenuExpanded, setIsMenuExpanded}) => {

  return (
    <BurgerButtonWrapper
      aria-expanded={isMenuExpanded}
      onClick={() => setIsMenuExpanded(!isMenuExpanded)}
    >
      <span></span>
      <span></span>
      <span></span>
    </BurgerButtonWrapper>
  )
}

const BurgerButtonWrapper = styled.button`
  background-color: transparent;
  color: white;
  display: flex;
  font-size: 1.5rem;
  position: fixed;
  z-index: 2;
  top: 0.5rem;
  right: 0.5rem;
  height: ${setSharedHeights.navHeight};
  border: 0;
  width: 18vw;
  span {
    display: block;
    position: absolute;
    height: 6px;
    width: 45px;
    background: ${setColor.brandWhite};
    border-radius: 9px;
    opacity: 1;
    margin-right: 0.8rem;
    top: 0;
    right: 0;
    margin-top: 0.75rem;
    transition: 0.25s ease-in-out;
    :nth-child(1) {
      top: 0px;
    }
    :nth-child(2) {
      top: 12px;
    }
    :nth-child(3) {
      top: 24px;
    }
  }
  &[aria-expanded="true"] {
    span {
      :nth-child(1) {
        transform: rotate(-45deg) translateY(10px) translateX(-6px);
      }
      :nth-child(2) {
        opacity: 0;
      }
      :nth-child(3) {
        transform: rotate(45deg) translateY(-12px) translateX(-6px);
      }
    }
  }
  ${breakpoint.md`
    display: none;`}
`

export default BurgerButton
