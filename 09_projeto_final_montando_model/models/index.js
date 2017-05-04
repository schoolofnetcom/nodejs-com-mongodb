var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/parking').connection;

db.on('open', function () {
    console.log("MongoDB is connected");
});

db.on('error', function () {
    console.log("MongoDB error");
});

return db;