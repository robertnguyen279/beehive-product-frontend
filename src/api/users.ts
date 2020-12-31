import axios from 'services/axios';

export const getUser = (): Promise<any> => {
  return axios.get(`/user`);
};
