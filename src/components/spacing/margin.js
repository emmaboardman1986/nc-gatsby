import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import { breakpoint } from "../../utils/styleHelpers"

const Margin = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginTopSm,
  marginTopMd,
  marginTopLg,
}) => {
  return (
    <MarginWrapper
      marginTop={marginTop}
      marginTopSm={marginTopSm}
      marginTopMd={marginTopMd}
      marginTopLg={marginTopLg}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    ></MarginWrapper>
  )
}

const MarginWrapper = styled.div`
  margin-top: ${props => (props.marginTop ? props.marginTop : null)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : null)};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : null)};
  margin-right: ${props => (props.marginRight ? props.marginRight : null)};
  ${breakpoint.sm`
  margin-top: ${props => (props.marginTopSm ? props.marginTopSm : null)};
  `}
  ${breakpoint.md`
  margin-top: ${props => (props.marginTopMd ? props.marginTopMd : null)};
  `}
  ${breakpoint.lg`
  margin-top: ${props => (props.marginTopLg ? props.marginTopLg : null)};
  `}
`

export default Margin
