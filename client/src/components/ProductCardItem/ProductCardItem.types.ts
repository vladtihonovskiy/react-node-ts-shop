export default interface IProductCardItemProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: {
    data: string;
    contentType: string;
  };
}
