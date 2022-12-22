import database from '../../config/database';
import { DataBaseRepository, Id, Query } from './../commons/declarations';
import { Drug } from './Drug.entity';


export class DrugRepository implements DataBaseRepository<Drug> {
    async create(data: Partial<Drug>, query?: Query | undefined): Promise<Drug> {
        const repository = database.getRepository(Drug);
        const drug = repository.create(data);

        await repository.save(drug)
        return drug;
    }
    async list(query?: Query | undefined): Promise<Drug[]> {
        const repository = database.getRepository(Drug);
        const drugs = await repository.find();

        //if(!drugs) throw new Error('No data found');

        return drugs;
    }
    async get(id: Id, query?: Query | undefined): Promise<Drug> {
        const repository = database.getRepository(Drug);
        const drug = await repository.findOneBy({ id: id as any });

        //if(!drug) throw new Error('Drug does not exists');

        return drug as any;
    }
    async update(id: Id, data: Drug, query?: Query | undefined): Promise<Drug> {
        const repository = database.getRepository(Drug);
        
        await repository.update(id, data);
        return this.get(id, query);
        
    }
    async remove(id: Id, query?: Query | undefined): Promise<Drug> {
        const repository = database.getRepository(Drug);
        const drug = await this.get(id, query);

        await repository.delete(id);
        return drug;
    }
    
}