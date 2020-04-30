import React from "react"
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

import { setColor } from "../styles/styleHelpers"

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
  function createMarkup(content) {
    return { __html: content }
  }

  return (
    <Layout>
      <div>
        <Section bgColor={setColor.brandPrimary}>
          <AuxHero>
            <h1>{data.fridayStudyClub.data.friday_study_club_title.text}</h1>
          </AuxHero>
        </Section>
       
     
          
          <Section bgColor={setColor.brandPrimaryLight}>
      <VerticalSpacing size="7x-large--negative" sizeMd="-10rem">
            <FlexContainer justifyContent={{ _: "center" }}>
              <Gradient widthMd="80%">
             
                  <Card>
                  <Emphasis>
                  <Card >
                  <Note>
                    <p>PLEASE NOTE, due to the ongoing covid-19 pandemic, <TextLink link="https://zoom.us/j/169628752" isExternal>Nihongo Scotland are now meeting online.</TextLink></p>
                    <p>You are kindly invited to join us on <TextLink link="https://zoom.us/j/169628752" isExternal>Zoom</TextLink> every Friday night between 6pm and 8pm BST, UK</p>
                    <p>
                      <span>You will need a Zoom account to join the meeting.</span>
                    </p>
                    </Note>
                    </Card>
                  </Emphasis>
                  <VerticalSpacing size="x-large"></VerticalSpacing>
                    <div
                      dangerouslySetInnerHTML={createMarkup(
                        data.fridayStudyClub.data.friday_study_club_details.html
                      )}
                    ></div>
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
