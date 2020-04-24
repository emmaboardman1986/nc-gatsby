import React from "react"
import PropTypes from "prop-types"

const Heading = ({ variant, text }) => {
  const H = variant
  return <H>{text}</H>
}


Heading.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  text: PropTypes.string.isRequired,
}

Heading.defaultProps = {
  variant: "h1",
  text: "Placeholder Title",
}

export default Heading
