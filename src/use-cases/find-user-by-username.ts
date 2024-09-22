import { IUser } from '@/entities/models/user.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { IUserRepository } from '@/repositories/user.repository.interface'

export class FindUserByUsernameUseCase {
    constructor(private UserRepository: IUserRepository) { }

    async handler(username: string): Promise<IUser | undefined> {
        const user = await this.UserRepository.findByUsername(username)
        if (!user) throw new ResourceNotFoundError()
        return user
    }
}
