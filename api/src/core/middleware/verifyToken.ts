import * as jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"
import { EXPIRES } from "../config"

export const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.autorization
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, EXPIRES, (error: any, user: any) => {
            if (error) res.status(403).json({ message: "Token is not valid" })
            req.user = user
            next()
        })
    } else {
        res.status(403).json({ message: "You are not authenticate" })
    }
}