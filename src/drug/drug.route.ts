import { DrugController } from './drug.controller';
import express from 'express';
import { DrugRepository } from './drug.repository';
import requireUser from '../middleware/requireUser';

const router = express.Router();
const controller = new DrugController(new DrugRepository);

  /**
   * @openapi
   * '/api/drugs':
   *  post:
   *     tags:
   *     - Drugs
   *     summary: Register a drug
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: './drug.schema.ts'
   *     responses:
   *      201:
   */ 
router.post('/', requireUser, controller.create.bind(controller));

  /**
   * @openapi
   * '/api/drugs/{drugId}':
   *  get:
   *     tags:
   *     - Drugs
   *     summary: Get a single drug by the drugId
   *     parameters:
   *      - name: drugId
   *        in: path
   *        description: The id of the drug
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Product not found
   */
router.get('/:id', requireUser, controller.getById.bind(controller));

  /**
   * @openapi
   * '/api/drugs/':
   *  get:
   *     tags:
   *     - Drugs
   *     summary: Get all drugs
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Product not found
   */
router.get('/', requireUser, controller.list.bind(controller));

router.put('/:id', requireUser, controller.update.bind(controller));

router.delete('/:id', requireUser, controller.remove.bind(controller));

export default router;