import React from "react"
import PropTypes from "prop-types"
import {
  FlexContainerStyles,
  justifyContentStyle,
  alignItemsStyle,
  directionStyle,
  widthStyle
} from "./flexContainerStyle"
import styled from "styled-components"

const FlexContainer = ({
  children,
  flexDirection,
  alignItems,
  justifyContent,
  flex,
  containerWidth
}) => {
  return (
    <FlexContainerWrapper
      justifyContent={justifyContent}
      alignItems={alignItems}
      flex={flex}
      flexDirection={flexDirection}
      containerWidth={containerWidth}
    >
      {children}
    </FlexContainerWrapper>
  )
}

const FlexContainerWrapper = styled.div`
  ${FlexContainerStyles}
  ${props => props.justifyContent && justifyContentStyle(props.justifyContent)};
  ${props => props.alignItems && alignItemsStyle(props.alignItems)};
  ${props => props.flexDirection && directionStyle(props.flexDirection)};
  ${props => props.containerWidth && widthStyle(props.containerWidth)};
`

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
