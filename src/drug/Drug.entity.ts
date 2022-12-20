import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vaccination } from "../vaccionation/Vaccination.entity";

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

    // @OneToMany(() => Vaccination, vaccination => vaccination.drug)
    // vaccinations: Vaccination;
}