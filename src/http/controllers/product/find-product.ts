import { makeFindProductUseCase } from "@/use-cases/factory/make-find-product-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function FindProduct(reques: FastifyRequest, reply: FastifyReply) {
    const registerParamsSchema = z.object({
        id: z.string()
    })

    const { id } = registerParamsSchema.parse(reques.params)
    const findProductUseCase = makeFindProductUseCase()
    const product = await findProductUseCase.handler(id)
    return reply.status(200).send(product)

}