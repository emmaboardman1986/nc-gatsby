import React from "react";
import styled from "styled-components";
import {setColor} from "../../styles/styleHelpers"

const AccordionContent = ({ children }) => {
  return <AccordionContentWrapper>{children}</AccordionContentWrapper>;
};

export const AccordionContentWrapper = styled.div`
  padding: 0.5rem;
  padding-bottom: 1.25rem;
  background-color: ${setColor.brandPrimaryLight};
  border-bottom: 2px solid ${setColor.brandPrimary};
  h4 {
    margin: 0;
    padding-top: 0.75rem;
    padding-bottom: 0.5rem;
  }
`;

export default AccordionContent;
