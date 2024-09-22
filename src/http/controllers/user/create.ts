
import { makeCreateUserUseCase } from '@/use-cases/factory/make-create-user-use-case'
import { hash } from 'bcryptjs'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        username: z.string(),
        password: z.string(),
    })

    const { username, password } = registerBodySchema.parse(request.body)
    const hashedPassword = await hash(password, 8)
    const userWithHashedPassword = { username, password: hashedPassword }

    // try {
    // const userRepository = new UserRepository()
    const createUserUseCase = makeCreateUserUseCase()//new CreateUserUseCase(userRepository)

    const user = await createUserUseCase.handler(userWithHashedPassword)
    return reply.status(201).send({ id: user?.id, username: user?.username })
    // } catch (error) {
    //     console.error(`Error creating user: ${error}`)
    //     throw new Error(`Error creating user: ${error}`)
    // }
}
