import { Request, Response } from 'express';

class UserController {
    constructor() { }

    async getUsers(req: Request, res: Response) {
        res.status(200).send('Teste');
    }
}

export { UserController };