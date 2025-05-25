const mongoose = require('mongoose');

async function connectToMongo() {
    try {
        // await mongoose.connect(process.env.MONGO_URI, {
        await mongoose.connect("mongodb://127.0.0.1:27017/phase2", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB phase2 Server');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

connectToMongo();

module.exports = connectToMongo;