import * as popsicle from 'popsicle';
export interface IRequestOptions extends popsicle.RequestOptions {
}
export interface IResponse<T> {
    result: T | Array<T>;
    status: number;
}
export interface IHttpClient {
    get<T>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
    post<T>(url: string, data: T, options?: IRequestOptions): Promise<IResponse<T>>;
    put<T>(url: string, data: T, options?: IRequestOptions): Promise<IResponse<T>>;
    delete<T>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
}
export interface IHttpRouter {
    readonly router: any;
    readonly baseRoute: string;
    initialize(): Promise<any> | any;
    initializeRouter(): Promise<any> | any;
}
export interface IHttpExtension {
    readonly server: any;
    readonly app: any;
}
