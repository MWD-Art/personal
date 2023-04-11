const eleventySass = require('@11tyrocks/eleventy-plugin-sass-lightningcss');
const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  eleventyConfig.addPassthroughCopy('./src/assets/');

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
