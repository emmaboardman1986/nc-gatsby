import styled from "styled-components"
import React from 'react';


const FormEmphasis= ({children, color}) => {
    return(
        <FormEmphasisWrapper color={color}>
            {children}
        </FormEmphasisWrapper>
    )
}

const FormEmphasisWrapper = styled.div`
border-radius: 6px;
border: 1px dashed ${props => props.color};
padding: 5%;
`

export default FormEmphasis