const Course = require('../models/Course');

exports.getCourses = async (tags = [], sort = 'createdAt', titleSearch = '', category) => {
    try {
        const query = {
            tags: {
                $in: tags,
            },
            title: {
                $regex: titleSearch,
                $options: 'i',
            },
        };
        if (category) {
            query.category = category;
        }
        const courses = await Course.find(query).sort(sort);

        return courses;
    } catch (error) {
        console.log("Error getting courses: ", error);
    }
}

exports.getCourse = async (id) => {
    try {
        const course = await Course.findById(id).populate('sections');

        return course;
    } catch (error) {
        console.log("Error getting course: ", error);
    }
}

exports.createCourse = async (courseData) => {
    try {
        const course = await Course.create(courseData);

        return course;
    } catch (error) {
        console.log("Error creating course: ", error);
    }
}

exports.updateCourse = async (id, courseData) => {
    try {
        const course = await Course.findByIdAndUpdate(id, courseData, {
            new: true,
            runValidators: true,
        });

        return course;
    } catch (error) {
        console.log("Error updating course: ", error);
    }
}

exports.deleteCourse = async (id) => {
    try {
        const course = await Course.findByIdAndDelete(id);

        return course;
    } catch (error) {
        console.log("Error deleting course: ", error);
    }
}
