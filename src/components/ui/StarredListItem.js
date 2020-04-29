import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { setColor, breakpoint } from "../../styles/styleHelpers"
import starSVG from "../../../static/assets/star.svg"

const StarredListItem = ({ children, color }) => {
  return (
    <StarredListItemWrapper color={color}>
        {children}
    </StarredListItemWrapper>
  )
}

const StarredListItemWrapper = styled.li`
  margin-top: 5%;
  margin-bottom: 1%;
  list-style: none;
  margin-left: 2%;
  font-size: 1rem;
  color: ${props => props.color};
  &:before {
    content: "";
    background: url(${starSVG}) no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
    fill:  white;
    stroke: white;
    position: absolute;
    margin-left: -2rem;
  }
  ${breakpoint.xs`
  &:before {
    margin-left: -2.5rem;
  }`}
  ${breakpoint.sm`
  &:before {
    margin-left: -3rem;
  }`}
  ${breakpoint.md`
  &:before {
    margin-left: -4rem;
  }`}
`

StarredListItem.propTypes = {
  color: PropTypes.string
}

StarredListItem.defaultProps = {
    bgColor: setColor.brandWhite
  }

export default StarredListItem
