import { UserRepository } from './../user/user.repository';
import { AuthController } from './auth.controller';
import express from 'express';

const router = express.Router();
const controller = new AuthController(new UserRepository);

  /**
   * @openapi
   * '/api/auth':
   *  post:
   *     tags:
   *     - Auth
   *     summary: User Login
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *     responses:
   *      200:
   */ 
router.post('/', controller.loginHandler.bind(controller));

export default router;