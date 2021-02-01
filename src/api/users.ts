import axios from 'services/axios';
import { LoginUser } from 'types';

export const getUser = (): Promise<any> => axios.get(`/user`);

export const loginUser = ({ email, password }: LoginUser): Promise<any> => axios.post('/login', { email, password });
