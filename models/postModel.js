//4 step
// title ,body ,comment array ,like array, best practice   post (like id)---> like model->which user liked it
const mongoose = require("mongoose");

 // route handle
 const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]
 });
 //export
 module.exports = mongoose.model("Post",postSchema);