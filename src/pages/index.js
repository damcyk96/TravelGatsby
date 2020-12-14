import React from "react"
import { Link } from "gatsby"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our fav destinations" />
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
