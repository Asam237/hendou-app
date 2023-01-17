import { Request, Response, NextFunction } from "express"
import { AccountModel } from "../models/account.model"

class AccountController {
    public static async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const { number, balance }: any = req.body
            const accountParam: any = { number, balance }
            const account: any = new AccountModel(accountParam)
            await account.save()
            res.status(200).json({ account })
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default AccountController