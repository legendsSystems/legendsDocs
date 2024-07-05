import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>legendsDocs</span>,
  project: {
    link: "https://github.com/legendsSystems/legendsDocs",
  },
  chat: {
    link: "https://discord.com/legendsSystems",
  },
  docsRepositoryBase: "https://github.com/legendsSystems/legendsDocs",
  footer: {
    text: "legendsSystems",
  },
  gitTimestamp: "Last updated on",
};

export default config;
