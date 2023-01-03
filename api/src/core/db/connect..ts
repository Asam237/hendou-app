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
    console.log(`[Mongo DB] connected to ${connection.db.databaseName}`)
})

connection.on("disconnected", () => {
    console.log(`[Mongo DB] disconnected to`)
})
connection.on("error", (error) => {
    console.log(`[Mongo DB] error to ${error}`)
})