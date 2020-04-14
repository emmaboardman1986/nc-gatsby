import styled from "styled-components"
import { setColor, breakpoint } from "../../styles/styleHelpers"

const Main = styled.main`
  padding-bottom: 0.5rem;
  box-sizing: border-box;
  background-color: ${setColor.brandPrimaryLight};
  ${breakpoint.md`
padding: 0;`}
`

export default Main
