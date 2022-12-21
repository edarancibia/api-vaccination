import { VaccinationController } from './vaccination.controller';
import express from 'express';
import { VaccinationRepository } from './vaccination.repository';
import requireUser from '../middleware/requireUser';

const router = express.Router();

const controller = new VaccinationController(new VaccinationRepository);

  /**
   * @openapi
   * '/api/vaccination':
   *  post:
   *     tags:
   *     - Vaccinations
   *     summary: Register vaccination
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *     responses:
   *      201:
   */ 
router.post('/', requireUser, controller.create.bind(controller));


  /**
   * @openapi
   * '/api/vaccinations/{vaccinationId}':
   *  get:
   *     tags:
   *     - Vaccinations
   *     summary: Get a single vaccination by the vaccinationId
   *     parameters:
   *      - name: vaccinationId
   *        in: path
   *        description: The id of the vaccination
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Product not found
   */
router.get('/:id', requireUser, controller.findById.bind(controller));

  /**
   * @openapi
   * '/api/vaccinations':
   *  get:
   *     tags:
   *     - Vaccinations
   *     summary: Get a all vaccinations
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Product not found
   */
router.get('/', requireUser, controller.list.bind(controller));

router.put('/:id', require, controller.update.bind(controller));

router.delete('/:id', requireUser, controller.remove.bind(controller));

export default router;