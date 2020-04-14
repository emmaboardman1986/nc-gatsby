import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { SIZE_SCALE } from "../../styles/styleHelpers"

const VerticalSpacing = ({ children, size }) => (
  <div className={size ? `h-spacing-${size}` : `h-spacing`}>{children}</div>
)

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
  ]),
}

export default VerticalSpacing
