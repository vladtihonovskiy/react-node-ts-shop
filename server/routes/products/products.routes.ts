import { Router, Response, Request } from 'express';
import { Product } from '../../models/product/product.schema';
import { UploadedFile } from 'express-fileupload';
import { TypedRequestBody } from '../../types';

const productsRouter = Router();

/** /products GET **/
productsRouter.get('/', async (req: Request, res: Response) => {
  const products = await Product.find({});
  return res.json(products);
});

/** /products POST **/
productsRouter.post(
  '/',
  async (req: TypedRequestBody<{ title: string; description: string; price: string }>, res: Response) => {
    const fileData = req.files?.photo as UploadedFile;
    const { title, description, price } = req.body;
    const image = { data: fileData.data, contentType: 'img' };

    const savedImage = Product.build({ title: title, description: description, price: +price, image });
    await savedImage.save();
    return res.json('OK');
  }
);

export default productsRouter;
