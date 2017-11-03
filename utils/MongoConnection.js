var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://CrunchyPancake:Klippe911@ds151014.mlab.com:51014/mlab_db');

var Schema = mongoose.Schema;
var EXPIRES = 60 * 30 * 1000;

var LocationSchema = new Schema({
    userName: { type: String, unique: true },
    created: { type: Date, expires: EXPIRES, default: Date.now() },
    loc: {
        'type': { type: String, enum: "Point", default: "Point" },
        coordinates: { type: [Number] }
    }
});

var Location = mongoose.model('Location', LocationSchema);
module.exports = Location;

