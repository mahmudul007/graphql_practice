const mongoose = require('mongoose');
const useSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        trim : true,
        required: true,
        min: 6,
        max: 255
    },
    password:{
        type:String,
        required: true,
        trim : true,
        min: [6, 'Password must be at least 6 characters long.'],
        
        
        
       
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', useSchema);