import { PrismaClient } from '.prisma/client'
import { User } from '../../entities/User'
import { IUserRepository } from './iuser.repository'

export class UserMySQLRepository implements IUserRepository {
  private readonly db: PrismaClient;
  private selectHidePassword = { id: true, email: true, name: true, createdAt: true, updatedAt: true };

  constructor (db: PrismaClient) {
    this.db = db
  }

  async list (limit: number, offset: number): Promise<User[]> {
    const users = await this.db.user.findMany({
      select: this.selectHidePassword,
      take: limit,
      skip: offset
    })

    return <User[]>users
  }

  async find (id: string): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { id },
      select: this.selectHidePassword
    })

    return <User>user
  }

  async save (user: User): Promise<string> {
    const { id } = await this.db.user.create({ data: { name: user.name, email: user.email, password: user.password, createdAt: user.createdAt, updatedAt: user.updatedAt } })
    return id
  }
}
