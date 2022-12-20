import { object, string, TypeOf, number, date } from 'zod';

export const vaccinationSchema = {
    body: object({
        name: string({
            required_error: 'name is required',
        }),
        drugId: number({
            required_error: 'drug  is required',
        }),
        dose: number({
            required_error: 'dose is required',
        }),
        date: date({
            required_error: 'date is required',
        })
    })
}

export type VaccinationBody = TypeOf<typeof vaccinationSchema.body>;