import { Entity, Column, PrimaryGeneratedColumn,
        CreateDateColumn, UpdateDateColumn, BeforeInsert} from "typeorm";
import argon2 from 'argon2';
import bcrypt from 'bcrypt';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10);
    }

    public async comparePassword(password: string): Promise<boolean> {
        return argon2.verify(this.password, password)
    }
}