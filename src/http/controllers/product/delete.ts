import { makeDeleteProductUseCase } from "@/use-cases/factory/make-delete-product-use-case";
import { makeUpdateProductUseCase } from "@/use-cases/factory/make-update-product-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteProduct(request: FastifyRequest, reply: FastifyReply) {
    const registerParamsSchema = z.object({
        id: z.string()
    })

    const { id } = registerParamsSchema.parse(request.params)


    const deleteProductUseCase = makeDeleteProductUseCase()
    await deleteProductUseCase.handler(id)

    return reply.status(204).send()
}