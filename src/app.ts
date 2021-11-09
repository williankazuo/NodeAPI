import express, { Express } from 'express'
import { UserController } from './controller/user.controller'
import prismaClient from './factories/prisma'

import { UserMySQLRepository } from './repositories/user/user-mysql.repository'
import { userRoutes } from './routes/user.routes'
import { UserService } from './usecases/user/user.service'

const setupApp = async (): Promise<Express> => {
  const app = express()
  const router = express.Router()

  const db = prismaClient

  app.use(express.json())
  app.use(router)
  app.get('/healthcheck', (req: express.Request, res: express.Response) => res.sendStatus(200))

  const userRepository = new UserMySQLRepository(db)
  const userService = new UserService(userRepository)
  const userController = new UserController(userService)
  userRoutes(router, userController)

  return app
}

export { setupApp }
