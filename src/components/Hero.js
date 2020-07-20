import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import { Link } from "gatsby"

export const HTMLContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
)

const Hero = ({ content }) => (
  <div className="hero">
    <Img fluid={content.background.image.childImageSharp.fluid} />
    <div className="hero__card">
      <h6>{content.pretitle}</h6>
      <h1 className="mb-3 mx-auto">{content.title}</h1>
      <p className="mb-2">{content.intro}</p>
      {content.callbutton && (
        <a className="btn" href={content.callbutton.url}>{content.callbutton.text}</a>
      )}
      {content.pricesbutton && (
        <Link to={content.pricesbutton.url} className="btn">{content.pricesbutton.text}</Link>
      )}
      {content.homebutton && (
        <Link to={content.homebutton.url} className="btn">{content.homebutton.text}</Link>
      )}
    </div>
  </div>
)

Hero.propTypes = {
  content: PropTypes.object,
}

HTMLContent.propTypes = Hero.propTypes

export default Hero
