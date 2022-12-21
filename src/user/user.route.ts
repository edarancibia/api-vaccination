import express from 'express';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

const router = express.Router();
const controller = new UserController(new UserRepository);

  /**
   * @openapi
   * '/api/users/signup':
   *  post:
   *     tags:
   *     - Users
   *     summary: Register a User
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              
   *     responses:
   *      201:
   *        description: Success
   */ 
router.post('/signup', controller.create.bind(controller));

export default router;