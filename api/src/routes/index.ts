import express from "express"
import cors from "cors"
import * as bodyParser from "body-parser"
import AuthRoute from "./auth.route"
import AccountRoute from "./account.route"

class Routes {
    public static init(app: express.Application) {
        const router: express.Router = express.Router()
        app.use(bodyParser.json())
        app.use(cors())
        app.use("/", router)
        app.use("/", new AuthRoute().router)
        app.use("/", new AccountRoute().router)
    }
}

export default Routes