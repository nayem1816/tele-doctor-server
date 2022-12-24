const mongoose = require('mongoose');

const SocialMediaPageSchema = new mongoose.Schema(
    {
        pageName: { type: String, required: true },
        pageImage: {
            type: String,
            default: 'https://i.ibb.co/dfVnftx/no-image.jpg',
        },
        pageDescription: {
            type: String,
            default:
                'This page is a public profile specifically created for businesses, brands, celebrities, and organizations to share their content, products, and services with their followers on the TeleDoctor platform.',
        },
        pageAdmin: { type: String, required: true },
        pageAdminEmail: { type: String, required: true },
        pageAdminImage: {
            type: String,
            default: 'https://i.ibb.co/25kDrnr/user-1.png',
        },
    },
    { versionKey: false }
);

const SocialMediaPageModel = mongoose.model(
    'socialmediapages',
    SocialMediaPageSchema
);

module.exports = SocialMediaPageModel;
