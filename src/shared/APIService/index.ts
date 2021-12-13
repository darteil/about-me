import axios, { AxiosPromise } from 'axios';
import Config from '../config';

class APIService {
  public sendMessage (text: string): AxiosPromise<any> {
    return axios.post(`${Config.apiUrl}/messages/`, { text });
  }
}

export default new APIService();
