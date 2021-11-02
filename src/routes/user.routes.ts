import { UserController } from '../controller/user.controller'
import { Router, Request, Response } from 'express'

const userRoutes = (router: Router, userController: UserController): void => {
  router.get('/users', (req: Request, res: Response) => {
    return userController.getUsers(req, res)
  })
}

export { userRoutes }
