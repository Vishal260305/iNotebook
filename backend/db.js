const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const connectToMongo = () => {
  mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB Connected"))
    .catch((e) => console.log(e.message));
};

module.exports = connectToMongo;
