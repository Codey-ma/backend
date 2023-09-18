const Post = require('../models/Post');

exports.getPosts = async (tags = [], sort = 'createdAt', titleSearch = '') => {
    try {
        const posts = await Post.find({
            tags: {
                $in: tags,
            },
            title: {
                $regex: titleSearch,
                $options: 'i',
            },
            category: 'Blog',
        }).sort(sort);

        return posts;
    } catch (error) {
        console.log("Error getting posts: ", error);
    }
}

exports.getPost = async (id) => {
    try {
        const post = await Post.findById(id);

        return post;
    } catch (error) {
        console.log("Error getting post: ", error);
    }
}

exports.createPost = async (postData) => {
    try {
        const post = await Post.create(postData);

        return post;
    } catch (error) {
        console.log("Error creating post: ", error);
    }
}

exports.updatePost = async (id, postData) => {
    try {
        const post = await Post.findByIdAndUpdate(id, postData, {
            new: true,
            runValidators: true,
        });
        
        return post;
    } catch (error) {
        console.log("Error updating post: ", error);
    }
}

exports.deletePost = async (id) => {
    try {
        const post = await Post.findByIdAndDelete(id);

        return post;
    } catch (error) {
        console.log("Error deleting post: ", error);
    }
}