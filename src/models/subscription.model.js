import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.type.ObjectId,
        ref: "User"
    },
    channel: {
        type: Schema.type.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

export const Subsciption = mongoose.model("Subscription", subscriptionSchema)