import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/legendsSystems/legendsDocs",
  },
  chat: {
    link: "https://discord.com/legendsSystems",
  },
  docsRepositoryBase: "https://github.com/legendsSystems/legendsDocs",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://legends.systems" target="_blank">
          legendsSystems
        </a>
        .
      </span>
    ),
  },
  navigation: {
    prev: true,
    next: true,
  },
  gitTimestamp: "Last updated on",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – SWR",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="The next site builder" />
    </>
  ),
  logo: (
    <>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
        legendsSystems
      </span>
    </>
  ),
};

export default config;
