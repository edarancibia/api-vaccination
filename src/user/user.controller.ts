import { RegisterUserBody } from './user.schema';
import { Request, Response, NextFunction } from "express";
import { DataBaseRepository } from "../commons/declarations";
import { User } from "./User.entity";


export class UserController {
    constructor(private repository: DataBaseRepository<User>){}

    async create(req: Request<{}, {}, RegisterUserBody>,
         res: Response, next: NextFunction){
        try {
            const body = req.body;
            const user = await this.repository.create(body);

            return res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
}