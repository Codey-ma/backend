const moongose = require('mongoose');

const postSchema = new moongose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
    },
    description: {
        type: String,
        required: [true, 'Please enter a description'],
    },
    content: {
        // HTML
        type: String,
        required: [true, 'Please enter a content'],
    },
    category: {
        type: String,
        enum: ['Blog', 'Course'],
        default: 'Blog',
    },
    url: {
        type: String,
    },
    tags: [ 
        {
            type: String,
        },
    ],
});

module.exports = moongose.model('Post', postSchema);