import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Section from "../components/layout/Section"
import Gradient from "../components/contentContainers/Gradient"
import Card from "../components/contentContainers/Card"
import AuxHero from "../components/ui/AuxHero"
import Grid from "../components/layout/Grid"
import GridCoordinates from "../components/layout/GridCoordinates"

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
      <div>
        <Section bgColor={setColor.brandPrimary}>
          <AuxHero>
            <h1>{data.aboutUs.data.about_us_title.text}</h1>
          </AuxHero>
        </Section>
      
          <Section>
            <Grid pageType="Aux">
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
                    <div
                      dangerouslySetInnerHTML={createMarkup(
                        data.aboutUs.data.about_us_content.html
                      )}
                    ></div>
                  </Card>
                </Gradient>
              </GridCoordinates>
            </Grid>
          </Section>
       
      </div>
    </Layout>
  )
}
