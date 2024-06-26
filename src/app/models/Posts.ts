import mongoose, { Document, Schema } from "mongoose"

export interface IPost extends Document {
  text: string
  createdAt: Date
}

const postSchema: Schema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Post = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema)

export { postSchema }

export default Post
