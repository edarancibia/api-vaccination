import supertest from 'supertest';
import { app } from '../app';
import { singJwt } from '../auth/auth.utils';

export const userPayload = {
    email: 'name@example.com',
    name: 'user name',
};

export const drugPayload = {
    name: "moderna",
    approved: true,
    min_dose: 10,
    max_dose: 20,
    available_at: "2022-12-31",
};

describe('drug', () => {
    describe('get drug route', () => {
        describe('get all drugs route without provide an accessToken', () => {
            it('should return a 401', async () => {
                const drugId = 2;
                const jwt = ''
                await supertest(app).get(`/api/drugs/${drugId}`)
                    .set('Authorization', `Bearer ${jwt}`)
                    .expect(401);
            });
        });

        describe('given the user is logged in', () => {
            it('should return 201 and create drug', async () => {
                const jwt = singJwt(userPayload)

                const { statusCode, body } = await supertest(app).post('/api/drugs')
                .set("Authorization", `Bearer ${jwt}`)
                .send(drugPayload)
                
                expect(statusCode).toBe(201)
            });
        });
    });
 });