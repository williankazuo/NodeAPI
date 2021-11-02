import { User } from '../../entities/User'

export interface IUserService {
    getUsers(limit: number, offset: number): Promise<User[]>
}
