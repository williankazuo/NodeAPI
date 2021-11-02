import { User } from '../../entities/User'

export interface IUserRepository {
    getUsers(limit: number, offset: number): Promise<User[]>
}
