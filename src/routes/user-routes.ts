import { UserController } from '@/controller/user-controller';
import { Router } from 'express';


const userRoutes = (router: Router): void => {
    const userController = new UserController();
    router.get('/users', userController.getUsers);
}

export { userRoutes }