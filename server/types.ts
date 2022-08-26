export interface TypedRequestBody<T> extends Express.Request {
  body: T;
  params: {
    [key: string]: string;
  }
}
