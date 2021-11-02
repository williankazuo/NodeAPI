import { Request, Response } from 'express'
import { UserService } from '../usecases/user/user.service'

class UserController {
  private readonly userService: UserService

  constructor (
    userService: UserService
  ) {
    this.userService = userService
  }

  async getUsers (req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userService.getUsers(10, 0)
      return res.status(200).send(users)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}

export { UserController }
