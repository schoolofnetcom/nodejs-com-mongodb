var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/library').connection;

db.on('open', function () {
    console.log('MongoDB is connected');
});

db.on('error', function () {
    console.log('Something went wrong during mongoDB connection');
});

return db;
