const { Schema, model } = require('moogoose')

const devSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        require: true
    },
    bio: String,
    avatar:{
        type: String,
        required: true
    }
},
{
    timestams: true
})

module.exports = model( 'Dev', devSchema )