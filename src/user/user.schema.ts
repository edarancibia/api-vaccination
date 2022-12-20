import { object, string, TypeOf } from 'zod';

export const registerUserSchema  = {
    body: object({
        name: string({
            required_error: 'name is required',
        }),
        email: string({
            required_error: 'email is required',
        }).email('(must be a valid email'),
        password: string({
            required_error: 'password is required',
        }).min(6, 'password must be at leat 6 characters long'),
    }),
}

export type RegisterUserBody = TypeOf<typeof registerUserSchema.body>;