import { database } from "@/lib/pg/db";
import { IPersonRepository } from "../person.repository.interface";
import { IPerson } from "@/entities/models/person.interface";

export class PersonRepository implements IPersonRepository {
    // async findById(id: number): Promise<Person> {

    //     return {
    //         id: id,
    //         cpf: '12345678901',
    //         name: 'Tiago Esteves',
    //         birth: new Date('1990-01-01'),
    //         email: "test@gmail.com",
    //         user_id: 1
    //     }
    // }

    async create({ cpf, name, birth, email, user_id }: IPerson): Promise<IPerson | undefined> {
        const result = await database.clientInstance?.query(
            'INSERT INTO person (cpf, name, birth, email, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *',
            [cpf, name, birth, email, user_id]
        )

        return result?.rows[0];
    }
}