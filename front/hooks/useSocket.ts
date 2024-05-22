import io from 'socket.io-client';
import { useCallback } from 'react';

const backUrl = 'http://localhost:3095';

const sockets: { [key: string]: SocketIOClient.Socket } = {};
const useSocket = (workspace?: string) => {
  const disconnect = useCallback(() => {
    if (workspace) {
      sockets[workspace].disconnect();
      delete sockets[workspace];
    }
  }, [workspace]);

  if (!workspace) {
    return [undefined, disconnect];
  }

  sockets[workspace] = io.connect(`${backUrl}/ws-${workspace}`);

  // sockets[workspace].emit('hello', 'world');
  // sockets[workspace].on('message', (data) => {
  //   console.log(data);
  // });
  // sockets[workspace].on('data', (data) => {
  //   console.log(data);
  // });
  // sockets[workspace].on('onlineList', (data) => {
  //   console.log(data);
  // });

  return [sockets[workspace], disconnect];
};

export default useSocket;
