import styled from "styled-components"
import {
  setColor,
  setSharedSpacing,
  breakpoint,
} from "../../styles/styleHelpers"

const AuxHero = styled.div`
  padding: ${setSharedSpacing.sectionPadding};
  padding-top: 8rem;
  padding-bottom: 8rem;
  ${breakpoint.md`
  padding-top: 4rem;`}
  h1 {
    color: ${setColor.brandWhite};
    font-size: 4rem;
    line-height: 4.2rem;
    margin-top: 0.5rem;
  }
`

export default AuxHero
