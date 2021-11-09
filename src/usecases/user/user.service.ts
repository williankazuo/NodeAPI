import { AppError } from '../../utils/error'
import { IUserCreate } from '../../dto/user'
import { User } from '../../entities/User'
import { IUserRepository } from '../../repositories/user/iuser.repository'
import { IUserService } from './iuser.service'

export class UserService implements IUserService {
  private readonly userRepository: IUserRepository

  constructor (
    userRepository: IUserRepository
  ) {
    this.userRepository = userRepository
  }

  async list (limit: number, offset: number): Promise<User[]> {
    return await this.userRepository.list(limit, offset)
  }

  async find (id: string): Promise<User> {
    const user = await this.userRepository.find(id)
    if (!user) {
      throw new AppError('User not found', 404)
    }

    return user
  }

  async save (data: IUserCreate): Promise<string> {
    const user = new User(data)
    return await this.userRepository.save(user)
  }
}
