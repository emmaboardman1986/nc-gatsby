import React from "react";
import styled from "styled-components";
import {setColor, setFont} from "../../styles/styleHelpers"
import BodyText from "../../components/ui/typography/BodyText"

const AccordionContent = ({ children }) => {
  return <AccordionContentWrapper><BodyText font={setFont.fontSecondary}>{children}</BodyText></AccordionContentWrapper>;
};

export const AccordionContentWrapper = styled.div`
  padding: 0.5rem;
  padding-bottom: 1.25rem;
  background-color: ${setColor.brandPrimaryLight};
  border-bottom: 2px solid ${setColor.brandPrimary};
`;

export default AccordionContent;
