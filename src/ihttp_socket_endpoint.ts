import {IEndpointSocketScope} from '@essential-projects/websocket_contracts';

export interface IHttpSocketEndpoint {
  readonly namespace: string;
  initializeEndpoint(endpoint: IEndpointSocketScope): Promise<any> | any;
  dispose(): Promise<void> | void;
}
