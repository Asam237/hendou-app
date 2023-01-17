import { Request, Response, NextFunction } from "express"
import { check, ValidationChain } from "express-validator"
import Validator from "."

export default {
    validate: (method: String): (ValidationChain | ((req: Request, res: Response, next: NextFunction) => void))[] => {
        const validate: Validator = new Validator()
        switch (method) {
            case 'createAccount': {
                return [
                    check("number").not().isEmpty().withMessage(() => {
                        return "number is required"
                    }),
                    check("balance").not().isEmpty().withMessage(() => {
                        return "balance is required"
                    })
                ]
            }
            default: {
                return [
                    (req: Request, res: Response, next: NextFunction) => {
                        validate.handlerValidation(req, res, next)
                    }
                ]
            }
        }
    }
}