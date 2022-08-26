export enum FormType {
  Add = "ADD",
  Update = "UPDATE",
}

export type ProductFormType = FormType.Add | FormType.Update;

export default interface IAddUpdateProductFormProps {
  type: ProductFormType;
}
