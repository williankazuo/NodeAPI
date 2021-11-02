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

  async getUsers (limit: number, offset: number): Promise<User[]> {
    return await this.userRepository.getUsers(limit, offset)
  }
}
