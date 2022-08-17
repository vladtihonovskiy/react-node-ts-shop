export interface IProduct {
  title: string;
  description: string;
  price: number;
  image: {
    data: Buffer;
    contentType: string;
  };
}
