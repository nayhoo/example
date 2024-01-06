import { axios } from '@/lib/axios';
import { User } from '@/stores/auth';

export const getUser = (): Promise<User> => {
  return axios.get('/auth/me');
};
