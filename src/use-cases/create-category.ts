import { ICategory } from "@/entities/models/category.interface";
import { ICategoryRepository } from "@/repositories/category.repository.interface";

export class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) { }
    async handler(name: string): Promise<ICategory> {
        return this.categoryRepository.create(name)
    }
}