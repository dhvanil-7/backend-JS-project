import mongoose, { Schema, model } from "mongoose";


const subscriptionSchema = Schema({
    subscriber: {
        type: Schema.Types.ObjectId, //one who is subscibing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    }
)

export const Subscription = model("Subscription", subscriptionSchema)