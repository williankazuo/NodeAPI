import { uuid } from "uuidv4";
import bcrypt from "bcrypt"

export class User {
    readonly id: string;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at?: Date;

    constructor(name: string, email: string, password: string) {
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.password = this.generatePassword(password);
        this.created_at = new Date();
    }

    private generatePassword(password: string): string {
        return bcrypt.hashSync(password, 10);
    }
}