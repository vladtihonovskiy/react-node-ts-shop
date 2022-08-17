import mongoose from 'mongoose';

interface IProducts {
  title: string;
  description: string;
  price: number;
  image: {
    data: Buffer;
    contentType: string;
  };
}

interface ProductDoc extends mongoose.Document, IProducts {}

interface productModelInterface extends mongoose.Model<ProductDoc> {
  build(attr: IProducts): ProductDoc;
}

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: { data: Buffer, contentType: String },
});

productSchema.statics.build = (attr: IProducts) => {
  return new Product(attr);
};

const Product = mongoose.model<ProductDoc, productModelInterface>('Product', productSchema);

export { Product };
