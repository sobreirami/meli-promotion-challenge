import axios from 'axios';
import { MELI_API_BASE_URL } from '@/configs/environment';

export const apiMeli = axios.create({
  baseURL: `${MELI_API_BASE_URL}`,
  timeout: 10000,
});
