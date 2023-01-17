import { Request, Response, NextFunction } from "express"
import * as bcrypt from "bcryptjs"
import { UserModel } from "../models/user.model"
class AuthController {
    public static async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const { firstName, lastName, email }: any = req.body
            const password: string = bcrypt.hashSync(req.body.password)
            const userParam: any = { firstName, lastName, email, password }
            const user: any = new UserModel(userParam)
            await user.save()
            res.status(200).json({ user })

        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default AuthController