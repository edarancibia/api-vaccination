import express from 'express';
import config from 'config';
import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import database from '../config/database';
import authRouter from './auth/auth.route';
import drugRouter from './drug/drug.route';
import userRouter from './user/user.route';
import vaccinationRouter from './vaccionation/vaccination.route';
import deserializeUser from './middleware/deserializeUser';
import helmet from 'helmet';

import { json } from 'body-parser';

const port = config.get<string>('port');

const app = express();

app.use(cookieParser());
app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(deserializeUser);

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/drugs', drugRouter);
app.use('/api/vaccinations', vaccinationRouter);

database.initialize()
    .then(() => console.log('Database connected'))
    .catch(console.error)

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});