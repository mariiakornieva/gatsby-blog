import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Seo title="Home" />
      <Bio />
    </Layout>
  );
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
