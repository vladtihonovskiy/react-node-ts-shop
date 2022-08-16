import {  Router, Response } from 'express';
import { Product } from "../../models/product/product.schema";
import { UploadedFile } from "express-fileupload";
import { TypedRequestBody } from '../../types';

const productsRouter = Router();

productsRouter.post('/', async(req:TypedRequestBody<{title: string, description: string, price: string}>, res: Response) => {
  const fileData = req.files?.photo as UploadedFile;
  const { title, description, price} = req.body;
  const image = { data: fileData.data, contentType: 'img' }

  const savedImage =  Product.build({title: title, description: description, price: +price, image });
  await savedImage.save();
  return res.json("OK");
})

export default productsRouter;