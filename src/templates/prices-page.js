import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const PricesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return <Layout>{JSON.stringify(frontmatter)}</Layout>;
};

PricesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PricesPage;

export const pricesPageQuery = graphql`
  query PricesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        templateKey
      }
    }
  }
`;
