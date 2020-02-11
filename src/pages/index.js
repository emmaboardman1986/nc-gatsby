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
import { setColor } from "../styleHelpers"
import ResponsiveImg from "../components/ui/responsiveImg"
import GridCoordinates from "../components/ui/gridCoordinates"
import SpeechBubble from "../components/ui/speechBubble"
import Title from "../components/ui/title"
import Text from "../components/ui/text"
import "../components/layout.css"

export default function Homepage() {
  const { homepage } = useStaticQuery(graphql`
    query {
      homepage: prismicHomepage {
        id
        data {
          first_card_content {
            text
            html
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
          second_card_content {
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
    // <Layout>
    // <SEO title="Home" />
    <div>
      <Section bgColor={setColor.brandPrimary} bgImg={TitleJP}>
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
      <Section>
        <Grid>
          <GridCoordinates
            colStart="1"
            colFinish="7"
            rowStart="1"
            rowFinish="6"
          >
            <Gradient>
              <Card>
                <h3>{homepage.data.first_card_title.text}</h3>
                <h4>{homepage.data.first_card_sub_title.text}</h4>
                <p>{homepage.data.first_card_content.text}</p>
                <button>Learn more</button>
              </Card>
            </Gradient>
          </GridCoordinates>
          <GridCoordinates
            colStart="1"
            colFinish="10"
            rowStart="7"
            rowFinish="12"
          >
            <Gradient>
              <Card>
                <h3>{homepage.data.second_card_title.text}</h3>
                <h4>{homepage.data.second_card_subtitle.text}</h4>
                <p>{homepage.data.second_card_content.text}</p>
                <button>Learn more</button>
              </Card>
            </Gradient>
          </GridCoordinates>
          <GridCoordinates
            colStart="9"
            colFinish="14"
            rowStart="5"
            rowFinish="12"
          >
            <SpeechBubble>
              <p>TEXT</p>
            </SpeechBubble>
          </GridCoordinates>
          ∏
          <GridCoordinates
            colStart="8"
            colFinish="13"
            rowStart="2"
            rowFinish="7"
          >
            <SpeechBubble bgColor="red">
              <p>TEXT</p>
            </SpeechBubble>
          </GridCoordinates>
        </Grid>
      </Section>
    </div>

    // </Layout>
  )
}
