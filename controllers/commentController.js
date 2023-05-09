//5
const Post = require("../models/postModel");
const Comment= require('../models/commentModel');
//(bussiness logic) we don't want our main threat to get blocked or wait for longer time therefore  ,save function - first make sure create comment object
exports.createComment = async(req,res) => {
    try { // fetch data from req body
        const {post,user,body} = req.body;
        //create comment object
        const comment = new Comment ({
            post,user,body
        }); //save the new comment into the database
        const savedComment = await comment.save();  // iski id include in post collection    
        // find the post by using id , then post's ki comment me change karo, push - to update new entry , pull - to delete new entry ,new: true  update return if not included then will not update
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments:savedComment._id}}, {new:true})
                                .populate("comments") //populate the comment array with comment documents
                                .exec();
        res.json({
            post:updatedPost,
        });
    }
    catch(error) {
        return res.status(500).json({
            error:"error while creating comment",
        });
    }
}