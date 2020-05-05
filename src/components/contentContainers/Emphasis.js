import styled from "styled-components"
import React from 'react';


const FormEmphasis= ({children, color, padding}) => {
    return(
        <FormEmphasisWrapper color={color} padding={padding}>
            {children}
        </FormEmphasisWrapper>
    )
}

const FormEmphasisWrapper = styled.div`
border-radius: 10px;
border: 1px dashed ${props => props.color};
padding: ${props => props.padding ? props.padding : "5%"};
`

export default FormEmphasis