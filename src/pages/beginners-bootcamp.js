import React, { useContext } from "react"
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
import FlexContainer from "../components/layout/FlexContainer/FlexContainer"
import List from "../components/ui/lists/List"
import MailChimpFooter from "../components/footer/MailChimpFooter"
import Heading from "../components/ui/typography/Heading"
import BodyText from "../components/ui/typography/BodyText"

import { BannerContext } from "../context/UpdateBannerContext"

export default function BeginnersBootcampPage({ data }) {
  const { state } = useContext(BannerContext)
  return (
    <Layout>
    <div>
      <Section bgColor={setColor.brandPrimary}>
        <AuxHero isBannerDisplayed={state.isBannerDisplayed}>
          <Heading variant="h1" text="Beginner's Bootcamp"></Heading>
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
                <li>Strategies to save you time learning?</li>
                    <li>How to speak Japanese without causing offence?</li>
                    <li>
                      How to quickly start speaking even if you think you don’t
                      know enough vocabulary?
                    </li>
                    <li>How to to enjoy making mistakes?</li>
                    <li>What to expect during your trip to Japan?</li>

                    <li>
                      Your strengths and weaknesses and suggestions to help you
                      improve more quickly from an experienced teacher and
                      long-term learner of Japanese?
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
                  here are the Beginner's Bootcamp Details:
                </MutedTitleText>
              </h2>
              <VerticalSpacing size="x-small"></VerticalSpacing>

              <List color={setColor.brandWhite} isStarred>
              <li>
                    Experienced and qualified native teachers who have taught
                    multiple successful students.
                  </li>
                  <li>
                    Small group lessons (4 people maximum).
                  </li>
                  <li>
                    Basic, Plus and VIP experiences available.
                  </li>
                  <li>
                    5 hours minimum of formal lessons with example
                    exercises.
                  </li>
                  <li>
                    Culture focus, including lessons on ordering food and
                    Japanese table-manners.
                  </li>
              </List>
              <VerticalSpacing size="large"> </VerticalSpacing>
              <Emphasis color={setColor.brandPrimaryMedium}>
                 <BodyText color={setColor.brandWhite}>Bonus Content!</BodyText>
                <List color={setColor.brandWhite} isStarred>
                <li>
                      Online course of supporting resources to use after your
                      bootcamp.
                    </li>
                    <li>
                      Facebook group to share your questions in our community.
                    </li>
                    <li>
                      Invitation to join our Beginner's Japanese Membership.
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
              Check the available dates, and decide your preferred status
                  (Basic, Plus, or VIP)
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
              link="https://nihongoconnection.vipmembervault.com/products/courses/view/26"
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
                   Sat 16 - Sun 17 May 2020
                  </strong>
                </li>
                <li>
                  <strong>
                   Sat 23 - Sun 24 May 2020
                  </strong>
                </li>
                <li>
                  <strong>
                   Sat 30 - Sun 31 May 2020
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
                    <strong>Basic: </strong> £97.00
                  </li>
                  <li>
                    <strong>Plus: </strong> £147.00
                    <List subList={true}>
                      <li>One extra hour of lessons</li>
                      <li>Lunchtime Conversation Classes</li>
                    </List>
                  </li>
                  <li>
                    <strong>VIP: </strong> £325.00
                    <List subList={true}>
                      <li>One extra hour of lessons</li>
                      <li>One 1:1 lesson</li>
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
             Jess is a fantastic teacher with a lot of patience and skills,
                big recommendation!
            </BodyText>
            <BodyText font={setFont.fontSecondary}>
             - Leon
            </BodyText>
             
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
       
          <div title="How do I book?">
            <p>
              Decide if you want Basic, Plus or VIP and make the payment.
              After payment you will be asked to specify your preferred bootcamp date. We will contact you within 48 hours to
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
              <strong>Day One</strong> 09:00-13:45 for Basic and Plus /
                09:00-15:15 for VIPs. Online homework will be set and students
                are expected to complete it during their free time in the
                afternoon/evening.
            </p>
            <br></br>
             <p>
              <strong>Day Two</strong> 09:00-11:00 for Basic / 09:00-13:45 for
                Plus / 09:00-15:15 for VIPs.
            </p>
            <br></br>
             <p>
              {" "}
              The Basic Bootcamp consists of 5 hours of official classes.
                Three hours in the morning and then a lunch time lesson on Day
                1. In the morning of Day 2 there will be two more hours of
                lessons. If you choose the Plus option you get an extra hour with the
                teacher, plus lunch lesson on Day 2.
            </p>
            <br></br>
             <p>
             If you choose the VIP option you also get the “Plus” benefits
                and a 1-1 lesson package with your teacher. (Three 50 minute 1-1
                lessons in total which can be taken before, during or after the
                bootcamp).
            </p>{" "}
           
          </div>
          <div title="How old are participants?">
             <p>Past participants have been from 18 to 55 years of age.</p>
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
