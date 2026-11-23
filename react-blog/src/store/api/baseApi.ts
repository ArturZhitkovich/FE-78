import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  // ключ, под которым кэш RTK Query лежит в store: state.api
  reducerPath: 'api',

  // как делать запросы: обёртка над fetch с общим адресом сервера
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://studapi.teachmeskills.by',
    // перед каждым запросом: если есть токен, добавляем заголовок
    prepareHeaders: (headers) => {
    //   const token = localStorage.getItem('access');
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`);
    //   }
      return headers;
    },
  }),

  // «ярлыки» для кэша: по ним RTK Query понимает, что пора перезапросить
  tagTypes: ['Post'],

  // эндпоинты добавим в отдельных файлах через injectEndpoints
  endpoints: () => ({}),
});