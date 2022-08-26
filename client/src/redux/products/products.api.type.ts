export interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: {
    data: string;
    contentType: string;
  };
}
