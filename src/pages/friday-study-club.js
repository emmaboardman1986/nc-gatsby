import React, { useContext} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Section from "../components/layout/Section"
import Gradient from "../components/contentContainers/Gradient"
import Card from "../components/contentContainers/Card"
import AuxHero from "../components/ui/AuxHero"
import VerticalSpacing from "../components/spacing/VerticalSpacing"
import Emphasis from "../components/contentContainers/Emphasis"
import styled from "styled-components"
import MailChimpFooter from "../components/footer/MailChimpFooter"
import FlexContainer from "../components/layout/FlexContainer/FlexContainer"
import TextLink from "../components/ui/TextLink"
import Heading from "../components/ui/typography/Heading"
import BodyText from "../components/ui/typography/BodyText"

import { BannerContext } from "../context/UpdateBannerContext"

import { setColor, setFont } from "../styles/styleHelpers"

export const query = graphql`
  query {
    fridayStudyClub: prismicFridayStudyClub {
      data {
        friday_study_club_details {
          html
        }
        friday_study_club_title {
          text
        }
      }
    }
  }
`

export default function FridayStudyClubPage({ data }) {
  const { state } = useContext(BannerContext)
  function createMarkup(content) {
    return { __html: content }
  }

  return (
    <Layout>
      <div>
        <Section bgColor={setColor.brandPrimary}>
          <AuxHero isBannerDisplayed={state.isBannerDisplayed}>
            <Heading
              variant="h1"
              text={data.fridayStudyClub.data.friday_study_club_title.text}
            ></Heading>
          </AuxHero>
        </Section>

        <Section bgColor={setColor.brandPrimaryLight}>
          <VerticalSpacing size="7x-large--negative" sizeMd="-10rem">
            <FlexContainer justifyContent={{ _: "center" }}>
              <Gradient widthMd="80%">
                <Card>
                  <Emphasis>
                    <Card>
                      <Note>
                        <BodyText>
                          PLEASE NOTE, due to the ongoing covid-19 pandemic,{" "}
                          <TextLink
                            link="https://zoom.us/j/169628752"
                            isExternal
                          >
                            Nihongo Scotland are now meeting online.
                          </TextLink>
                        </BodyText>
                        <BodyText>
                          You are kindly invited to join us on{" "}
                          <TextLink
                            link="https://zoom.us/j/169628752"
                            isExternal
                          >
                            Zoom
                          </TextLink>{" "}
                          every Friday night between 6pm and 8pm BST, UK
                        </BodyText>
                        <BodyText>
                          <span>
                            You will need a Zoom account to join the meeting.
                          </span>
                        </BodyText>
                      </Note>
                    </Card>
                  </Emphasis>
                  <VerticalSpacing size="x-large"></VerticalSpacing>
                  {/* TODO: establish how to use body text alongside prismic content, revisit how it is included */}
                  <Content
                    dangerouslySetInnerHTML={createMarkup(
                      data.fridayStudyClub.data.friday_study_club_details.html
                    )}
                  ></Content>
                </Card>
              </Gradient>
            </FlexContainer>
          </VerticalSpacing>
        </Section>
        <MailChimpFooter></MailChimpFooter>
      </div>
    </Layout>
  )
}

const Note = styled.div`
  p {
    text-align: center;
  }
  span {
    font-family: "Poppins-SemiBold";
  }
`

const Content = styled.div`
p {
  font-family: ${setFont.fontSecondary};
  font-size: 1.1rem;
  letter-spacing: 0.01rem;
  line-height: 1.2;
  color: ${setColor.brandBlack};
}`
