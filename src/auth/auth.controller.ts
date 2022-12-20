import { User } from './../user/User.entity';
import { DataBaseRepository } from './../commons/declarations';
import { Request, Response } from 'express';
import { LoginBody } from './auth.schema';
import { omit } from 'lodash';
import { singJwt } from './auth.utils';


export class AuthController {
    constructor(private repository: DataBaseRepository<User>){}

    async loginHandler(
        req: Request<{}, {}, LoginBody>,
        res: Response
    ) {
        const { email, password } = req.body;
        const user = await this.repository.get(email);

        if(!user || !user.comparePassword(password)){
            return res.status(401).send('Invalid email or password');
        }

        const payload = omit(user,['password']);

        const jwt = singJwt(payload);

        res.cookie('accessToken', jwt, {
            maxAge: 3.154e10, // 1 year
            httpOnly: true,
            domain: 'localhost',
            path: '/',
            sameSite: 'strict',
            secure: false,
        });

        return res.status(201).send(jwt);
        
    }
}