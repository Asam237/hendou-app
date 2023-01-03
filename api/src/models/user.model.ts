import mongoose from "mongoose";

const userSchema: mongoose.Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    addres: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
})

const UserModel = mongoose.model("User", userSchema)
const userUpdateParam: string[] = ["firstName", "lastName", "addres", "phone"]
export { UserModel, userUpdateParam }