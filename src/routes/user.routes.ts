import { UserController } from '../controller/user.controller'
import { Router, Request, Response } from 'express'

const userRoutes = (router: Router, userController: UserController): void => {
  router.get('/users', (req: Request, res: Response) => {
    return userController.list(req, res)
  })
  router.get('/users/:id', (req: Request, res: Response) => {
    return userController.find(req, res)
  })
  router.post('/users', (req: Request, res: Response) => {
    return userController.save(req, res)
  })
}

export { userRoutes }
