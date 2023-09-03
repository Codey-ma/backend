const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();


// Using Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS
// Allow all origins to access the server
app.use(cors({
    origin: true,
    credentials: true
}));

// Import all routes
const posts = require('./routes/post');
const users = require('./routes/user');
const courses = require('./routes/course');
const events = require('./routes/event');

// Using routes
app.use('/api/v1', posts);
app.use('/api/v1', users);
app.use('/api/v1', courses);
app.use('/api/v1', events);

module.exports = app;