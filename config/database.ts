import { Drug } from '../src/drug/Drug.entity';
import { User } from '../src/user/User.entity';
import { DataSource } from "typeorm";
import { Vaccination } from '../src/vaccionation/Vaccination.entity';

export default new DataSource({
    type: "mysql",
    host: "sql.freedb.tech",
    //port: 5432,
    username: "freedb_edarancibia",
    password: "NudU5Twv$?PVB#5",
    database: "freedb_pruebas",
    entities: [User, Drug, Vaccination],
    synchronize: true,
    logging: false,
})