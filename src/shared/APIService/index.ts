import axios, { AxiosPromise } from 'axios';
import Config from '../config';

class APIService {
  public getLastMessages(): AxiosPromise<any> {
    return axios.get(`${Config.apiUrl}/messages/last`);
  }
}

export default new APIService();
