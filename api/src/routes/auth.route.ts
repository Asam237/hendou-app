import { Router } from "express"
import AuthController from "../controllers/auth.controller";
import Validator from "../validator";
import authValidator from "../validator/auth.validator";

const user: any = Validator.method

class AuthRoute {
    public router;
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes = () => {
        const prefix: string = "/auth"
        this.router.post(`${prefix}/create`, authValidator.validate(user.createUser), AuthController.create)
        this.router.post(`${prefix}/login`, authValidator.validate(user.loginUser), AuthController.login)
    }
}

export default AuthRoute