import { check, ValidationChain } from "express-validator";
import { Request, Response, NextFunction } from "express";
import Validator from ".";

export default {
    validate: (method: string): (ValidationChain | ((req: Request, res: Response, next: NextFunction) => void))[] => {
        const validator: Validator = new Validator()
        switch (method) {
            case 'createUser': {
                return [
                    check("firstName").not().isEmpty().withMessage(() => {
                        return "first name is required"
                    }),
                    check("lastName").not().isEmpty().withMessage(() => {
                        return "last name is required"
                    }),
                    check("email").not().isEmpty().withMessage(() => {
                        return "email is required"
                    }),
                    check("password").not().isEmpty().withMessage(() => {
                        return "password is required"
                    }),
                ]
            }
            case 'loginUser': {
                return [
                    check("email").not().isEmpty().withMessage(() => {
                        return "email is required"
                    }),
                    check("password").not().isEmpty().withMessage(() => {
                        return "password is required"
                    }),
                ]
            }
            default: {
                return [
                    (req: Request, res: Response, next: NextFunction) => {
                        validator.handlerValidation(req, res, next)
                    }
                ]
            }
        }
    }
}
