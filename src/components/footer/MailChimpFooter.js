import React from "react"
import VerticalSpacing from "../spacing/VerticalSpacing"
import Section from "../layout/Section"
import FlexContainer from "../layout/FlexContainer/FlexContainer"
import Card from "../contentContainers/Card"
import MailChimp from "../vendor/MailChimp"
import {setColor} from "../../styles/styleHelpers"

const MailChimpFooter = () => {
  return (
    <VerticalSpacing sizeMd="0">
      <Section flexDirection="row">
        <FlexContainer
          containerWidth={{ _: "100%", md: "60%" }}
          flexDirection={{ _: "column" }}
        >
          <h2
            style={{
              color: setColor.brandPrimary,
              marginTop: "0",
              paddingRight: "2rem",
              paddingTop: "1.5rem",
              paddingBottom: "0.5rem",
            }}
          >
            Interested but unsure?
          </h2>

          <p>Join our mailing list to keep in touch!</p>
          <VerticalSpacing size="x-large" sizeMd="0"></VerticalSpacing>
        </FlexContainer>
        <span id="mailing-list"></span>
        <Card bgColor={setColor.brandPrimary} color={setColor.brandWhite}>
          <MailChimp emphasisColor={setColor.brandPrimaryMedium} />
        </Card>

        <VerticalSpacing size="large" sizeMd="0"></VerticalSpacing>
      </Section>
    </VerticalSpacing>
  )
}

export default MailChimpFooter
