import styled from "styled-components"
import { setColor, setSharedSpacing } from "../../styles/styleHelpers"

const AuxHero = styled.div`
  padding: ${setSharedSpacing.sectionPadding};
  padding-top: 4rem;
  padding-bottom: 8rem;
  h1 {
    color: ${setColor.brandWhite};
    font-size: 4rem;
    line-height: 4.2rem;
    margin-top: 0.5rem;
  }
`

export default AuxHero
