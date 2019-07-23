import React from 'react';
import Chat from '.';

export const SocketContext = React.createContext({
  chat: new Chat().socket,
});
