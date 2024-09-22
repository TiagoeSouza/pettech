import { IUser } from '@/entities/models/user.interface'
import { IUserRepository } from '@/repositories/user.repository.interface'
import { UserHasExists } from './errors/user-has-exists'

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async handler(user: IUser): Promise<IUser | undefined> {
        const existUser = await this.userRepository.findByUsername(user.username)
        if (existUser) throw new UserHasExists()

        return this.userRepository.create(user)
    }
}