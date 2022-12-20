import database from "../../config/database";
import { DataBaseRepository, Id, Query } from "../commons/declarations";
import { Vaccination } from "./Vaccination.entity";

export class VaccinationRepository implements DataBaseRepository<Vaccination> {

    async create(data: Partial<Vaccination>, query?: Query | undefined): Promise<Vaccination> {
        const repository = database.getRepository(Vaccination);
        const vaccination = repository.create(data);

        await repository.save(vaccination);

        return vaccination;

    }
    async list(query?: Query | undefined): Promise<Vaccination[]> {
        const repository = database.getRepository(Vaccination);
        const vaccinations = await repository.find();

        if(!vaccinations) throw new Error('Data not found');

        return vaccinations;
    }
    async get(id: Id, query?: Query | undefined): Promise<Vaccination> {
        const repository = database.getRepository(Vaccination);
        const vaccination = await repository.findOneBy({ id: id as any });

        if(!vaccination) throw new Error('Data not found');

        return vaccination;
    }
    async update(id: Id, data: Vaccination, query?: Query | undefined): Promise<Vaccination> {
        const repository = database.getRepository(Vaccination);

        await repository.update(id, data);

        return this.get(id, query);
    }
    async remove(id: Id, query?: Query | undefined): Promise<Vaccination> {
        const repository = database.getRepository(Vaccination);
        const vaccination = await this.get(id, query);

        await repository.delete(vaccination);
        return vaccination;
    }
    
}