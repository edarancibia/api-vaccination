import { UserRepository } from './../user/user.repository';
import { AuthController } from './auth.controller';
import express from 'express';

const router = express.Router();
const controller = new AuthController(new UserRepository);

router.post('/', controller.loginHandler.bind(controller));

export default router;