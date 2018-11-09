var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//declaring schema
var GenreSchema = new Schema (
	{
		name: {type: String, min: 3, max: 100},
	}
);

//declaring virtual for genre's url
GenreSchema
.virtual('url')
.get(function ()
{
	return 'catalog/genre/' + this._id;
});

//export
module.exports = mongoose.model('Genre', GenreSchema);