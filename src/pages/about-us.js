import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Section from "../components/layout/Section"
import Gradient from "../components/contentContainers/Gradient"
import Card from "../components/contentContainers/Card"
import AuxHero from "../components/ui/AuxHero"
import Grid from "../components/layout/Grid"
import GridCoordinates from "../components/layout/GridCoordinates"
import VerticalSpacing from "../components/spacing/VerticalSpacing"
import TimeLine from "../components/timeline/Timeline"
import Heading from "../components/ui/Heading"

import { setColor } from "../styles/styleHelpers"

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
        <Heading variant="h1" text={data.aboutUs.data.about_us_title.text}></Heading>
        </AuxHero>
      </Section>

      <Section bgColor={setColor.brandPrimaryLight}>
        <VerticalSpacing size="8x-large--negative" sizeMd="-12rem">
          <Grid>
            {/* Friday Study Club */}
            <GridCoordinates
              colStart="1"
              colFinish="14"
              rowStart="1"
              rowFinish="10"
              mobileOrder="0"
            >
              <Gradient>
                <Card>
                  <div>
                    {" "}
                    <p style={{fontFamily: "Poppins-Regular", lineHeight: 1.5, textAlign: "center"}}>Nihongo Scotland is a Japanese-language study club run by
                    volunteers.</p> 
                    <p style={{fontFamily: "Poppins-Regular", lineHeight: 1.5, textAlign: "center"}}>Our purpose is provide an immersive study
                    environment for all.</p>
                  </div>
                </Card>
              </Gradient>
            </GridCoordinates>
          </Grid>
        </VerticalSpacing>
      </Section>
      <VerticalSpacing size="large--negative" sizeMd="6x-large--negative"></VerticalSpacing>
      <Section bgColor={setColor.brandPrimaryLight} style={{paddingTop: 0}}>
        <Heading variant="h2" text="Our Story" style={{margin: '0.25rem'}}></Heading>
        <TimeLine></TimeLine>
      </Section>
    </Layout>
  )
}
