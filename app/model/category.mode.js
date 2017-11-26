var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CategorySchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true,
        unique: true,
        // make this a required field
        required: 'name cannot be blank',
        // wires in a custom validator function (http://mongoosejs.com/docs/api.html#schematype_SchemaType-validate).
        //validate: [validateLength, 'name must be 15 chars in length or less']
    },
    // the property name
    created: {
        // types are defined e.g. String, Date, Number (http://mongoosejs.com/docs/guide.html)
        type: Date,
        // default values can be set
        default: Date.now
    },
    description: {
        type: String,
        default: '',
        // types have specific functions e.g. trim, lowercase, uppercase (http://mongoosejs.com/docs/api.html#schema-string-js)
        trim: true
    }

});
module.exports = mongoose.model('Category', CategorySchema);