import { Request, Response, NextFunction } from "express"
import { check, ValidationChain } from "express-validator"
import { Validator } from "."

export default {
    validate: (method: string): (ValidationChain | ((req: Request, res: Response, next: NextFunction) => void))[] => {
        const validator: Validator = new Validator()
        switch (method) {
            case 'createUser': {
                return [
                    check('firstName').not().notEmpty().withMessage(() => {
                        return "first nane is required"
                    }),
                    check('lastName').not().notEmpty().withMessage(() => {
                        return "last nane is required"
                    }),
                    check('email').not().notEmpty().withMessage(() => {
                        return "email is required"
                    }),
                    check('password').not().notEmpty().withMessage(() => {
                        return "password is required"
                    }),
                    check('addres').not().notEmpty().withMessage(() => {
                        return "addres is required"
                    }),
                    check('phone').not().notEmpty().withMessage(() => {
                        return "phone is required"
                    }),
                ]
            }
            case 'login': {
                return [
                    check('email').not().notEmpty().withMessage(() => {
                        return "email is required"
                    }),
                    check('password').not().notEmpty().withMessage(() => {
                        return "password is required"
                    }),
                ]
            }
            default: {
                return [
                    (req: Request, res: Response, next: NextFunction): void => {
                        validator.handleValidation(req, res, next)
                    }
                ]
            }
        }
    }
}