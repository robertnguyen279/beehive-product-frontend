import axios from 'services/axios';
import { LoginUser, LoginByGoogle, LoginByFacebook, CreateUser } from 'types';

export const getUser = (): Promise<any> => axios.get(`/user`);

export const loginUser = ({ email, password }: LoginUser): Promise<any> => axios.post('/login', { email, password });

export const loginByGoogle = ({ firstName, lastName, email, avatar, token }: LoginByGoogle): Promise<any> =>
  axios.post('/loginByGoogle', { firstName, lastName, email, avatar, authToken: token });

export const loginByFacebook = ({ name, email, avatar }: LoginByFacebook): Promise<any> =>
  axios.post('/loginByFacebook', { name, email, avatar });

export const createUser = ({ password, email }: CreateUser): Promise<any> => axios.post('/user', { password, email });
