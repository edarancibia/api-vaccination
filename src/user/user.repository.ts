import database from '../../config/database';
import { DataBaseRepository, Id, Query } from './../commons/declarations';
import { User } from './User.entity';
export class UserRepository implements DataBaseRepository<User>{

    async create(data: Partial<User>, query?: Query | undefined): Promise<User> {
        const repository = database.getRepository(User);
        const user = repository.create(data);

        await repository.save(user);
        return user;
    }

    list(query?: Query | undefined): Promise<User[]> {
        throw new Error('Method not implemented.');
    }
    async get(email:string, query?: Query | undefined): Promise<User> {
        const respository = database.getRepository(User);
        const user = await respository.findOneBy({ email: email});

        if(!user) throw new Error('User was not found');

        return user;
    }
    update(id: Id, data: User, query?: Query | undefined): Promise<User> {
        throw new Error('Method not implemented.');
    }
    remove(id: Id, query?: Query | undefined): Promise<User> {
        throw new Error('Method not implemented.');
    }
    
}