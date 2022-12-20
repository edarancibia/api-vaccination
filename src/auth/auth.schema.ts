import { object, string, TypeOf } from 'zod';

export const loginSchema = {
    body: object({
        email: string({
            required_error: 'Email is required',
        }).email('Not a valid email'),
        password: string({
            required_error: 'password is required',
        }).min(6, 'password must be at least 6 characters long')
          .max(12,'not longer that 12 chars'),
    }),
}

export type LoginBody = TypeOf<typeof loginSchema.body>;