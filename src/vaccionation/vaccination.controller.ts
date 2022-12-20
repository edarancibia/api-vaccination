import { NextFunction, Request, Response } from "express";
import { DataBaseRepository } from "../commons/declarations";
import { Vaccination } from "./Vaccination.entity";
import { VaccinationBody } from "./vaccination.schema";

export class VaccinationController {
    constructor(private repository: DataBaseRepository<Vaccination>){}

    async create(req: Request<{}, {}, VaccinationBody>, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            console.log(body);
            const vaccination = await this.repository.create(body);

            return res.status(201).json(vaccination);
        } catch (error) {
            next(error);
        }
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const vaccination = await this.repository.get(id);

            return res.status(200).json(vaccination);
        } catch (error) {
            next(error);
        }
    }

    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const vaccinations = await this.repository.list();

            return res.status(200).json(vaccinations);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id }  = req.params;
            console.log('id ', id);
            const body = req.body;

            //const vaccination = await this.repository.update(id, body);

            //return res.status(200).json(vaccination);
        } catch (error) {
            next(error);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;

            await this.repository.remove(id);

            return res.status(200).json({ message: 'Vaccination deleted successfully!' });
        } catch (error) {
            next(error);
        }
    }
}