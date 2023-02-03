require('dotenv').config()

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE_CONNECTION_STRING);

const db = mongoose.connection;
db.on('connected', () => console.log('Data base connected'));
db.on('error', (error) => console.log('error', error));


module.exports = db
