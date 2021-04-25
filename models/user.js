const mongoose= require('mongoose');


const userSchema= new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    mobile: {
        type: String
    }
}, { timestamps: true});


module.exports= mongoose.model('user',userSchema);