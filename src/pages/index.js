import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Section from "../components/layout/section"
import Hero from "../components/home/hero"
import Logo from "../../static/assets/logo.svg"
import TitleJP from "../../static/assets/hero__bg--jp.svg"
import Gradient from "../components/contentContainers/gradient"
import Card from "../components/contentContainers/card"
import Grid from "../components/layout/grid"
import { setColor } from "../styles/styleHelpers"
import GridCoordinates from "../components/layout/gridCoordinates"
import FormEmphasis from "../components/ui/formEmphasis"
import SpeechBubble from "../components/contentContainers/speechBubble"
import StarredListItem from "../components/ui/starredListItem"
import Button from "../components/ui/button"
import VerticalSpacing from "../components/spacing/VerticalSpacing"
import "../components/layout.css"

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
            <div>
              <img src={Logo} alt="Nihongo Scotland"></img>
            </div>
            <div>
              <h1>{data.homepage.data.main_title.text}</h1>
              <p>{data.homepage.data.sub_title.text}</p>
            </div>
          </Hero>
        </Section>
        <Section bgColor="#f0f0f9">
          {/* <Margin
             marginHeight="-6.5rem"
             marginHeightSm="-8rem"
             marginHeightMd="-0.5rem"
          ></Margin> */}
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
              <Gradient>
                <Card>
                  <h2>{data.homepage.data.second_card_title.text}</h2>
                  <h3>{data.homepage.data.second_card_sub_title.text}</h3>
                  <p>{data.homepage.data.second_card_content_line_one.text}</p>

                  <p>{data.homepage.data.second_card_content_line_two.text}</p>

                  <Button
                    link="/friday-study-club"
                    linkText="Find out more"
                    bgColor={setColor.brandPrimary}
                  >
                    Find out more
                  </Button>
                </Card>
              </Gradient>
              {/* <Margin marginBottom="1.5rem"></Margin> */}
            </GridCoordinates>

            {/* Speech Bubble decorative */}
            <GridCoordinates
              colStart="15"
              colFinish="25"
              rowStart="3"
              rowFinish="22"
              mobileOrder="2"
            >
              <div className="speech-bubble__background"></div>
            </GridCoordinates>
            {/* Speech Bubble w/ content*/}
            {/* <Margin  marginHeight="1.5rem"></Margin> */}
            <GridCoordinates
              colStart="15"
              colFinish="25"
              rowStart="1"
              rowFinish="18"
              mobileOrder="2"
            >

              <SpeechBubble pageType="Home">
                <h2>{data.homepage.data.speech_bubble_title.text}</h2>
                <p>Sign up for information on:</p>

                <ul>
                  <StarredListItem>Japanese-language outings</StarredListItem>
                  <StarredListItem>
                    JLPT Preparation Bootcamp Weekends
                  </StarredListItem>
                  <StarredListItem>Friday study-club resources</StarredListItem>
                </ul>

                <FormEmphasis>
                  <div>
                    <label>Email address</label>
                    <input type="email"></input>
                  </div>
                  <div>
                    <input type="checkbox"></input>
                    <span className="muted">
                      I consent to stuff. I consent to stuff. I consent to stuff
                    </span>
                  </div>
                </FormEmphasis>
              </SpeechBubble>
              {/* <Margin  aHeight="6rem"></Margin> */}
            </GridCoordinates>
            {/* Beginners Bootcamp */}
            <GridCoordinates
              colStart="16"
              colFinish="25"
              rowStart="14"
              rowFinish="24"
              mobileOrder="4"
            >
              <Gradient>
                <Card>
                  <h2>{data.homepage.data.third_card_title.text}</h2>
                  <h3>{data.homepage.data.third_card_sub_title.text}</h3>
                  <p>{data.homepage.data.third_card_content_line_1.text}</p>

                  <p>{data.homepage.data.third_card_content_line_2.text}</p>

                  <Button
                    link="/friday-study-club"
                    linkText="Find out more"
                    bgColor={setColor.brandPrimary}
                  >
                    Find out more
                  </Button>
                </Card>
              </Gradient>
              {/* <Margin marginBottom="1rem"></Margin> */}
            </GridCoordinates>
          </Grid>
        </Section>
      </div>
    </Layout>
  )
}
