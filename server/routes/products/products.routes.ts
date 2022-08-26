import { Router, Response, Request } from 'express';
import { Product } from '../../models/product/product.schema';
import { UploadedFile } from 'express-fileupload';
import { TypedRequestBody } from '../../types';

interface IProductRequestType {
 title: string;
 description: string;
 price: string
}

const productsRouter = Router();

/** /products GET **/
productsRouter.get('/', async (req: Request, res: Response) => {
  const products = await Product.find({});
  return res.json(products);
});

/** /products Add POST **/
productsRouter.post(
  '/',
  async (req: TypedRequestBody<IProductRequestType>, res: Response) => {
    const fileData = req.files?.photo as UploadedFile;
    const { title, description, price } = req.body;
    const image = { data: Buffer.from(fileData.data).toString('base64'), contentType: 'img' };

    const savedImage = Product.build({ title: title, description: description, price: +price, image });
    await savedImage.save();
    return res.status(200).json({message: 'Added successfully', item: savedImage.toJSON(), status: 200})
  }
);

/** /products/:id update PUT**/
productsRouter.put(
  '/:id',
  async (req: TypedRequestBody<IProductRequestType> , res: Response) => {
    const fileData = req.files?.photo as UploadedFile;
    const id = req.params.id;
    const image = { data: Buffer.from(fileData.data).toString('base64'), contentType: 'img' };
    const result = await Product.findByIdAndUpdate(id, {...req.body, image})
    res.status(200).json({message: 'Update successfully', status: 200})
  }
);

/** /products/:id DELETE **/
productsRouter.delete(
  '/:id',
  async (req, res: Response) => {
    const id = req.params.id;
    const result = await Product.findByIdAndDelete(id)
    console.log(result);
    res.status(200).json({message: 'Delete successfully', status: 200})
  }
);

export default productsRouter;
