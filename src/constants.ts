import {NextFunction, Request, Response} from 'express';

export const defaultSocketNamespace = '/default';

export type MiddlewareFunction = (request: Request, response: Response, next: NextFunction) => void | Promise<void>;
