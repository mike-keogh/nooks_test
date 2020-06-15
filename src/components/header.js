import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { allDatoCmsNav } = useStaticQuery(graphql`
    query NavQuery {
      allDatoCmsNav {
        edges {
          node {
            logo {
              url
            }
            navBlock {
              title
              url
              slug
            }
          }
        }
      }
    }
  `);
  const nav = allDatoCmsNav.edges[0].node;
  console.log("nav", nav);
  return (
    <div className="bg-white-300 h-8">
      <div className="relative">
        <div className="absolute mx-auto inset-x-0">
          <img src={nav.logo.url} className="h-8" />
        </div>
      </div>
    </div>
  );
}

export default Header;
