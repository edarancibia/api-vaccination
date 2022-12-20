import { boolean, date, number, object, string, TypeOf } from 'zod';

export const drugSchema = {
    body: object({
        name: string({
            required_error: 'name is required',
        }),
        approved: boolean({
            required_error: 'approved is required',
        }),
        min_dose: number({
            required_error: 'min dose is required',
        }),
        max_dose: number({
            required_error: 'max dose is required',
        }),
        available_at: date(),
    })
}

export type DrugBody = TypeOf<typeof drugSchema.body>;