import OpenSocket from 'socket.io-client';
import Config from '../config';

export default class Chat {
  public socket = OpenSocket(Config.websocketUrl);
}
