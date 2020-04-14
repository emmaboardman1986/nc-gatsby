import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Section from "../components/layout/section"
import AuxHero from "../components/ui/aux-hero"

import { setColor } from "../styles/styleHelpers"

export default function AboutUsPage({ data }) {
  return (
    <Layout>
      <div>
        <Section bgColor={setColor.brandPrimary}>
          <AuxHero>
            <h1>Beginner's Bootcamp</h1>
          </AuxHero>
        </Section>
      </div>
    </Layout>
  )
}
