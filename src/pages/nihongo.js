import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Section from "../components/layout/Section"
import Gradient from "../components/contentContainers/Gradient"
import Card from "../components/contentContainers/Card"
import AuxHero from "../components/ui/AuxHero"
import Grid from "../components/layout/Grid"
import GridCoordinates from "../components/layout/GridCoordinates"
import VerticalSpacing from "../components/spacing/VerticalSpacing"
import Emphasis from "../components/contentContainers/Emphasis"
import styled from "styled-components"

import { setColor } from "../styles/styleHelpers"

export const query = graphql`
  query {
    nihongo: prismicNihongo {
      data {
        japanese_page_content {
          html
        }
        japanese_page_title {
          text
        }
      }
    }
  }
`

export default function JapanesePage({ data }) {
  function createMarkup(content) {
    return { __html: content }
  }

  return (
    <Layout>
      <div>
        <Section bgColor={setColor.brandPrimary}>
          <AuxHero>
            <h1>{data.nihongo.data.japanese_page_title.text}</h1>
          </AuxHero>
        </Section>

        <Section>
          <VerticalSpacing size="8x-large--negative" sizeMd="-12rem">
            <Grid>
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
                  <Emphasis>
                  <Card >
                  <Note>
                    <p>PLEASE NOTE, due to the ongoing covid-19 pandemic, <a href="https://zoom.us/j/169628752" target="_blank">Nihongo Scotland are now meeting online.</a></p>
                    <p>You are kindly invited to join us on <a href="https://zoom.us/j/169628752" target="_blank">Zoom</a> every Friday night between 6pm and 8pm</p>
                    <p>
                      <span>You will need a Zoom account to join the meeting.</span>
                    </p>
                    </Note>
                    </Card>
                  </Emphasis>
                  <VerticalSpacing size="x-large"></VerticalSpacing>
                    <div
                      dangerouslySetInnerHTML={createMarkup(
                        data.nihongo.data.japanese_page_content.html
                      )}
                    ></div>
                  </Card>
                </Gradient>
              </GridCoordinates>
            </Grid>
          </VerticalSpacing>
        </Section>
      </div>
    </Layout>
  )
}

const Note = styled.div`
p {
  font-family: "Poppins-Regular";
line-height: 1.5rem;
text-align: center;
}
span {
  font-family: "Poppins-SemiBold";
}

a {
  all: inherit;
  text-decoration: underline;
  font-family: "Poppins-SemiBold";
  color: ${setColor.brandPrimary};
  font-size: 1.1rem;
  display: inline-block;
  &:hover {
      background-color: ${setColor.brandPrimary};
      color: ${setColor.brandWhite};
    }
}


`
