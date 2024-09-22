import { UserRepository } from "@/repositories/pg/user.repository"
import { FindUserByUsernameUseCase } from "../find-user-by-username"
import { SigninUseCase } from "../signin"

export function makeSigninUseCase() {
    const userRepository = new UserRepository()

    const signinUseCase= new SigninUseCase(userRepository)
    return signinUseCase
}