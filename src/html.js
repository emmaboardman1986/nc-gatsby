import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  // const windowEndPoint;
  // if (typeof window !== `undefined`) {
  //   windowEndPoint = window.prismic = {
  //     endpoint: 'https://nihongoscotland.cdn.prismic.io/api/v2'
  //   }
  // }
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      {/* <script>
      if (typeof window !== `undefined`) {
        window.prismic = {
          endpoint: 'https://nihongoscotland.cdn.prismic.io/api/v2'
        }
      }
      </script> */}
      <script src=//prismic.io/prismic.js?repo=nihongoscotland></script>
      
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
