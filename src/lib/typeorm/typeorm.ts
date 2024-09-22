import { DataSource } from 'typeorm'
import { env } from '@/env'
import { Product } from '@/entities/product.entity'
import { Category } from '@/entities/category.entity'
import { ProductAutoGenerateUUID1726355082328 } from './migrations/1726355082328-ProductAutoGenerateUUID'
import { UserUniqueUserName1726370344844 } from './migrations/1726370344844-UserUniqueUserName'


export const appDataSource = new DataSource({
    type: 'postgres',
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    entities: [
        // 'src/entities/*.ts',
        Product,
        Category
    ],
    migrations: [ProductAutoGenerateUUID1726355082328,UserUniqueUserName1726370344844],
    logging: env.NODE_ENV == 'development',
})

appDataSource
    .initialize()
    .then(() => {
        console.log('Database with typeorm connected')

    })
    .catch((error: any) => {
        console.error('Error connecting to database with typeorm', error)
    })