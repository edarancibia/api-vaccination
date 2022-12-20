import { DrugController } from './drug.controller';
import express from 'express';
import { DrugRepository } from './drug.repository';
import requireUser from '../middleware/requireUser';

const router = express.Router();
const controller = new DrugController(new DrugRepository);

router.post('/', requireUser, controller.create.bind(controller));

router.get('/:id', requireUser, controller.getById.bind(controller));

router.get('/', requireUser, controller.list.bind(controller));

router.put('/:id', requireUser, controller.update.bind(controller));

router.delete('/:id', requireUser, controller.remove.bind(controller));

export default router;