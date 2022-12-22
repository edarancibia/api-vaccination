import { NextFunction, Request, Response } from 'express';
import { DataBaseRepository, Id } from './../commons/declarations';
import { Drug } from './Drug.entity';
import { DrugBody } from './drug.schema';


export class DrugController {
    constructor(private respository: DataBaseRepository<Drug>){}

    async create(req: Request<{}, {}, DrugBody>,
            res: Response, next: NextFunction){
        try {
            const body = req.body;
            const drug = await this.respository.create(body);

            return res.status(201).json(drug);
        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction){
        try {
            const { id } = req.params;
            const drug = await this.respository.get(id);

            if(!drug){
                return res.status(404).json({error: 'Drug not found'})
            }
            return res.status(200).json(drug);
        } catch (error) {
            next(error);
        }
    }

    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const drugs = await this.respository.list();

            if(!drugs){
                return res.status(404).json({message: 'Drugs not found'})
            }
            return res.status(200).json(drugs);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const body = req.body;
            const drug = await this.respository.update(id, body);

            return res.status(200).json(drug);


        } catch (error) {
            next(error);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            await this.respository.remove(id);

            return res.status(200).json({ message: 'Drug was deleted successfully!' });
        } catch (error) {
            
        }
    }
}