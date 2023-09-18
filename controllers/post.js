const post = require('../services/post');

exports.getPosts = async (req, res) => {
    try {
        const posts = await post.getPosts();

        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {
                posts,
            },
        });
    }
    catch (error) {
        console.log("Error getting posts: ", error);
        res.status(500).json({
            status: 'Error getting posts',
            message: error,
        });
    }
}

exports.getPostsByTags = async (req, res) => {
    try {
        const tags = req.query.tags.split(',');
        const posts = await post.getPosts(tags);

        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {
                posts,
            },
        });
    }
    catch (error) {
        console.log("Error getting posts: ", error);
        res.status(500).json({
            status: 'Error getting posts',
            message: error,
        });
    }
}

exports.getPostsByTitle = async (req, res) => {
    try {
        const titleSearch = req.query.title;
        const posts = await post.getPosts([], 'createdAt', titleSearch);

        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {
                posts,
            },
        });
    }
    catch (error) {
        console.log("Error getting posts: ", error);
        res.status(500).json({
            status: 'Error getting posts',
            message: error,
        });
    }
}

exports.getPost = async (req, res) => {
    try {
        const post = await post.getPost(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                post,
            },
        });
    }
    catch (error) {
        console.log("Error getting post: ", error);
        res.status(500).json({
            status: 'Error getting post',
            message: error,
        });
    }
}

exports.createPost = async (req, res) => {
    try {
        const post = await post.createPost(req.body);

        res.status(200).json({
            status: 'success',
            data: {
                post,
            },
        });
    }
    catch (error) {
        console.log("Error creating post: ", error);
        res.status(500).json({
            status: 'Error creating post',
            message: error,
        });
    }
}

exports.updatePost = async (req, res) => {
    try {
        const post = await post.updatePost(req.params.id, req.body);

        res.status(200).json({
            status: 'success',
            data: {
                post,
            },
        });
    }
    catch (error) {
        console.log("Error updating post: ", error);
        res.status(500).json({
            status: 'Error updating post',
            message: error,
        });
    }
}

exports.deletePost = async (req, res) => {
    try {
        const post = await post.deletePost(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                post,
            },
        });
    }
    catch (error) {
        console.log("Error deleting post: ", error);
        res.status(500).json({
            status: 'Error deleting post',
            message: error,
        });
    }
}