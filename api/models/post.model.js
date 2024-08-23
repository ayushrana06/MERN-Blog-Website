import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image:{
            type: String,
            default: 'data:image/png;base64,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',
        },
        category: {
            type: String,
            default: 'uncategorized',
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    }, {timestamps: true}
);

const Post = mongoose.model('Post', postSchema);

export default Post;