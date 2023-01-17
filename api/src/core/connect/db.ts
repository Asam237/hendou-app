import { connect, connection } from "mongoose"
import { MONGO_URI } from "../config"

export const connectToDb = async () => {
    try {
        await connect(MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}

connection.on("connected", () => {
    console.log(`[mongodb]: connected to ${connection.db.databaseName}`)
})

connection.on("disconnected", () => {
    console.log(`[mongodb]: disconnected`)
})
connection.on("error", (error) => {
    console.log(`[mongodb]: error to ${error}`)
})

