import React from "react"
import Layout from "../components/layout/Layout"
import Section from "../components/layout/Section"
import AuxHero from "../components/ui/AuxHero"
import Gradient from "../components/contentContainers/Gradient"
import Outline from "../components/contentContainers/outline"
import Card from "../components/contentContainers/Card"
import Grid from "../components/layout/Grid"
import GridCoordinates from "../components/layout/GridCoordinates"
import SpeechBubble from "../components/contentContainers/SpeechBubble"
import { setColor } from "../styles/styleHelpers"
import VerticalSpacing from "../components/spacing/VerticalSpacing"
import styled from "styled-components"
import StarredListItem from "../components/ui/StarredListItem"
import NumberedList from "../components/ui/NumberedList"
import Emphasis from "../components/contentContainers/Emphasis"
import Testimonial from "../components/Testimonial"
import Accordion from "../components/accordion/Accordion"

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
          <VerticalSpacing size="8x-large--negative" sizeMd="-12rem">
            <Grid
              gridColNumber="27"
              gridRowNumber="32"
              gridColUnit="1fr"
              gridRowUnit="2.5rem"
            >
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
              </GridCoordinates>

              <GridCoordinates
                colStart="11"
                colFinish="28"
                rowStart="12"
                rowFinish="38"
                mobileOrder="0"
              >
                <VerticalSpacing size="large" sizeMd="-2rem">
                  <SpeechBubble bgColor={setColor.brandPrimary} pageType="Aux">
                    <h2>
                      <MutedTitleText>If</MutedTitleText> YES,
                      <MutedTitleText>
                        {" "}
                        here are the JLPT Bootcamp Details:
                      </MutedTitleText>
                    </h2>

                    <ul>
                      <StarredListItem>Online</StarredListItem>
                      <StarredListItem>
                        Experienced and qualified native teachers who have
                        taught multiple successful JLPT students.
                      </StarredListItem>
                      <StarredListItem>
                        Small group lessons (4 people maximum).
                      </StarredListItem>
                      <StarredListItem>
                        Marked & reviewed JLPT Mock Test.
                      </StarredListItem>
                      <StarredListItem>
                        Basic, Plus and VIP experiences available.
                      </StarredListItem>
                      <StarredListItem>
                        5 hours minimum of formal JLPT Prep Lessons with example
                        exercises.
                      </StarredListItem>
                    </ul>
                    <Emphasis color={setColor.brandPrimaryMedium}>
                      <p>Bonus Content!</p>
                      <ul>
                        <StarredListItem>
                          JLPT Textbook sent to you.
                        </StarredListItem>
                        <StarredListItem>
                          Facebook group to share your JLPT questions with
                          teachers in our community.
                        </StarredListItem>
                        <StarredListItem>
                          Invitation to join our{" "}
                          <a
                            href="https://nihongoconnection.vipmembervault.com/products/courses/view/3"
                            target="_blank"
                          >
                            online Japanese Conversation Club
                          </a>{" "}
                          at a discount rate.
                        </StarredListItem>
                        <StarredListItem>
                          Special goodybag if you sign up 45 days or more before
                          your chosen bootcamp.
                        </StarredListItem>
                      </ul>
                    </Emphasis>
                  </SpeechBubble>
                </VerticalSpacing>
              </GridCoordinates>
              {/* <GridCoordinates
                colStart="3"
                colFinish="10"
                rowStart="13"
                rowFinish="16"
                mobileOrder="0"
              >
              <VerticalSpacing size="6x-large" sizeMd="0">
                <Outline>
                  <Card>
                    <h2>Upcoming dates:</h2>
                    <ul>
                      <li>
                        <strong>N3: </strong> 23-24 May
                      </li>
                    </ul>
                  </Card>
                </Outline>
                </VerticalSpacing>
              </GridCoordinates> */}
            </Grid>
          </VerticalSpacing>
        </Section>
        <Section flexDirection="row">
          <Gradient widthMd="68%">
            <Card>
              <h2 style={{ color: setColor.brandPrimary }}>How to book</h2>
              <NumberedList>
                <li>Check your JLPT Level</li>
                <li>Decide your preferred date</li>
                <li>Decide your preferred status: Basic, Plus or VIP</li>
                <li>Choose your payment option: Paypal or card</li>
                <li>Make your payment</li>
                <li>
                  Follow the instructions to provide us with your chosen date
                  and status information
                </li>
                <li>
                  Await your confirmation email (24-48 hours after registration
                  (M-F))
                </li>
              </NumberedList>
            </Card>
          </Gradient>

          <Outline widthMd="28%">
            <Card>
              <h2
                style={{
                  color: setColor.brandBlack,
                }}
              >
                Upcoming dates:
              </h2>
              <ul>
                <li>
                  <strong>N3: </strong> 23-24 May
                </li>
              </ul>
            </Card>
          </Outline>
        </Section>
        <VerticalSpacing size="2x-large--negative" sizeMd="0">
          <Section flexDirection="row">
            <h2
              style={{
                color: setColor.brandPrimary,
                marginTop: "0",
                paddingRight: "2rem",
              }}
            >
              What do past participants think?
            </h2>
            <Testimonial>
              <p>
                I cannot express enough how much I enjoyed the event and there
                are no words to express how helpful it was for me.
              </p>
              <p>Thank you very much to all those who organised it!</p>
              <p>
                You not only helped improve my Japanese and chance of passing
                the JLPT, but you have also reignited my passion for it. I am
                already looking forward to next year.
              </p>
              <p>11/21/2017</p>
            </Testimonial>
          </Section>
        </VerticalSpacing>
        <VerticalSpacing size="2x-large--negative" sizeMd="0">
          <Section>
            <h2
              style={{
                color: setColor.brandPrimary,
                marginTop: "0",
                paddingRight: "2rem",
              }}
            >
              FAQs
            </h2>
          </Section>
        </VerticalSpacing>
        <Section>
          <Accordion>
            <div title="Signalling functionality for keyboard users #1">
              <h4>Feature:</h4>
              <p>Rely on built-in behaviours where possible</p>
            </div>
          </Accordion>
        </Section>
      </div>
    </Layout>
  )
}

const MutedTitleText = styled.span`
  font-size: 1.5rem;
`
