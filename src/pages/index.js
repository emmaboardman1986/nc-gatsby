import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { RichText } from "prismic-reactjs"

import Layout from "../components/layout"
import Section from "../components/ui/section"
import Hero from "../components/hero"
import Logo from "../../static/assets/logo.svg"
import TitleJP from "../../static/assets/title--jp.svg"
import Gradient from "../components/ui/gradient"
import Card from "../components/ui/card"
import Grid from "../components/ui/grid"
import { setColor } from "../utils/styleHelpers"
import ResponsiveImg from "../components/ui/responsiveImg"
import GridCoordinates from "../components/ui/gridCoordinates"
import FormEmphasis from "../components/ui/formEmphasis"
import SpeechBubble from "../components/ui/speechBubble"
import StarredListItem from "../components/ui/starredListItem"
import Title from "../components/ui/title"
import Button from "../components/ui/button"
import Text from "../components/ui/text"
import "../components/layout.css"

export default function Homepage() {
  const { homepage } = useStaticQuery(graphql`
    query {
      homepage: prismicHomepage {
        id
        data {
          first_card_content_line_one {
            text
          }
          first_card_content_line_two {
            text
          }
          first_card_content_line_three {
            text
          }
          first_card_title {
            text
          }
          first_card_sub_title {
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
          second_card_content_line_three {
            text
          }
          second_card_title {
            text
          }
          second_card_subtitle {
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
        }
      }
    }
  `)

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <div>
        <Section
          bgColor={setColor.brandPrimary}
          bgImg={TitleJP}
          style={{ marginTop: `-2%` }}
        >
          <Hero>
            <div>
              <img src={Logo} alt="Nihongo Scotland"></img>
            </div>
            <div>
              <h1>{homepage.data.main_title.text}</h1>
              <h2>{homepage.data.sub_title.text}</h2>
            </div>
          </Hero>
        </Section>
        <Section bgColor="#f0f0f9">
          <Grid>
            <GridCoordinates
              colStart="1"
              colFinish="7"
              rowStart="1"
              rowFinish="6"
              mobileOrder="0"
            >
              <Gradient>
                <Card>
                  <h3>{homepage.data.first_card_title.text}</h3>
                  <h4>{homepage.data.first_card_sub_title.text}</h4>
                  <p>{homepage.data.first_card_content_line_one.text}</p>
                  {/* <p>{homepage.data.first_card_content_line_two.text}</p> */}
                  <p>{homepage.data.first_card_content_line_three.text}</p>

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
            <GridCoordinates
              colStart="1"
              colFinish="7"
              rowStart="7"
              rowFinish="12"
              mobileOrder="4"
            >
              <Gradient>
                <Card>
                  <h3>{homepage.data.second_card_title.text}</h3>
                  <h4>{homepage.data.second_card_subtitle.text}</h4>
                  <p>{homepage.data.second_card_content_line_one.text}</p>
                  {/* <p>{homepage.data.second_card_content_line_two.text}</p> */}
                  <p>{homepage.data.second_card_content_line_three.text}</p>

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

            <GridCoordinates
              colStart="8"
              colFinish="13"
              rowStart="7"
              rowFinish="12"
              mobileOrder="4"
            >
              <Gradient>
                <Card>
                  <h3>Beginner's Bootcamp</h3>
                  <h4>{homepage.data.second_card_subtitle.text}</h4>
                  <p>{homepage.data.second_card_content_line_one.text}</p>
                  {/* <p>{homepage.data.second_card_content_line_two.text}</p> */}
                  <p>{homepage.data.second_card_content_line_three.text}</p>

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

            <GridCoordinates
              colStart="8"
              colFinish="13"
              rowStart="1"
              rowFinish="6"
              mobileOrder="2"
            >
              <SpeechBubble bgColor={setColor.brandSecondary}>
                <h3>{homepage.data.speech_bubble_title.text}</h3>
                <p>Sign up for information on:</p>

                <ul>
                  <StarredListItem>Japanese-language outings</StarredListItem>
                  <StarredListItem>JLPT Preparation Bootcamp Weekends</StarredListItem>
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
            </GridCoordinates>
          </Grid>
        </Section>
      </div>
    </Layout>
  )
}
