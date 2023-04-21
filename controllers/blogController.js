/*
const Blog = require("Blog");

module.exports = {
    fetchBlogPosts: (req,res,next) => {
    Blog.find({}).exec().then(
        blogData => {
            res.locals.blogData = blogData
            next()}
    ).catch(error => {console.log(error.message)})
    },
    saveBlogPost: () => {
    }
}
*/