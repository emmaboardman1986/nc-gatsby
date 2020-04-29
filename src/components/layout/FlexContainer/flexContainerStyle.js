import { css } from "styled-components"
import {createMediaQueries} from "../../../styles/styleHelpers"

export const FlexContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
`

export const justifyContentStyle = justifyContent => {
  const styles = [
    css`
      justify-content: ${justifyContent["_"]};
    `,
  ]
  if (Object.keys(justifyContent).length > 1) {
    styles.push(createMediaQueries("justify-content", justifyContent))
  }
  return styles
}

export const alignItemsStyle = alignItems => {
  const styles = [
    css`
      align-items: ${alignItems["_"]};
    `,
  ]
  if (Object.keys(alignItems).length > 1) {
    styles.push(createMediaQueries("align-items", alignItems))
  }
  return styles
}

export const directionStyle = direction => {
  const styles = [
    css`
      flex-direction: ${direction["_"]};
    `,
  ]
  if (Object.keys(direction).length > 1) {
    styles.push(createMediaQueries("flex-direction", direction))
  }
  return styles
}

export const widthStyle = width => {
  const styles = [
    css`
      width: ${width["_"]};
    `,
  ]
  if (Object.keys(width).length > 1) {
    styles.push(createMediaQueries("width", width))
  }
  return styles
}