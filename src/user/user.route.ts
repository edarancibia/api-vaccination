import express from 'express';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

const router = express.Router();
const controller = new UserController(new UserRepository);

router.post('/signup', controller.create.bind(controller));

export default router;