import express from "express"
import cors from "cors"
import * as bodyParser from "body-parser"
import AuthRoute from "./auth.route"

class Routes {
    constructor(app: express.Application) {
        const router: express.Router = express.Router()
        app.use(bodyParser.json())
        app.use(cors())
        app.use("/", router)
        app.use("/", new AuthRoute().router)
    }
}

export default Routes