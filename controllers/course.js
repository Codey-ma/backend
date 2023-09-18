const course = require('../services/course');

exports.getCourses = async (req, res) => {
    try {
        const courses = await course.getCourses();

        res.status(200).json(courses);
    } catch (error) {
        console.log("Error getting courses: ", error);
        res.status(500).json({
            status: 'Error getting courses',
            message: error,
        });
    }
}

exports.getCourseByTags = async (req, res) => {
    try {
        const tags = req.query.tags.split(',');
        const courses = await course.getCourses(tags);

        res.status(200).json(courses);
    } catch (error) {
        console.log("Error getting courses: ", error);
        res.status(500).json({
            status: 'Error getting courses',
            message: error,
        });
    }
}

exports.getCourseByTitleAndCategory = async (req, res) => {
    try {
        const titleSearch = req.query.title;
        const courses = await course.getCourses([], 'createdAt', titleSearch, req.query.category);

        res.status(200).json(courses);
    } catch (error) {
        console.log("Error getting courses: ", error);
        res.status(500).json({
            status: 'Error getting courses',
            message: error,
        });
    }
}


exports.getCourse = async (req, res) => {
    try {
        const courseData = await course.getCourse(req.params.id);

        res.status(200).json(courseData);
    } catch (error) {
        console.log("Error getting course: ", error);
        res.status(500).json({
            status: 'Error getting course',
            message: error,
        });
    }
}

exports.createCourse = async (req, res) => {
    try {
        const courseData = await course.createCourse(req.body);

        res.status(201).json(courseData);
    } catch (error) {
        console.log("Error creating course: ", error);
        res.status(500).json({
            status: 'Error creating course',
            message: error,
        });
    }
}

exports.updateCourse = async (req, res) => {
    try {
        const courseData = await course.updateCourse(req.params.id, req.body);

        res.status(200).json(courseData);
    } catch (error) {
        console.log("Error updating course: ", error);
        res.status(500).json({
            status: 'Error updating course',
            message: error,
        });
    }
}

exports.deleteCourse = async (req, res) => {
    try {
        const courseData = await course.deleteCourse(req.params.id);

        res.status(200).json(courseData);
    } catch (error) {
        console.log("Error deleting course: ", error);
        res.status(500).json({
            status: 'Error deleting course',
            message: error,
        });
    }
}

    