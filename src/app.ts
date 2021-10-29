import express from 'express';
import { userRoutes } from './routes/user-routes';


const app = express();
const router = express.Router();

app.use(express.json());

app.use('/', router)

app.get('/healthcheck', (req: express.Request, res: express.Response) => res.sendStatus(200));

userRoutes(router);

app.listen(3000, async () => {
    console.log('App running on port 3000');
});
