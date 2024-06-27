import mongoose, { Schema, Model} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = Schema({
     videoFile: {
        type: String,   //cloudnary url
        required: true
     },
     thumbnail: {
        type: String,
        required: true
     },
     owner: {
        type: String,
        required: true
     },
     title: {
        type: String,
        required: true
     },
     description: {
        type: String,
        required: true
     },
     duration: {
        type: Number,
        required: true
     },
     views: {
        type: Number,
        required: true,
        default: 0
     },
     isPublished: {
        type: Boolean,
        required: true
     },
     owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
     }
}, {timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = Model("Video", videoSchema)