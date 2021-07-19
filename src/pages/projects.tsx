import React from 'react';
import { PageProps, graphql } from "gatsby";
import Layout from '../components/layout';
import Seo from "../components/seo"

const ProjectsPage = (props: PageProps) => {
  const siteTitle = props.data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Seo title="My Projects" />
      <h1>My Projects will be listed here</h1>
    </Layout>
  );
};

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
