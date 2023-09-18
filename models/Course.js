const moongose = require('mongoose');

const courseSchema = new moongose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
    },
    description: {
        type: String,
        required: [true, 'Please enter a description'],
    },
    totalTime: {
        type: String,
        required: [true, 'Please enter a total time'],
    },
    author: {
        type: String,
        required: [true, 'Please enter an author'],
    },
    url: {
        type: String,
    },
    image: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    category: {
        type: String,
        required: [true, 'Please enter a category'],
    },
    tags: [
        {
            type: String,
        },
    ],
    price: {
        type: Number,
        required: [true, 'Please enter a price'],
    },
    rating: {
        average: {
            type: Number,
            default: 0,
        },
        count: {
            type: Number,
            default: 0,
        },
    },
    sections: [
        {
            type: moongose.Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
});

module.exports = moongose.model('Course', courseSchema);
