// Create web server with express
const express = require("express");
const router = express.Router();
const { Comment } = require("../models/Comment");

//=================================
//             Comments
//=================================

router.post("/saveComment", (req, res) => {
  const comment = new Comment(req.body);
  comment.save((err, comment) => {
    if (err) return res.json({ success: false, err });
    // Save comment in database
    Comment.find({ _id: comment._id })
      .populate("writer")
      .exec((err, result) => {
        // Find comment by id and populate writer
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true, result });
      });
  });
});

router.post("/getComments", (req, res) => {
  Comment.find({ postId: req.body.videoId })
    .populate("writer")
    .exec((err, comments) => {
      // Find all comments that match the postId
      if (err) return res.status(400).send(err);
      return res.status(200).json({ success: true, comments });
    });
});

module.exports = router;
