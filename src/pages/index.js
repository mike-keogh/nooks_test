import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import NetworkPage from "../components/network";
import CommunitiesPage from "../components/communities";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage(props) {
  console.log("data index", props);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <NetworkPage
        data={props.pageResources.json.data.allDatoCmsHomepage.edges[0].node}
      />
      <CommunitiesPage />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query AboutQuery {
    allDatoCmsHomepage {
      edges {
        node {
          id
          title
          backgroundImage {
            url
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  pageResources: PropTypes.node,
};

export default IndexPage;
