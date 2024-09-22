import { makeFindAllProductUseCase } from "@/use-cases/factory/make-find-all-product-use-case";
import { makeFindProductUseCase } from "@/use-cases/factory/make-find-product-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function FindAllProduct(reques: FastifyRequest, reply: FastifyReply) {
    const registerQuerySchema = z.object({
        page: z.coerce.number().default(1),
        limit: z.coerce.number().default(10)
    })

    const { page, limit } = registerQuerySchema.parse(reques.query)
    const findAllProductUseCase = makeFindAllProductUseCase()
    const products = await findAllProductUseCase.handler(page, limit)
    return reply.status(200).send(products)
}
