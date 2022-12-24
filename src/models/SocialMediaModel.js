const mongoose = require('mongoose');

const SocialMediaSchema = mongoose.Schema(
    {
        post: { type: String, required: true },
        postImage: { type: String },
        userName: { type: String, required: true },
        userEmail: { type: String, required: true },
        userImage: {
            type: String,
            default: 'https://i.ibb.co/25kDrnr/user-1.png',
        },
        postDate: { type: String, required: true },
        postTime: { type: String, required: true },
        comments: { type: Array },
        likes: { type: Array },
    },
    { versionKey: false }
);

const SocialMediaModel = mongoose.model('socialmedia', SocialMediaSchema);

module.exports = SocialMediaModel;
