const mongoose = require('mongoose');

const { Schema } = mongoose;


const submission = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'questions',
        required: true
    },
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    result: {
        type: String,
        enum: ['Accepted', 'Failed', 'Time Limit Exceeded', 'Runtime Error', 'Compilation Error'],
        required: true
    },
    timeTaken: {
        type: Number,
        required: true
    },
    // memoryUsed: {
    //     type: Number,
    //     required: true
    // },
    submittedAt: {
        type: String,
        required: true,
        default: () => new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) // IST format
    }
}, { collection: 'submissions' });


const submissions = mongoose.model('submissions', submission)
module.exports = submissions;