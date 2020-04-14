import React from "react"
import Layout from "../components/layout/Layout"
import Section from "../components/layout/Section"
import AuxHero from "../components/ui/AuxHero"

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
