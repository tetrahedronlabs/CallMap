import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontSize: "1.5rem", lineHeight: "2rem", fontWeight: 700 }}>
      CallMap
    </span>
  ),
  project: {
    link: "https://github.com/CallMap/CallMap",
  },
  feedback: { content: null },
  //banner: {
  //key: "api-release",
  //text: (
  //<a href="https://callmap.app/developers" target="_blank">
  //🎉 CallMap API is released. Read more →
  //</a>
  //),
  //},
  editLink: {
    text: "Edit this page on GitHub →",
  },
  docsRepositoryBase: "https://github.com/CallMap/CallMap/tree/main/apps/docs",
  footer: {
    text: <p>© {new Date().getFullYear()} CallMap</p>,
  },
};

export default config;
