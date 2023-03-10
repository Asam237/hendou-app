import { Request, Response, NextFunction } from "express"
import * as bcrypt from "bcryptjs"
import { UserModel } from "../models/user.model"
import { TokenInfo } from "../core/types"
import * as jwt from "jsonwebtoken"
import { EXPIRES, JWT_SECRET } from "../core/config"

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
    public static async login(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const { email, password }: any = req.body
            const user: any = await UserModel.findOne({ email })
            if (!user) {
                res.status(403).json({ message: "login failed" })
            }
            const isMatch: boolean = bcrypt.compareSync(password, user.password)
            if (!isMatch) {
                res.status(403).json({ message: "login failed" })
            }
            const { _id } = user
            const tokenInfo: TokenInfo = {
                id: _id
            }
            const token = jwt.sign(tokenInfo, JWT_SECRET, { expiresIn: EXPIRES })
            res.status(200).json({ token })

        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default AuthController