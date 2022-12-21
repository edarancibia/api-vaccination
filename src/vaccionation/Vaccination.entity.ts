import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Drug } from "../drug/Drug.entity";

@Entity()
export class Vaccination {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    dose: number;

    @CreateDateColumn()
    date: Date;

    @ManyToOne(() => Drug)
    @JoinColumn({ referencedColumnName: 'id' })
    drug: Drug;
}