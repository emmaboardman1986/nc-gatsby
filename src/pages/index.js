import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Section from "../components/layout/Section"
import Hero from "../components/home/Hero"
import Logo from "../../static/assets/logo.svg"
import TitleJP from "../../static/assets/hero__bg--jp.svg"
import Gradient from "../components/contentContainers/Gradient"
import Card from "../components/contentContainers/Card"

import { setColor, breakpoint, setFont } from "../styles/styleHelpers"
import styled from "styled-components"

import SpeechBubble from "../components/contentContainers/SpeechBubble"

import Button from "../components/ui/Button"
import VerticalSpacing from "../components/spacing/VerticalSpacing"
import "../components/layout.css"
import FlexContainer from "../components/layout/FlexContainer/FlexContainer"
import MailChimp from "../components/vendor/MailChimp"
import Heading from "../components/ui/typography/Heading"
import Outline from "../components/contentContainers/Outline"
import Subtitle from "../components/ui/Subtitle"
import BodyText from "../components/ui/BodyText"

export const query = graphql`
  query {
    homepage: prismicHomepage(id: {}) {
      data {
        first_card_content_line_one {
          text
        }
        first_card_content_line_two {
          text
        }
        first_card_sub_title1 {
          text
        }
        first_card_title {
          text
        }
        main_title {
          text
        }
        second_card_content_line_one {
          text
        }
        second_card_content_line_two {
          text
        }
        second_card_sub_title {
          text
        }
        second_card_title {
          text
        }
        speech_bubble_content {
          text
        }
        speech_bubble_title {
          text
        }
        sub_title {
          text
        }
        third_card_content_line_1 {
          text
        }
        third_card_content_line_2 {
          text
        }
        third_card_sub_title {
          text
        }
        third_card_title {
          text
        }
      }
    }
  }
`
export default function Homepage({ data }) {
  return (
    <Layout>
      <div>
        <Section bgColor={setColor.brandPrimary} bgImg={TitleJP}>
          <Hero>
            <FlexContainer
              justifyContent={{ _: "center", sm: "flex-start" }}
              alignItems={{ _: "flex-start" }}
            >
              <img src={Logo} alt="Nihongo Scotland"></img>
            </FlexContainer>
            <FlexContainer
              justifyContent={{ _: "center", sm: "flex-end" }}
              flexDirection={{ _: "column" }}
              flex={1}
            >
              <VerticalSpacing size="x-large" sizeMd="2rem"></VerticalSpacing>

              <Heading text={data.homepage.data.main_title.text}></Heading>
              <VerticalSpacing />
              <Subtitle>{data.homepage.data.sub_title.text}</Subtitle>
              <VerticalSpacing />
            </FlexContainer>
          </Hero>
        </Section>
        <Section bgColor={setColor.brandPrimaryLight} noPaddingBottom>
          <FlexContainer justifyContent={{ _: "center", sm: "space-between" }}>
            <Column>
              {/* Friday Study Club */}
              <VerticalSpacing
                size="7x-large--negative"
                sizeMd="0"
              ></VerticalSpacing>
              <Gradient>
                <Card>
                  <Heading
                    variant="h2"
                    text={data.homepage.data.first_card_title.text}
                  ></Heading>
                  <Heading
                    variant="h3"
                    text={data.homepage.data.first_card_sub_title1.text}
                  ></Heading>
                  <BodyText font={setFont.fontSecondary}>
                    {data.homepage.data.first_card_content_line_one.text}
                  </BodyText>
                  <BodyText font={setFont.fontSecondary}>
                    {data.homepage.data.first_card_content_line_two.text}
                  </BodyText>

                  <Button link="/friday-study-club">Find out more</Button>
                </Card>
              </Gradient>

              {/* JLPT Bootcamp */}
              <VerticalSpacing size="x-large"></VerticalSpacing>
              <Gradient>
                <Card>
                  <Heading
                    variant="h2"
                    text={data.homepage.data.second_card_title.text}
                  ></Heading>
                  <Heading
                    variant="h3"
                    text={data.homepage.data.second_card_sub_title.text}
                  ></Heading>
                  <BodyText font={setFont.fontSecondary}>
                    {data.homepage.data.second_card_content_line_one.text}
                  </BodyText>

                  <BodyText font={setFont.fontSecondary}>
                    {data.homepage.data.second_card_content_line_two.text}
                  </BodyText>

                  <Button link="/jlpt-bootcamp">Find out more</Button>
                </Card>
              </Gradient>

              {/* Beginner's Bootcamp  */}
              <VerticalSpacing size="x-large"></VerticalSpacing>
              <Gradient>
                <Card>
                  <Heading
                    variant="h2"
                    text={data.homepage.data.third_card_title.text}
                  ></Heading>
                  <Heading
                    variant="h3"
                    text={data.homepage.data.third_card_sub_title.text}
                  ></Heading>
                  <BodyText font={setFont.fontSecondary}>{data.homepage.data.third_card_content_line_1.text}</BodyText>

                  <BodyText font={setFont.fontSecondary}>{data.homepage.data.third_card_content_line_2.text}</BodyText>

                  <Button link="/beginners-bootcamp">Find out more</Button>
                </Card>
              </Gradient>
            </Column>

            <FlexContainer
              containerWidth={{ _: "100%", md: "48%" }}
              flexDirection={{ _: "column" }}
            >
              <VerticalSpacing
                size="x-large"
                sizeMd="6rem"
                orderDesktop={3}
              ></VerticalSpacing>
              <Outline
                color={setColor.brandPrimary}
                font="AnonymousPro-Regular"
                orderDesktop={4}
              >
                <Card>
                  <Heading variant="h2" text="About Us"></Heading>
                  <VerticalSpacing></VerticalSpacing>

                  <BodyText font={setFont.fontSecondary}>
                    Nihongo Scotland is a Japanese-language study club run by
                    volunteers.
                    </BodyText>

                  <BodyText font={setFont.fontSecondary}>
                    Our purpose is provide an immersive study environment for
                    all{" "}
                  </BodyText>

                  <Button link="/about-us">Find out more</Button>
                </Card>
              </Outline>

              <VerticalSpacing
                sizeMd="-10rem"
                orderDesktop={1}
              ></VerticalSpacing>
              <SpeechBubble orderDesktop={2}>
                <Heading
                  variant="h2"
                  text={data.homepage.data.speech_bubble_title.text}
                  color={setColor.brandWhite}
                ></Heading>
                <BodyText color={setColor.brandWhite}>Subscribe to get invited to our events</BodyText>
                <MailChimp emphasisColor={setColor.brandSecondaryLight} />
              </SpeechBubble>
              <VerticalSpacing size="4x-large" sizeMd="0"></VerticalSpacing>
            </FlexContainer>
          </FlexContainer>
        </Section>
      </div>
    </Layout>
  )
}

const Column = styled.div`
  width: 100%;
  ${breakpoint.md`
width: 48%;`};
`
