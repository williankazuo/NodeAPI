import bcrypt from 'bcrypt'

export class User {
    readonly id?: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor (props: Omit<User, 'id' | 'updatedAt'>) {
      this.name = props.name
      this.email = props.email
      this.password = this.generatePassword(props.password)
    }

    private generatePassword (password: string): string {
      return bcrypt.hashSync(password, 10)
    }
}
