import { FastifyInstance } from "fastify";
import { create } from "./create";
import { FindAllProduct } from "./find-all-product";
import { FindProduct } from "./find-product";
import { update } from "./update";
import { deleteProduct } from "./delete";
import { validateJwt } from "@/http/middlewares/jwt-validate";

export async function productRoutes(app: FastifyInstance) {
    app.get('/product', { onRequest: [validateJwt] }, FindAllProduct)
    app.get('/product/:id', FindProduct)
    app.post('/product', create)
    app.put('/product/:id', update)
    app.delete('/product/:id', deleteProduct)

}