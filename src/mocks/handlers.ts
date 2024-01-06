import { http } from 'msw';

export const handlers = [
  http.get('/auth/me', () => {
    console.log('Captured a "GET /auth/me" request');
  }),
  http.post('/auth/login', () => {
    console.log('Captured a "POST /auth/login" request');
  }),
  http.post('/auth/register', () => {
    console.log('Captured a "POST /auth/register" request');
  }),
];
