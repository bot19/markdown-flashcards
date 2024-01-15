import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Hubot-Sans.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="hubotFont"
    />,
    <link
      rel="preload"
      href="/fonts/Mona-Sans.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="monaFont"
    />,
  ]);
};
