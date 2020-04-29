import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { SIZE_SCALE, breakpoint } from "../../styles/styleHelpers"

const VerticalSpacing = ({ children, size, sizeMd, sizeLg, orderDesktop }) => (
  <VerticalSpacingWrapper
    className={size ? `h-spacing--${size}` : `h-spacing`}
    sizeMd={sizeMd}
    sizeLg={sizeLg}
    orderDesktop={orderDesktop}
  >
    {children}
  </VerticalSpacingWrapper>
)

const VerticalSpacingWrapper = styled.div`

  ${breakpoint.md`
margin-top: ${props => (props.sizeMd ? props.sizeMd : null)}`};
order: ${props => (props.orderDesktop ? props.orderDesktop : null)};

${breakpoint.lg`
margin-top: ${props => (props.sizeLg ? props.sizeLg : null)}`}
`

VerticalSpacing.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf([
    SIZE_SCALE.small2x,
    SIZE_SCALE.smallx,
    SIZE_SCALE.small,
    SIZE_SCALE.large,
    SIZE_SCALE.largex,
    SIZE_SCALE.large2x,
    SIZE_SCALE.large3x,
    SIZE_SCALE.large4x,
    SIZE_SCALE.large5x,
    SIZE_SCALE.large6x,
    SIZE_SCALE.large7x,
    SIZE_SCALE.large8x,
    SIZE_SCALE.large2xNegative,
    SIZE_SCALE.large3xNegative,
    SIZE_SCALE.large4xNegative,
    SIZE_SCALE.large5xNegative,
    SIZE_SCALE.large6xNegative,
    SIZE_SCALE.large7xNegative,
    SIZE_SCALE.large8xNegative,
  ]),
}

export default VerticalSpacing
