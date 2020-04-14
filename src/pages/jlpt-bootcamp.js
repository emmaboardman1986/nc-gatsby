import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import Section from "../components/layout/section"
import AuxHero from "../components/ui/aux-hero"
import Gradient from "../components/contentContainers/gradient"
import Card from "../components/contentContainers/card"
import Grid from "../components/layout/grid"
import GridCoordinates from "../components/layout/gridCoordinates"
import SpeechBubble from "../components/contentContainers/speechBubble"
import { setColor } from "../styles/styleHelpers"
// import Margin from "../components/spacing/margin"
import styled from "styled-components"
import StarredListItem from "../components/ui/starredListItem"

export default function JLPTBootcampPage({ data }) {
  return (
    <Layout>
      <div>
        <Section bgColor={setColor.brandPrimary}>
          <AuxHero>
            <h1>JLPT Bootcamp</h1>
          </AuxHero>
        </Section>
       
          <Section>
          {/* <Margin marginTop="-9.5rem" marginTopSm="-12rem" marginTopSm="-12rem"></Margin> */}
            <Grid gridColNumber="27" gridRowNumber="40" gridColUnit="1fr" gridRowUnit="1fr">
              {/* Friday Study Club */}
              <GridCoordinates
                colStart="3"
                colFinish="26"
                rowStart="1"
                rowFinish="10"
                mobileOrder="0"
              >
                <Gradient>
                  <Card>
                    <h2>Would you like to discover...</h2>
                    <ul>
                      <li>
                        Strategies to save you time during the Japanese Language
                        Proficiency Test?
                      </li>
                      <li>
                        How to choose the correct answers in the kanji section?
                      </li>
                      <li>
                        How to quickly find the answers in the reading section?
                      </li>
                      <li>
                        How to avoid easy mistakes that might cost you precious
                        points?
                      </li>
                      <li>What to expect on the day of the test?</li>
                      <li>How ready for the JLPT you really are?</li>
                      <li>
                        Your strengths and weaknesses from an experienced JLPT
                        teacher?
                      </li>
                    </ul>
                  </Card>
                </Gradient>
                {/* <Margin marginBottom="-1.5rem"></Margin> */}
              </GridCoordinates>
             
              {/* <Gradient>
                  <Card> */}
              <GridCoordinates
                colStart="8"
                colFinish="28"
                rowStart="12"
                rowFinish="27"
                mobileOrder="0"
              >
                 {/* <Margin marginRight="-2.5rem"></Margin> */}
                <SpeechBubble bgColor={setColor.brandPrimary} pageType="Aux">
                  <h2><MutedTitleText>If</MutedTitleText> YES,<MutedTitleText> here are the JLPT Bootcamp Details:</MutedTitleText></h2>

                  <ul>
                    <StarredListItem>Online</StarredListItem>
                    <StarredListItem>
                      Experienced and qualified native teachers who have taught
                      multiple successful JLPT students.
                      </StarredListItem>
                    <StarredListItem>Small group lessons (4 people maximum).</StarredListItem>
                    <StarredListItem>Marked & reviewed JLPT Mock Test.</StarredListItem>
                    <StarredListItem>Basic, Plus and VIP experiences available.</StarredListItem>
                    <StarredListItem>
                      5 hours minimum of formal JLPT Prep Lessons with example
                      exercises.
                      </StarredListItem>
                  </ul>
                </SpeechBubble>
              </GridCoordinates>
              {/* </Card>
                </Gradient> */}
            </Grid>
          </Section>
     
      </div>
    </Layout>
  )
}

const MutedTitleText = styled.span`
font-size: 1.5rem;`

{
  /* <li>
<strong>Bonus</strong> JLPT Textbook sent to you.
</li>
<li>
<strong>Bonus</strong> Facebook group to share your JLPT
questions with teachers in our community.
</li>
<li>
<strong>Bonus</strong> Invitation to join our{" "}
<a
  href="https://nihongoconnection.vipmembervault.com/products/courses/view/3"
  target="_blank"
>
  online Japanese Conversation Club
</a>{" "}
at a discount rate.
</li>
<li>
<strong>Bonus</strong> special goodybag if you sign up
45 days or more before your chosen bootcamp.
</li> */
}
