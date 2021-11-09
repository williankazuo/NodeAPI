import { User } from '../../entities/User'

export interface IUserRepository {
    list(limit: number, offset: number): Promise<User[]>
    find(id: string): Promise<User>
    save(user: User): Promise<string>
}
