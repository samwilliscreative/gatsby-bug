import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
)

const Prices = ({ content }) => (
  <div className="prices">
    <h2>{content.title}</h2>
    {content.subtitle && (
      <div className="row">
        <div className="col-9"><p><em>{content.subtitle}</em></p></div>
      </div>
    )}
    {content.prices.map(function (item, index) {
        return (
         <div className="row" key={index}>
            <div className="col-9">{item.service}</div>
            <div className="col-3 text-right">{item.price}</div>
          </div>
        );
      })}
  </div>
)

Prices.propTypes = {
  content: PropTypes.object,
}

HTMLContent.propTypes = Prices.propTypes

export default Prices
