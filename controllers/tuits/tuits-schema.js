import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    handle: String,
    time: String,
    image: String,
    title: String,
    replies: Number,
    retuits: Number,
    topic: String,
    username: String
}, {collection: 'tuits'});
export default schema;

