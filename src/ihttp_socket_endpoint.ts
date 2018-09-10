import '@types/socket.io';

export interface IHttpSocketEndpoint {
  readonly namespace: string;
  initializeEndpoint(socketIo: SocketIO.Server): Promise<any> | any;
  dispose(): Promise<void> | void;
}
