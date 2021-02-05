import { Router, Request, Response } from 'express'

const routes = Router();

routes.get('/', (req: Request, resp: Response) => {
    return resp.json({msg: 'API!'});
});

export default routes;