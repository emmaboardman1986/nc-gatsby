import styled from "styled-components"
import React from "react"
import { setColor, breakpoint } from "../../styles/styleHelpers"

const NumberedList = ({ children }) => {
  return <NumberedListWrapper>{children}</NumberedListWrapper>
}

const NumberedListWrapper = styled.ol`
  counter-reset: step;
  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
  li {
    flex: 1 0 100%;
    ${breakpoint.sm`
    flex: 1 0 50%;
    flex-direction: column;
    padding-
    `}
    ${breakpoint.md`
    flex: 1 0 30%;
    `}
    list-style-type: none;
    font-family: "Poppins-Regular";
    align-items: end;
    display: flex;
    padding: 1rem 0.5rem;
    &:before {
      padding-right: 1rem;
      font-family: "Poppins-SemiBold";
      font-size: 2rem;
      counter-increment: step;
      content: counter(step);
      color: ${setColor.brandSecondary};
    }
  }
`

export default NumberedList
