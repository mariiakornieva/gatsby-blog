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
      <iframe
        src="https://mariiakornieva.substack.com/embed"
        width="480"
        height="210"
        style={{
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: '#EEE',
          background: 'white',
        }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
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
