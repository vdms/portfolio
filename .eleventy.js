const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy({ "src/images": "images" });
    eleventyConfig.addPassthroughCopy({ "src/videos": "videos" });

    // Add related posts
    eleventyConfig.addShortcode("related", function(title, url) {
        return `<a href="${url}" class="related">${title}</a>
        `
    });

    return {
        dir: {
            input: "src",
            output: "dist"
        },
    };
};
