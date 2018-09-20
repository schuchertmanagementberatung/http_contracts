import {Request} from 'express';

import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * Extends the base HttpRequest object to include content exlusive to the deployment api.
 */
export interface HttpRequestWithIdentity extends Request {
  /**
   * Contains the user specific context with which a user is performing requests against the deployment api.
   */
  identity: IIdentity;
}
