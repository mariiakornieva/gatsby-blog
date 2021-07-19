import React from 'react';
import { PageProps, graphql } from "gatsby";
import Layout from '../components/layout';
import Seo from "../components/seo"

const About = (props: PageProps) => {
  const siteTitle = props.data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Seo title="About" />
      <h1>About</h1>
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
