module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("site.css");
  eleventyConfig.addPassthroughCopy("slides");
  eleventyConfig.addPassthroughCopy(".nojekyll");
};
