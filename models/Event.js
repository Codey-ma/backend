const moongose = require('mongoose');


const eventSchema = new moongose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
    },
    description: {
        type: String,
        required: [true, 'Please enter a description'],
    },
    date: {
        type: Date,
        required: [true, 'Please enter a date'],
    },
    time: {
        type: String,
        required: [true, 'Please enter a time'],
    },
    location: {
        type: String,
        required: [true, 'Please enter a location'],
    }
});

module.exports = moongose.model('Event', eventSchema);
