export class UserHasExists extends Error {
    constructor() {
        super('User already exists')
    }
}