import { makeCreatePersonUseCase } from '@/use-cases/factory/make-create-person-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        cpf: z.string(),
        name: z.string(),
        birth: z.coerce.date(),
        email: z.string().email(),
        user_id: z.coerce.number()
    })

    const { cpf, name, birth, email, user_id } = registerBodySchema.parse(request.body)

    // try {
        // const personRepository = new PersonRepository()
        const createPersonUseCase = makeCreatePersonUseCase()// new CreatePersonUseCase(personRepository)
        const person = await createPersonUseCase.handler({ cpf, name, birth, email, user_id })

        reply.status(201).send(person)
    // } catch (error) {
    //     console.error(error)
    //     throw new Error('Internal Server Error')
    // }
}