import mongoose from "mongoose";

const accountSchema: mongoose.Schema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    balance: {
        type: String,
        required: true
    }
})

const AccountModel = mongoose.model("Account", accountSchema)
const accountUpdateParams: string[] = ["number", "balance"]

export { AccountModel, accountUpdateParams }