import {NextFunction, Request, Response} from 'express';
import {Logger} from 'loggerhythm';

import {MiddlewareFunction} from './constants';

const logger = Logger.createLogger('essentialprojects:http:deprecation_notifier');

/**
 * Allows you to mark a route as deprecated.
 *
 * Usage:
 *
 * Without an alternative route:
 * router.post('/my/depcreated/route', deprecate(), requestHandlerFunction);
 *
 * With an alternative route:
 * router.post('/my/depcreated/route', deprecate('/my/alternative/route'), requestHandlerFunction);
 *
 * @param alternativeRoute Optional: A replacement route that the user can use as an alternative.
 */
export function deprecate(alternativeRoute?: string): MiddlewareFunction {

  return (request: Request, response: Response, next: NextFunction): void => {

    let deprecatedRoute = request.originalUrl;

    for (const paramName of Object.keys(request.params)) {
      deprecatedRoute = deprecatedRoute.replace(request.params[paramName], `:${paramName}`);
    }

    // See: https://tools.ietf.org/id/draft-dalal-deprecation-header-01.html
    response.setHeader('Deprecation', 'true');

    logger.warn(`Route '${deprecatedRoute}' has been depcreated an will be removed in an upcoming major release!`);

    if (alternativeRoute) {
      // See: https://tools.ietf.org/id/draft-dalal-deprecation-header-01.html#recommend-replacement
      response.setHeader('Link', alternativeRoute);
      logger.warn(`Use '${alternativeRoute}' instead!`);
    }

    return next();
  };
}
