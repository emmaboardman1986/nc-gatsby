import styled from "styled-components"
import React from 'react';
import PropTypes from 'prop-types'


const Title = ({children}) => {
    return(
        <TitleWrapper>
            {children}
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
  width: 100%;
`

export default Title
