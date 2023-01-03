import { Request, Response, NextFunction } from "express"
import { Result, ValidationError, validationResult } from "express-validator"
import { ValidationMethod } from "../core/types"

interface IValidator {
    handleValidation(req: Request, res: Response, next: NextFunction): Response | NextFunction | void
}

type ValidatorResultError = {
    [string: string]: [string]
}

class Validator implements IValidator {
    handleValidation(req: Request, res: Response, next: NextFunction) {
        const errors: Result<ValidationError> = validationResult(req)
        const result: ValidatorResultError = {}
        if (!errors.isEmpty()) {
            errors.array().forEach((item: Object) => {
                const { msg, param }: any = item
                if (result[param]) {
                    result[param].push(msg)
                } else {
                    result[param] = [msg]
                }
            })
            return res.status(400).json({ error: result })
        }
        return next()
    }
    public static method: ValidationMethod = {
        user: {
            createUser: 'createUser'
        }
    }
}

export { Validator }