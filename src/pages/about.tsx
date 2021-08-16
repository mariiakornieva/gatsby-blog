import React from 'react';
import { PageProps, graphql } from "gatsby";
import Layout from '../components/layout';
import Seo from "../components/seo";

const AboutPage = (props: PageProps) => {
  const siteTitle = props.data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Seo title="About" />
      <article
        itemScope
      >
        <header>
          <h1 itemProp="headline">About Me</h1>
        </header>

        <section>
          <p>
            Hi there! My name is Mariia and I am a software engineer based in Odesa, Ukraine.
          </p>

          <p>
            I have been working as a software engineer since 2017 mostly with C++, some Python and a little bit of Java. Apart from that, I learned frontend technologies, namely HTML, CSS, Javascript, React and Redux to build web apps in my spare time.
          </p>
          <p>
            Speaking of education, I am taking BSc Computer Science degree at the University of London completely online. It allows me to have a full-time job while getting a world-class education.
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
