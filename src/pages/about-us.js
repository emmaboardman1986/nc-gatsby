import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Section from "../components/layout/Section"
import Gradient from "../components/contentContainers/Gradient"
import Card from "../components/contentContainers/Card"
import AuxHero from "../components/ui/AuxHero"
import VerticalSpacing from "../components/spacing/VerticalSpacing"
import TimeLine from "../components/timeline/Timeline"
import Heading from "../components/ui/typography/Heading"
import FlexContainer from "../components/layout/FlexContainer/FlexContainer"
import MailChimpFooter from "../components/footer/MailChimpFooter"
import TextLink from "../components/ui/TextLink"
import BodyText from "../components/ui/typography/BodyText"
import { setColor, setFont } from "../styles/styleHelpers"

export const query = graphql`
  query {
    aboutUs: prismicAboutUs {
      data {
        about_us_content {
          html
        }
        about_us_title {
          text
        }
      }
    }
  }
`

export default function AboutUsPage({ data }) {
  function createMarkup(content) {
    return { __html: content }
  }

  return (
    <Layout>
      <Section bgColor={setColor.brandPrimary}>
        <AuxHero>
          <Heading
            variant="h1"
            text={data.aboutUs.data.about_us_title.text}
          ></Heading>
        </AuxHero>
      </Section>

      <Section bgColor={setColor.brandPrimaryLight} noPaddingBottom>
        <VerticalSpacing size="7x-large--negative" sizeMd="-10rem">
          <FlexContainer justifyContent={{ _: "center" }}>
            <Gradient widthMd="80%">
              <Card>
                <div>
                  {" "}
                  <BodyText align="center">
                    Nihongo Scotland is a Japanese-language study club run by
                    volunteers.
                  </BodyText>
                  <BodyText align="center">
                    Our purpose is provide an immersive study environment for
                    all.
                  </BodyText>
                </div>
              </Card>
            </Gradient>
          </FlexContainer>
        </VerticalSpacing>
      </Section>
      <VerticalSpacing sizeMd="-2rem"></VerticalSpacing>
      <Section bgColor={setColor.brandPrimaryLight}>
        <Heading
          variant="h2"
          text="Our Story"
          color={setColor.brandBlack}
        ></Heading>
        <TimeLine></TimeLine>
      </Section>
      <MailChimpFooter></MailChimpFooter>
    </Layout>
  )
}
