const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fitnessClassSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    userId: { type: String, required: true},
    date: { type: String, required: true},
    time: {type: String, required: true},
    webinar: {type: String, required: true},
    pictureUrl: {type: String}
}, {
    timestamps: true,
});

const FitnessClass = mongoose.model('FitnessClass', fitnessClassSchema);

module.exports = FitnessClass;