const mongoose=require('mongoose')
const reviewSchema= new mongoose.Schema(
    {
        rating:{
            type:Number,
            min:0,
            max:5,

        },
        comments:{
            type: String,
            trim:true
        }
    },{timestamps:true}
)
// timestamps mat bhulna=> you commented=> createdd at or update at bhi schema
let Review= mongoose.model('Review',reviewSchema)
module.exports=Review;