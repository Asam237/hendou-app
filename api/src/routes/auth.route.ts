import { Router } from "express"
import { AuthController } from "../controlles/auth.controller";
import { Validator } from "../validators";
import userValidator from "../validators/user.validator";

const user: any = Validator.method

class AuthRoute {
    public router: Router;
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes = () => {
        const prefix: string = "/auth"
        this.router.post(`${prefix}/create`, userValidator.validate(user.createUser), AuthController.create)
        this.router.post(`${prefix}/login`, userValidator.validate(user.login), AuthController.login)
    }
}

export { AuthRoute }