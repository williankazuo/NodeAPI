import { IUserCreate } from '../dto/user'
import { Request, Response } from 'express'
import { UserService } from '../usecases/user/user.service'

class UserController {
  private readonly userService: UserService

  constructor (
    userService: UserService
  ) {
    this.userService = userService
  }

  async list (req: Request, res: Response): Promise<Response> {
    try {
      let limit: number = 10
      let offset:number = 0
      if (req.query.limit) {
        limit = parseInt(req.query.limit.toString())
      }
      if (req.query.offset) {
        offset = parseInt(req.query.offset.toString())
      }

      const result = await this.userService.list(limit, offset)
      return res.status(200).send(result)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

  async find (req: Request, res: Response): Promise<Response> {
    try {
      const params = req.params
      const result = await this.userService.find(params.id)
      return res.status(200).send(result)
    } catch (err: any) {
      return res.status(err.status || 500).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

  async save (req: Request, res: Response): Promise<Response> {
    try {
      const userCreate: IUserCreate = req.body
      const result = await this.userService.save(userCreate)
      return res.status(201).send(result)
    } catch (err: any) {
      return res.status(500).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}

export { UserController }
