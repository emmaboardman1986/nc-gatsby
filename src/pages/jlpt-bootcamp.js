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
import { setColor } from "../utils/styleHelpers"

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
            <Grid pageType="Aux">
              {/* Friday Study Club */}
              <GridCoordinates
                colStart="4"
                colFinish="22"
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
              </GridCoordinates>

              {/* <Gradient>
                  <Card> */}
              <GridCoordinates
                colStart="4"
                colFinish="22"
                rowStart="10"
                rowFinish="27"
                mobileOrder="0"
              >
                <SpeechBubble bgColor={setColor.brandPrimary} pageType="Aux">
                  <h2>If YES, here are the JLPT Bootcamp Details:</h2>

                  <ul>
                    <li>Online</li>
                    <li>
                      Experienced and qualified native teachers who have taught
                      multiple successful JLPT students.
                    </li>
                    <li>Small group lessons (4 people maximum).</li>
                    <li>Marked & reviewed JLPT Mock Test.</li>
                    <li>Basic, Plus and VIP experiences available.</li>
                    <li>
                      5 hours minimum of formal JLPT Prep Lessons with example
                      exercises.
                    </li>
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
