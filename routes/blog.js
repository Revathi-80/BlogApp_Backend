//3

const express = require("express");
//import router
const router = express.Router();

//import Controller

const {dummylink,likePost, unlikePost} = require("../controllers/LikeController");
const {createComment} = require("../controllers/commentController");
const {createPost,getAllposts} = require("../controllers/postController");

//mapping controller
router.get("/dummy/route",dummylink);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllposts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);
//export
module.exports= router;