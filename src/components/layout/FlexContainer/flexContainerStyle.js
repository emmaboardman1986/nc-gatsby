import { css } from "styled-components"

export const FlexContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-items: ${props => props.alignItems ? props.alignItems : null};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
  flex: ${props => props.flex ? props.flex : null};
`

