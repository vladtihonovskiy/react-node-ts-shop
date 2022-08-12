import {  Router, Request, Response } from 'express';

const productsRouter = Router();

productsRouter.get('/', (req: Request, res: Response) => {
  return res.json("OK");
});

export default productsRouter;