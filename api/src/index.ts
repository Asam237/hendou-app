import http from "http"
import express from "express"
import { PORT } from "./core/config"
import { connectToDb } from "./core/connect/db"

const app: express = express()
const server: http.Server = http.createServer(app)

const main = () => {
    try {
        server.listen(PORT, async () => {
            await connectToDb()
            console.log(`[server]: running to ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main()