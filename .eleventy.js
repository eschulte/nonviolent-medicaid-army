const config = {};

module.exports = function(eleventyConfig) {
  // Customized Markdown Export.
  let markdownIt = require("markdown-it");
  let md = markdownIt({html: true})
  // md.use(require("markdown-it-deflist"));
  md.use(require("markdown-it-anchor"));
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy("img");

  // eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));

  return config;
};
