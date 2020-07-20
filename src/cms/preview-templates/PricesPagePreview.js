import React from "react";
import PropTypes from "prop-types";

const PricesPagePreview = ({ entry, widgetFor }) => (
  <div
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  ></div>
);

PricesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PricesPagePreview;
