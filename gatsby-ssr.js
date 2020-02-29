import React from "react";

exports.onRenderBody = (
  { setHeadComponents },
  pluginOptions
) => {
  setHeadComponents([
    <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js?new=true"></script>,
    ]);
}