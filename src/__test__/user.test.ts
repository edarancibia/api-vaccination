import { app } from "../app";
import supertest from 'supertest';

const userpayload = {
    name: "fakename",
    email: "user@example.com",
    password: "1234565",
};

describe('user', () => {
    describe('signup route', () => {
        it('should return 200 and create the user', async () => {
            const { statusCode, body } = await supertest(app).post(`/api/users/signup`)
            
            .send(userpayload);
            expect(statusCode).toBe(200);
        });
    });
});