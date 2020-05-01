import React from "react"
import Layout from "../components/layout/Layout"
import Section from "../components/layout/Section"
import AuxHero from "../components/ui/AuxHero"
import Gradient from "../components/contentContainers/Gradient"
import Outline from "../components/contentContainers/Outline"
import Card from "../components/contentContainers/Card"
import SpeechBubble from "../components/contentContainers/SpeechBubble"
import { setColor, setFont, breakpoint } from "../styles/styleHelpers"
import VerticalSpacing from "../components/spacing/VerticalSpacing"
import styled from "styled-components"
import NumberedList from "../components/ui/lists/NumberedList"
import Emphasis from "../components/contentContainers/Emphasis"
import Testimonial from "../components/Testimonial"
import Accordion from "../components/accordion/Accordion"
import Button from "../components/ui/Button"
import List from "../components/ui/lists/List"

import FlexContainer from "../components/layout/FlexContainer/FlexContainer"
import Heading from "../components/ui/typography/Heading"
import MailChimpFooter from "../components/footer/MailChimpFooter"
import TextLink from "../components/ui/TextLink"
import BodyText from "../components/ui/typography/BodyText"

export default function JLPTBootcampPage({ data }) {
  return (
    <Layout>
      <div>
        <Section bgColor={setColor.brandPrimary}>
          <AuxHero>
            <Heading variant="h1" text="JLPT Bootcamp"></Heading>
          </AuxHero>
        </Section>

        <Section bgColor={setColor.brandPrimaryLight}>
          <VerticalSpacing size="7x-large--negative" sizeMd="-10rem">
            <FlexContainer justifyContent={{ _: "center" }}>
              <Gradient widthMd="80%">
                <Card doublePaddingBottom>
                  <VerticalSpacing size="x-small"></VerticalSpacing>
                  <Heading
                    variant="h2"
                    text="Would you like to discover..."
                  ></Heading>
                  <VerticalSpacing size="x-small"></VerticalSpacing>
                  <List>
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
                  </List>
                </Card>
              </Gradient>
            </FlexContainer>
            <VerticalSpacing size="x-large" sizeMd="-3rem">
              {" "}
            </VerticalSpacing>
            <FlexContainer
              justifyContent={{ _: "center", md: "flex-end" }}
              style={{ zIndex: "1" }}
            >
              <SpeechBubble
                bgColor={setColor.brandPrimary}
                constrainWidth={true}
              >
                <VerticalSpacing size="x-small"></VerticalSpacing>
                <h2>
                  <MutedTitleText>If</MutedTitleText> YES,
                  <MutedTitleText>
                    {" "}
                    here are the JLPT Bootcamp Details:
                  </MutedTitleText>
                </h2>
                <VerticalSpacing size="x-small"></VerticalSpacing>

                <List color={setColor.brandWhite} isStarred>
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
                </List>
                <VerticalSpacing size="large"> </VerticalSpacing>
                <Emphasis color={setColor.brandPrimaryMedium}>
                  <BodyText color={setColor.brandWhite}>
                    Bonus Content!
                  </BodyText>
                  <List color={setColor.brandWhite} isStarred>
                    <li>JLPT Textbook sent to you.</li>
                    <li>
                      Facebook group to share your JLPT questions with teachers
                      in our community.
                    </li>
                    <li>
                      Invitation to join our{" "}
                      <TextLink
                        link="https://nihongoconnection.vipmembervault.com/products/courses/view/3"
                        isExternal
                        isOnBrandBg
                      >
                        online Japanese Conversation Club
                      </TextLink>{" "}
                      at a discount rate.
                    </li>
                    <li>
                      Special goodybag if you sign up 45 days or more before
                      your chosen bootcamp.
                    </li>
                  </List>
                </Emphasis>
              </SpeechBubble>
            </FlexContainer>
          </VerticalSpacing>
        </Section>
        <Section flexDirection="row" bgColor={setColor.brandPrimaryLight}>
          <VerticalSpacing size="4x-large" sizeMd="0"></VerticalSpacing>
          <Gradient widthMd="80%">
            <Card>
              <VerticalSpacing size="x-small"></VerticalSpacing>
              <Heading variant="h2" text="How to book"></Heading>
              <VerticalSpacing size="x-small"></VerticalSpacing>
              <NumberedList>
                <li>
                  Check your JLPT Level, decide your preferred date, and decide
                  your preferred status (Basic, Plus, or VIP)
                </li>

                <li>
                  Choose your payment option: Paypal or card, and make your
                  payment{" "}
                </li>

                <li>
                  Follow the instructions to provide us with your chosen date
                  and status information
                </li>
                <li>
                  Await your confirmation email (24-48 hours after registration
                  (M-F))
                </li>
              </NumberedList>
              <Button
                link="https://nihongoconnection.vipmembervault.com/products/courses/view/6"
                isCentered
                isExternal
                isCTA
              >
                Book Now
              </Button>
            </Card>
          </Gradient>

          <VerticalSpacing size="large" sizeMd="0"></VerticalSpacing>
          <ColumnWrapper>
            <Outline outlineSize="0.5rem">
              <Card>
                <h2
                  style={{
                    color: setColor.brandBlack,
                  }}
                >
                  Upcoming dates:
                </h2>
                <List>
                  <li>
                    <strong>
                      All bootcamps postponed due to covid-19. Join the{" "}
                      <TextLink link="#mailing-list">
                        mailing list below
                      </TextLink>{" "}
                      to keep informed.
                    </strong>
                  </li>
                </List>
              </Card>
            </Outline>
            <VerticalSpacing size="large"></VerticalSpacing>
            <Outline outlineSize="0.5rem">
              <Card>
                <h2
                  style={{
                    color: setColor.brandBlack,
                  }}
                >
                  Prices:
                </h2>
                <List>
                  <li>
                    <strong>Basic: </strong> £175.00
                  </li>
                  <li>
                    <strong>Plus: </strong> £225.00
                    <List subList={true}>
                      <li>Two extra hours of lessons</li>
                      <li>Lunchtime Conversation Classes</li>
                    </List>
                  </li>
                  <li>
                    <strong>VIP: </strong> £325.00
                    <List subList={true}>
                      <li>Two extra hours of lessons</li>
                      <li>Lunchtime Conversation Classes</li>
                      <li>Three 1:1 lessons</li>
                    </List>
                  </li>
                </List>
              </Card>
            </Outline>
          </ColumnWrapper>
        </Section>
        <VerticalSpacing sizeMd="0">
          <Section flexDirection="row">
            <h2
              style={{
                color: setColor.brandPrimary,
                marginTop: "0",
                paddingRight: "2rem",
                paddingTop: "1.5rem",
              }}
            >
              What do past participants think?
            </h2>
            <Testimonial>
              <BodyText font={setFont.fontSecondary}>
                I cannot express enough how much I enjoyed the event and there
                are no words to express how helpful it was for me.
              </BodyText>
              <BodyText font={setFont.fontSecondary}>
                Thank you very much to all those who organised it!
              </BodyText>
              <BodyText font={setFont.fontSecondary}>
                You not only helped improve my Japanese and chance of passing
                the JLPT, but you have also reignited my passion for it. I am
                already looking forward to next year.
              </BodyText>
              <VerticalSpacing size="x-small"></VerticalSpacing>
              <BodyText font={setFont.fontSecondary}>11/21/2017</BodyText>
            </Testimonial>
            <VerticalSpacing size="large" sizeMd="0"></VerticalSpacing>
          </Section>
        </VerticalSpacing>

        <Section bgColor={setColor.brandPrimaryLight}>
          <VerticalSpacing size="x-small"></VerticalSpacing>
          <Heading variant="h2" color={setColor.brandBlack} text="FAQs">
            FAQs
          </Heading>
          <VerticalSpacing size="x-small"></VerticalSpacing>
          <Accordion>
            {/* TODO: find smarter way to handle styling of accordion content */}
            <div title="How do I book?">
              <p>
                Decide if you want Basic, Plus or VIP and make the payment.
                After payment you will be asked to specify your preferred JLPT
                level and bootcamp date. We will contact you within 48 hours to
                confirm your place.
              </p>
            </div>
            <div title="What happens if I pay then discover that my preferred bootcamp is fully booked?">
              <p>
                You will have the option to stay on the waitlist for that
                bootcamp weekend, move to another bootcamp weekend or request a
                full refund.
              </p>
            </div>
            <div title="What is the schedule?">
              <p>
                (These times are approximate and will be confirmed with
                participants one week before their bootcamp)
              </p>
              <br></br>
              <p>
                <strong>Day One</strong> 08:45-17:30
              </p>
              <br></br>
              <p>
                <strong>Day Two</strong> 09:00-11:00 for Basic / 09:00-16:00 for
                Plus and VIPs.
              </p>
              <br></br>
              <p>
                {" "}
                The basic Bootcamp consists of 5 hours of JLPT preparation
                classes.
              </p>
              <br></br>
              <p>
                Three hours in the morning of Day 1 and the mock test is given
                in the afternoon.
              </p>{" "}
              <br></br>
              <p>
                In the morning of Day 2 mock test results are given and reviewed
                for two hours.
              </p>{" "}
              <br></br>
              <p>
                If you choose the Plus option you get two extra hours to review
                your results with the teacher, plus lunchtime conversation on
                each of the two days.
              </p>
              <br></br>
              <p>
                {" "}
                If you choose the VIP option you also get the “Plus” benefits
                and three online 1-1 lessons with your teacher which can be
                taken during the bootcamp weekend* or taken 30 days before or 30
                days after your chosen bootcamp.
              </p>
              <br></br>
              <p>
                {" "}
                *limited 1-1 time available during the bootcamp - first come
                first served. Other 1-1s will be available to be taken before
                and after the bootcamp.
              </p>
            </div>
            <div title="How old are participants?">
              <p>Past participants have been from 18 to 55 years of age.</p>
            </div>
            <div title="Is the mock test the full test?">
              <p>
                Yes, we want to give you the authentic experience for your level
                so that you can experience the layout and timing for each
                section.
              </p>
            </div>
            <div title="Can I pay for basic and upgrade to Plus or VIP later on?">
              <p>
                No, please choose Basic, Plus or VIP when you book as this will
                enable us to organise the bootcamp around your participation.
              </p>
            </div>
            <div title="Can I pay for Plus or VIP now and downgrade to Basic later on?">
              <p>
                No, please choose Basic, Plus or VIP when you book because this
                will enable us to organise the bootcamp around your
                participation.
              </p>
            </div>
            <div title="Can I get a refund?">
              <p>
                Receive a full refund if you cancel 30 days or more before your
                chosen bootcamp.
              </p>
            </div>
            <div title="Can I change the date of my bootcamp?">
              <p>
                Change your chosen date 30 days or more before your purchased
                Bootcamp.
              </p>
            </div>
            <div title="Will there be a goody-bag this year?">
              <p>
                I can neither confirm nor deny if there will be goody-bags at
                these Bootcamps... you will have to wait and see ;-)
              </p>
            </div>
            <div title="My daughter is 17, can she attend?">
              <p>
                We accept participants 18 and above. We are running bootcamps
                throughout the year so please check this website regularly for
                updates. Perhaps a bootcamp place for her 18th Birthday would be
                a nice gift :-)
              </p>
            </div>
          </Accordion>
        </Section>
        <MailChimpFooter></MailChimpFooter>
      </div>
    </Layout>
  )
}

const ColumnWrapper = styled.div`
  ${breakpoint.md`
width: 35%;
display: flex;
flex-direction: column;
margin-left: 3rem;`}
`

const MutedTitleText = styled.span`
  font-size: 1.5rem;
`
