import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dtmoney-xi-five.vercel.app/api',
})

