
export interface IResponse<T> {
  result: T | Array<T>;
  status: number;
}

export interface IHttpClient {
  get<T>(url: string, data: T): Promise<IResponse<T>>;
  post<T>(url: string, data: T): Promise<IResponse<T>>;
  put<T>(url: string, data: T): Promise<IResponse<T>>;
  delete(url: string): Promise<void>;
}