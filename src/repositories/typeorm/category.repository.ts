import { Repository } from "typeorm";
import { ICategoryRepository } from "../category.repository.interface";
import { Category } from "@/entities/category.entity";
import { appDataSource } from "@/lib/typeorm/typeorm";
import { ICategory } from "@/entities/models/category.interface";

export class CategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>
    constructor() {
        this.repository = appDataSource.getRepository(Category)
    }

    create(name: string): Promise<ICategory> {
        return this.repository.save({ name })
    }
}