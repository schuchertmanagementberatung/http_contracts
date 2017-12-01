import {IRequestOptions, IResponse} from './index';

export interface IHttpClient {
  get<T>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
  post<D, T>(url: string, data: D, options?: IRequestOptions): Promise<IResponse<T>>;
  put<T>(url: string, data: T, options?: IRequestOptions): Promise<IResponse<T>>;
  delete<T>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
}