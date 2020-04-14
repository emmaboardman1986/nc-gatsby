import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Section from "../components/layout/section"
import Gradient from "../components/contentContainers/gradient"
import Card from "../components/contentContainers/card"
import AuxHero from "../components/ui/aux-hero"
import Grid from "../components/layout/grid"
import GridCoordinates from "../components/layout/gridCoordinates"

import { setColor } from "../styles/styleHelpers"

export const query = graphql`
  query {
    fridayStudyClub: prismicFridayStudyClub {
      data {
        friday_study_club_details {
          html
        }
        friday_study_club_title {
          text
        }
      }
    }
  }
`

export default function FridayStudyClubPage({ data }) {
  function createMarkup(content) {
    return { __html: content }
  }

  return (
    <Layout>
      <div>
        <Section bgColor={setColor.brandPrimary}>
          <AuxHero>
            <h1>{data.fridayStudyClub.data.friday_study_club_title.text}</h1>
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
                        data.fridayStudyClub.data.friday_study_club_details.html
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
