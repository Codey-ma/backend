const user = require('../services/user');

exports.getUsers = async (req, res) => {
    try {
        const users = await user.getUsers();

        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users,
            },
        });
    }
    catch (error) {
        console.log("Error getting users: ", error);
        res.status(500).json({
            status: 'Error getting users',
            message: error,
        });
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await user.getUser(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    }
    catch (error) {
        console.log("Error getting user: ", error);
        res.status(500).json({
            status: 'Error getting user',
            message: error,
        });
    }
}

exports.registerUser = async (req, res) => {
    try {
        const userData = req.body;
        const user = await user.createUser(userData);

        res.status(201).json({
            status: 'success',
            data: {
                user,
            },
        });
    }
    catch (error) {
        console.log("Error creating user: ", error);
        res.status(500).json({
            status: 'Error creating user',
            message: error,
        });
    }
}


exports.updateUser = async (req, res) => {
    try {
        const userData = req.body;
        const user = await user.updateUser(req.params.id, userData);

        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    }
    catch (error) {
        console.log("Error updating user: ", error);
        res.status(500).json({
            status: 'Error updating user',
            message: error,
        });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const userData = req.body;
        const user = await user.getUserByEmail(userData.email);

        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }

        const isMatch = await user.comparePassword(userData.password);

        if (!isMatch) {
            return res.status(401).json({
                message: 'Invalid credentials',
            });

        }

        const token = user.generateToken();

        res.status(200).json({
            status: 'success',
            data: {
                token,
            },
        });
    }
    catch (error) {
        console.log("Error logging in user: ", error);
        res.status(500).json({
            status: 'Error logging in user',
            message: error,
        });
    }
}