const event = require('../services/event');

exports.getEvents = async (req, res) => {
    try {
        const events = await event.getEvents();

        res.status(200).json({
            status: 'success',
            results: events.length,
            data: {
                events,
            },
        });
    }
    catch (error) {
        console.log("Error getting events: ", error);
        res.status(500).json({
            status: 'Error getting events',
            message: error,
        });
    }
}


exports.getEvent = async (req, res) => {
    try {
        const eventData = await event.getEvent(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                eventData,
            },
        });
    }
    catch (error) {
        console.log("Error getting event: ", error);
        res.status(500).json({
            status: 'Error getting event',
            message: error,
        });
    }
}

exports.createEvent = async (req, res) => {
    try {
        const eventData = await event.createEvent(req.body);

        res.status(200).json({
            status: 'success',
            data: {
                eventData,
            },
        });
    }
    catch (error) {
        console.log("Error creating event: ", error);
        res.status(500).json({
            status: 'Error creating event',
            message: error,
        });
    }
}

exports.updateEvent = async (req, res) => {
    try {
        const eventData = await event.updateEvent(req.params.id, req.body);

        res.status(200).json({
            status: 'success',
            data: {
                eventData,
            },
        });
    }
    catch (error) {
        console.log("Error updating event: ", error);
        res.status(500).json({
            status: 'Error updating event',
            message: error,
        });
    }
}

exports.deleteEvent = async (req, res) => {
    try {
        const eventData = await event.deleteEvent(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                eventData,
            },
        });
    }
    catch (error) {
        console.log("Error deleting event: ", error);
        res.status(500).json({
            status: 'Error deleting event',
            message: error,
        });
    }
}
