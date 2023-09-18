const Event = require('../models/Event');

exports.getEvents = async (sort = 'createdAt', titleSearch = '') => {
    try {
        const events = await Event.find({
            tags: {
                $in: tags,
            },
            title: {
                $regex: titleSearch,
                $options: 'i',
            },
        }).sort(sort);

        return events;
    } catch (error) {
        console.log("Error getting events: ", error);
    }
}

exports.getEvent = async (id) => {
    try {
        const event = await Event.findById(id);

        return event;
    } catch (error) {
        console.log("Error getting event: ", error);
    }
}

exports.createEvent = async (eventData) => {
    try {
        const event = await Event.create(eventData);

        return event;
    } catch (error) {
        console.log("Error creating event: ", error);
    }
}

exports.updateEvent = async (id, eventData) => {
    try {
        const event = await Event.findByIdAndUpdate(id, eventData, {
            new: true,
            runValidators: true,
        });
        
        return event;
    } catch (error) {
        console.log("Error updating event: ", error);
    }
}

exports.deleteEvent = async (id) => {
    try {
        const event = await Event.findByIdAndDelete(id);

        return event;
    } catch (error) {
        console.log("Error deleting event: ", error);
    }
}

