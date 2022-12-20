import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Drug } from "../drug/Drug.entity";

@Entity()
export class Vaccination {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @Column()
    // drug_id: number;

    @Column()
    dose: number;

    @CreateDateColumn()
    date: Date;

    @ManyToOne(() => Drug, drug => drug.vaccinations)
    drug: Drug;
}