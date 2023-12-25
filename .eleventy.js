const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy({ "src/images": "images" });
    eleventyConfig.addPassthroughCopy({ "src/videos": "videos" });
    eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });

    // Add related posts
    eleventyConfig.addShortcode("related", function (title, url) {
        return `<a href="${url}" class="related">${title}</a>
        `
    });

    // eleventyConfig.addShortcode("relatedPosts", function (currentPost, allPosts) {
    //     const related = [];

    //     // Verifique as tags do post atual
    //     const currentTags = currentPost.data.tags;

    //     // Itere sobre todos os posts para encontrar os relacionados
    //     allPosts.forEach(post => {
    //         // Certifique-se de não incluir o próprio post atual
    //         if (post.inputPath !== currentPost.inputPath) {
    //             // Verifique se há sobreposição de tags
    //             const commonTags = post.data.tags.filter(tag => currentTags.includes(tag));

    //             // Se houver tags em comum, adicione o post relacionado
    //             if (commonTags.length > 0) {
    //                 related.push(post);
    //             }
    //         }
    //     });

    //     return related;
    // });

    return {
        dir: {
            input: "src",
            output: "dist"
        },
    };
};
