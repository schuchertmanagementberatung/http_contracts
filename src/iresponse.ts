export interface IResponse<T> {
  result: T | Array<T>;
  status: number;
}
