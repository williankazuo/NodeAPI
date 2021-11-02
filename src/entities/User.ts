import { uuid } from 'uuidv4'
import bcrypt from 'bcrypt'

export class User {
    readonly id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt?: Date;

    constructor (id: string, name: string, email: string, password: string) {
      this.id = id || uuid()
      this.name = name
      this.email = email
      this.password = this.generatePassword(password)
      this.createdAt = new Date()
    }

    private generatePassword (password: string): string {
      return bcrypt.hashSync(password, 10)
    }
}
