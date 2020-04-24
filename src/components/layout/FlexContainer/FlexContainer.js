import React from "react"
import PropTypes from "prop-types"
import { FlexContainerStyles } from "./flexContainerStyle"
import styled from "styled-components"
import {
  classNames,
  createResponsiveClassNames,
} from "../../../styles/styleHelpers"

const FlexContainer = ({
  children,
  flexDirection,
  alignItems,
  justifyContent,
  flex,
}) => {
  const FlexContainerWrapper = styled.div`
    ${FlexContainerStyles}
  `

  const className = classNames(
    flexDirection && createResponsiveClassNames("flex-direction", flexDirection),
    justifyContent &&
      createResponsiveClassNames("justify-content", justifyContent)
  )

  // instead of applying a class, I should be returning a media query containing the css. 

  return (
    <FlexContainerWrapper
      className={className}
    >
      {children}
    </FlexContainerWrapper>
  )
}

FlexContainer.propTypes = {
  children: PropTypes.node,
  column: PropTypes.oneOf(["column", "row"]),
  alignItems: PropTypes.shape({
    _: PropTypes.oneOf(["flex-end", "center", "flex-start"]),
    xs: PropTypes.oneOf(["flex-end", "center", "flex-start"]),
    sm: PropTypes.oneOf(["flex-end", "center", "flex-start"]),
    md: PropTypes.oneOf(["flex-end", "center", "flex-start"]),
    lg: PropTypes.oneOf(["flex-end", "center", "flex-start"]),
  }),
  justifyContent: PropTypes.shape({
    _: PropTypes.oneOf(["space-between", "center", "flex-start", "flex-end"]),
    xs: PropTypes.oneOf(["space-between", "center", "flex-start", "flex-end"]),
    sm: PropTypes.oneOf(["space-between", "center", "flex-start", "flex-end"]),
    md: PropTypes.oneOf(["space-between", "center", "flex-start", "flex-end"]),
    lg: PropTypes.oneOf(["space-between", "center", "flex-start", "flex-end"]),
  }),
}

export default FlexContainer
