import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Drug {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    approved: boolean;

    @Column()
    min_dose: number;

    @Column()
    max_dose: number;

    @Column()
    available_at: Date;

}