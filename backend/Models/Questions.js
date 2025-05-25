const mongoose = require('mongoose');

const { Schema } = mongoose;


const questionsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Basic','Easy', 'Medium', 'Hard'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    URL: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    stub:{
        type: Schema.Types.ObjectId,
        ref: 'Stubs',
    },
    testCases: {
        type: Schema.Types.ObjectId,
        ref: 'TestCase',
        required: true
    },
    returnType: {
        type: String,
        required: true
    },
});

const questions = mongoose.model('questions', questionsSchema)
module.exports = questions;