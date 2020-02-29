import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { setColor } from "../../utils/styleHelpers"
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
  font-size: 15px;
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
    margin-left: -11%;
  }
`

StarredListItem.propTypes = {
  color: PropTypes.string
}

StarredListItem.defaultProps = {
    bgColor: setColor.brandWhite
  }

export default StarredListItem
