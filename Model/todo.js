const mongoose = require('mongoose');
const useSchema = new mongoose.Schema({
   title :{
    type: String,
    required: true,
    min: 6,
    max: 255

   },
   description:{
    type: String,
    required: true,
    min: 6,
    max: 255

   },
   is_complete:{
    type : Boolean,
    default: false

   }
   
},
{
    timestamps: true,
}
);
module.exports = mongoose.model('Todo', useSchema);
