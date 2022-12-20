import { VaccinationController } from './vaccination.controller';
import express from 'express';
import { VaccinationRepository } from './vaccination.repository';
import requireUser from '../middleware/requireUser';

const router = express.Router();

const controller = new VaccinationController(new VaccinationRepository);

router.post('/', requireUser, controller.create.bind(controller));

router.get('/:id', requireUser, controller.findById.bind(controller));

router.get('/', requireUser, controller.list.bind(controller));

router.put('/:id', require, controller.update.bind(controller));

router.delete('/:id', requireUser, controller.remove.bind(controller));

export default router;