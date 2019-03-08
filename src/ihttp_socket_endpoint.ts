import {IEndpointSocketScope} from '@essential-projects/websocket_contracts';

export interface IHttpSocketEndpoint {
  readonly namespace: string;
  initializeEndpoint(socketIo: IEndpointSocketScope): Promise<any> | any;
  dispose(): Promise<void> | void;
}
