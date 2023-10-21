import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Deal } from '../../types';

export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://your-app-name.herokuapp.com'
    : 'http://localhost:5000';

export const dealsSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getDeals: builder.query<Deal[], void>({
      query: () => 'deals',
    }),
  }),
});

export const { useGetDealsQuery } = dealsSlice;
