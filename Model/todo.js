import mongoose from 'mongoose';
const useSchema = new mongoose.Schema({
   title :{
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
export default mongoose.model('Todo', useSchema);
