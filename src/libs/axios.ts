import axios from 'axios';
import { MELI_API_BASE_URL } from '@/app/environment';

export const apiMeli = axios.create({
  baseURL: `${MELI_API_BASE_URL}/sites/`,
  timeout: 10000,
});
