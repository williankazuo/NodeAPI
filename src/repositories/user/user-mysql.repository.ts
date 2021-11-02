import { Connection } from 'mysql2/promise'

import { User } from '../../entities/User'
import { IUserRepository } from './iuser.repository'

export class UserMySQLRepository implements IUserRepository {
  private readonly db: Connection;

  constructor (db: Connection) {
    this.db = db
  }

  async getUsers (limit: number, offset: number): Promise<User[]> {
    const [rows] = await this.db.execute('SELECT id, name, email, createdAt, updatedAt from users')
    const users:User[] = <User[]>rows

    return users
  }
}
