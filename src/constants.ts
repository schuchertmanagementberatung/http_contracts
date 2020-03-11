import {NextFunction, Response} from 'express';

import {HttpRequestWithIdentity} from './http_request_with_identity';

export const defaultSocketNamespace = '/default';

export type MiddlewareFunction = (request: HttpRequestWithIdentity, response: Response, next: NextFunction) => void | Promise<void>;
