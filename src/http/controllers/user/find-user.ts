import { makeFindWithPersonUseCase } from "@/use-cases/factory/make-find-with-person-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findUser(request: FastifyRequest, replay: FastifyReply) {
    const registerParamsSchema = z.object({
        id: z.coerce.number(),
    })

    const { id } = registerParamsSchema.parse(request.params)

    // try {
        // const userRepository = new UserRepository()
        const findWithPersonUseCase = makeFindWithPersonUseCase()//new FindWithPersonUseCase(userRepository)

        const user = await findWithPersonUseCase.handler(id)

        return replay.status(200).send(user)
    // } catch (error) {
    //     console.error(`Find user error: ${error}`)
    //     throw new Error(`Find user error: ${error}`)
    // }

}