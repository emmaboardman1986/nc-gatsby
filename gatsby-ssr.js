exports.onRenderBody = (
  { setHeadComponents },
  pluginOptions
) => {
    const windowEndPoint =  window.prismic = {
        endpoint: 'https://nihongoscotland.cdn.prismic.io/api/v2'
      };
  setHeadComponents([
     windowEndPoint,
    <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js?new=true"></script>,
    ]);
}