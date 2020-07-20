import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

export default function Footer() {
  const queryData = useStaticQuery(graphql`
    query FooterComponent {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(frontmatter: { templateKey: { eq: "footer" } }) {
        frontmatter {
          title
          links {
            url
            text
          }
        }
      }
    }
  `);
  const data = queryData.markdownRemark.frontmatter;

  return (
    <footer className="bg-gold p-3">
      <div className="mx-auto mt-3 text-center">
        {JSON.stringify(data.links)}

        {data.links.map(function (link, index) {
          return (
            <Link to={link.url} className="btn btn--black" key={index}>
              {link.text}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
