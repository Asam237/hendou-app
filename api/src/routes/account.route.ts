import { Router } from "express"
import AccountController from "../controllers/account.controller"
import Validator from "../validator"
import accountValidator from "../validator/account.validator"

const account: any = Validator.method

class AccountRoute {
    public router: Router
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes = () => {
        const prefix: string = "/account"
        this.router.post(`${prefix}/create`, accountValidator.validate(account.createAccount), AccountController.create)
    }
}

export default AccountRoute