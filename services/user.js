const User = require('../models/User');

exports.getUsers = async () => {
    try {
        const users = await User.find();

        return users;
    } catch (error) {
        console.log("Error getting users: ", error);
    }
}

exports.getUser = async (id) => {
    try {
        const user = await User.findById(id).populate('courses').populate('events');

        return user;
    } catch (error) {
        console.log("Error getting user: ", error);
    }
}

exports.getUserByEmailorUsername = async (email, username) => {
    try {
        const user = await User.findOne({ $or: [{ email }, { username }] });
    
        return user;    
    } catch (error) {
        console.log("Error getting user: ", error);
    }
}

exports.createUser = async (userData) => {
    try {
        const user = await User.create(userData);

        return user;
    } catch (error) {
        console.log("Error creating user: ", error);
    }
}

exports.updateUser = async (id, userData) => {
    try {
       const user = await User.findByIdAndUpdate(id, userData, {
              new: true,
              runValidators: true,
         });
        
        return user;
    } catch (error) {
        console.log("Error updating user: ", error);
    }
}

exports.deleteUser = async (id) => {
    try {
        const user = await User.findByIdAndDelete(id);

        return user;
    } catch (error) {
        console.log("Error deleting user: ", error);
    }
}


exports.addCourse = async (id, courseId) => {
    try {
        const user = await User.findById(id);

        user.courses.push(courseId);
        await user.save();

        return user;
    } catch (error) {
        console.log("Error adding course to user: ", error);
    }
}

exports.removeCourse = async (id, courseId) => {
    try {
        const user = await User.findById(id);

        user.courses.pull(courseId);
        await user.save();

        return user;
    } catch (error) {
        console.log("Error removing course from user: ", error);
    }
}

exports.addEvent = async (id, eventId) => {
    try {
        const user = await User.findById(id);

        user.events.push(eventId);
        await user.save();

        return user;
    } catch (error) {
        console.log("Error adding event to user: ", error);
    }
}

exports.removeEvent = async (id, eventId) => {
    try {
        const user = await User.findById(id);

        user.events.pull(eventId);
        await user.save();

        return user;
    } catch (error) {
        console.log("Error removing event from user: ", error);
    }
}

exports.addTodo = async (id, todoData) => {
    try {
        const user = await User.findById(id);

        user.todos.push(todoData);
        await user.save();

        return user;
    } catch (error) {
        console.log("Error adding todo to user: ", error);
    }
}

exports.removeTodo = async (id, todoId) => {
    try {
        const user = await User.findById(id);

        user.todos.pull(todoId);
        await user.save();

        return user;
    } catch (error) {
        console.log("Error removing todo from user: ", error);
    }
}