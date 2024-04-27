const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

const connectDatabase = async () => {
  try {
    await mongoose.connect(`${url}/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDatabase;
