const Blog = require("../models/blog");


module.exports = {
    fetchBlogPosts: (req, res, next) => {
        let searchParameters = {};
        if (req.query.searchedWord){
            searchParameters = {"name":/req.query.searcherWord/,"content":/req.query.searchedWord/}
        }
        Blog.find(searchParameters).exec().then(blogData => {
            res.locals.blogData = blogData;
            next();
        }).catch (error => {
            console.log(`Error fetching posts: ${error.message}`)
            next(error)}
        )},
    insertBlogPost: (req, res, next) => {
        Blog.create({name: req.body.title, content: req.body.post}
        ).then(blogData => {
            res.locals.redirect = "/blog";
            next();
        }).catch(error => {
            console.log(`Error while inserting the post: ${error.message}`)
            next(error)
        })
    }
}




