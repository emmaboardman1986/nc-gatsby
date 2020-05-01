import React from "react"
import VerticalSpacing from "../spacing/VerticalSpacing"
import Section from "../layout/Section"
import FlexContainer from "../layout/FlexContainer/FlexContainer"
import Card from "../contentContainers/Card"
import MailChimp from "../vendor/MailChimp"
import { setColor, setFont } from "../../styles/styleHelpers"
import Heading from "../ui/typography/Heading"
import BodyText from "../ui/typography/BodyText"

const MailChimpFooter = () => {
  return (
    <VerticalSpacing sizeMd="0">
      <Section flexDirection="row">
        <FlexContainer containerWidth={{ _: "100%", md: "60%" }}>
          <Heading variant="h2" text="Interested but unsure?"></Heading>
          <VerticalSpacing></VerticalSpacing>

          <BodyText font={setFont.fontSecondary}>
            Join our mailing list to keep in touch!
          </BodyText>
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
