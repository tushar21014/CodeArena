const mongoose = require('mongoose');

const { Schema } = mongoose;


const testCasesSchema = new Schema({

    Title:{
        type: String,
        required: true,
    },
    test_cases_json:{
        type: String,
        required: true,
    }
});

const testCases = mongoose.model('testcases', testCasesSchema);
module.exports = testCases;
