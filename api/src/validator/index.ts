import { Request, Response, NextFunction } from "express"
import { Result, ValidationError, validationResult } from "express-validator"
import { ValidationMethod } from "../core/types"
interface IValidator {
    handlerValidation(req: Request, res: Response, next: NextFunction): Response | NextFunction | void
}

type ValidationResultError = {
    [string: string]: [string]
}

class Validator implements IValidator {
    handlerValidation(req: Request, res: Response, next: NextFunction) {
        const errors: Result<ValidationError> = validationResult(req)
        const result: ValidationResultError = {}
        if (!errors.isEmpty()) {
            errors.array().forEach((items: Object) => {
                const { param, msg }: any = items
                if (result[param]) {
                    result[param].push(msg)
                } else {
                    result[param] = [msg]
                }
            })
            return res.status(403).json({ errors: result })
        }
        return next()
    }
    public static method: ValidationMethod = {
        user: {
            createUser: "createUser"
        }
    }
}

export default Validator