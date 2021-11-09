import { IUserCreate } from '../../dto/user'
import { User } from '../../entities/User'

export interface IUserService {
    list(limit: number, offset: number): Promise<User[]>
    find(id: string): Promise<User>
    save(data: IUserCreate): Promise<string>
}
