const SocialMediaModel = require('../models/SocialMediaModel');

exports.CreatePost = (req, res) => {
    const post = {
        post: req.body.post,
        postImage: req.body.postImage,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userImage: req.body.userImage,
        postDate: req.body.postDate,
        postTime: req.body.postTime,
    };

    SocialMediaModel.create(post, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.ReadPosts = (req, res) => {
    SocialMediaModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.DeletePost = (req, res) => {
    SocialMediaModel.findByIdAndDelete(req.body.id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.AddComment = (req, res) => {
    const comment = {
        commentText: req.body.commentText,
        commentDate: req.body.commentDate,
        commentTime: req.body.commentTime,
        commentUser: req.body.commentUser,
        commentEmail: req.body.commentEmail,
        commentUserImage: req.body.commentUserImage,
    };

    SocialMediaModel.findByIdAndUpdate(
        req.body.postId,
        { $push: { comments: comment } },
        (err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                res.status(200).json({ status: 'success', data: data });
            }
        }
    );
};

exports.AddLike = (req, res) => {
    const like = {
        liked: req.body.liked,
        likeDate: req.body.likeDate,
        likeTime: req.body.likeTime,
        likeUser: req.body.likeUser,
        likeEmail: req.body.likeEmail,
    };

    SocialMediaModel.findByIdAndUpdate(
        req.body.postId,
        { $push: { likes: like } },
        (err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                res.status(200).json({ status: 'success', data: data });
            }
        }
    );
};

exports.ReadPostByEmail = (req, res) => {
    SocialMediaModel.find({ userEmail: req.params.email }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
