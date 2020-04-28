import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Section from "../components/layout/Section"
import Hero from "../components/home/Hero"
import Logo from "../../static/assets/logo.svg"
import TitleJP from "../../static/assets/hero__bg--jp.svg"
import Gradient from "../components/contentContainers/Gradient"
import Card from "../components/contentContainers/Card"
import Grid from "../components/layout/Grid"
import { setColor } from "../styles/styleHelpers"
import GridCoordinates from "../components/layout/GridCoordinates"
import Emphasis from "../components/contentContainers/Emphasis"
import SpeechBubble from "../components/contentContainers/SpeechBubble"
import StarredListItem from "../components/ui/StarredListItem"
import Button from "../components/ui/Button"
import VerticalSpacing from "../components/spacing/VerticalSpacing"
import "../components/layout.css"
import FlexContainer from "../components/layout/FlexContainer/FlexContainer"
import MailChimp from "../components/vendor/MailChimp"

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
              justifyContent={{ _: "center" }}
              alignItems={{ _: "flex-start" }}
            >
              <img src={Logo} alt="Nihongo Scotland"></img>
            </FlexContainer>
            <FlexContainer
              justifyContent={{ _: "center", sm: "flex-end" }}
              flexDirection={{ _: "column" }}
              flex={1}
            >
              <h1>{data.homepage.data.main_title.text}</h1>
              <p>{data.homepage.data.sub_title.text}</p>
            </FlexContainer>
          </Hero>
        </Section>
        <Section>
          <VerticalSpacing size="7x-large--negative" sizeMd="-0.5rem">
            <Grid
              gridColNumber="24"
              gridColUnit="1fr"
              gridRowNumber="26"
              gridRowUnit="2.5rem"
            >
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
                    <h2>{data.homepage.data.first_card_title.text}</h2>
                    <h3>{data.homepage.data.first_card_sub_title1.text}</h3>
                    <p>{data.homepage.data.first_card_content_line_one.text}</p>
                    <p>{data.homepage.data.first_card_content_line_two.text}</p>

                    <Button
                      link="/friday-study-club"
                      linkText="Find out more"
                      bgColor={setColor.brandPrimary}
                    >
                      Find out more
                    </Button>
                  </Card>
                </Gradient>
              </GridCoordinates>
              {/* JLPT Bootcamp */}
              <GridCoordinates
                colStart="1"
                colFinish="14"
                rowStart="12"
                rowFinish="21"
                mobileOrder="4"
              >
                <VerticalSpacing size="5x-large" sizeMd="0">
                  <Gradient>
                    <Card>
                      <h2>{data.homepage.data.second_card_title.text}</h2>
                      <h3>{data.homepage.data.second_card_sub_title.text}</h3>
                      <p>
                        {data.homepage.data.second_card_content_line_one.text}
                      </p>

                      <p>
                        {data.homepage.data.second_card_content_line_two.text}
                      </p>

                      <Button
                        link="/jlpt-bootcamp"
                        linkText="Find out more"
                        bgColor={setColor.brandPrimary}
                      >
                        Find out more
                      </Button>
                    </Card>
                  </Gradient>
                </VerticalSpacing>
              </GridCoordinates>

              {/* Speech Bubble decorative */}
              <GridCoordinates
                colStart="15"
                colFinish="25"
                rowStart="3"
                rowFinish="22"
                mobileOrder="2"
              >
                <VerticalSpacing size="large"></VerticalSpacing>
                <div className="speech-bubble__background"></div>
              </GridCoordinates>
              {/* Speech Bubble w/ content*/}

              <GridCoordinates
                colStart="15"
                colFinish="25"
                rowStart="1"
                rowFinish="18"
                mobileOrder="2"
              >
                <VerticalSpacing
                  size="large"
                  sizeMd="-7rem"
                  sizeLg="-10rem"
                ></VerticalSpacing>
                <SpeechBubble pageType="Home">
                  <h2>{data.homepage.data.speech_bubble_title.text}</h2>
                  <p>Subscribe to get invited to our events</p>
                  <MailChimp />
                

                 
                </SpeechBubble>
              </GridCoordinates>
              {/* </VerticalSpacing> */}
              {/* Beginners Bootcamp */}
              <GridCoordinates
                colStart="1"
                colFinish="14"
                rowStart="24"
                rowFinish="25"
                mobileOrder="4"
              >

                <VerticalSpacing size="large" sizeMd="0">
                  <Gradient>
                    <Card>
                      <h2>{data.homepage.data.third_card_title.text}</h2>
                      <h3>{data.homepage.data.third_card_sub_title.text}</h3>
                      <p>{data.homepage.data.third_card_content_line_1.text}</p>

                      <p>{data.homepage.data.third_card_content_line_2.text}</p>

                      <Button
                        link="/beginners-bootcamp"
                        linkText="Find out more"
                        bgColor={setColor.brandPrimary}
                      >
                        Find out more
                      </Button>
                    </Card>
                  </Gradient>
                </VerticalSpacing>
              </GridCoordinates>
            </Grid>
          </VerticalSpacing>
        </Section>
      </div>
    </Layout>
  )
}
