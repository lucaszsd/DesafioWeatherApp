import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DOGS_API_KEY = 'c3c76fee-057d-496f-a0e4-f52686c18773';

import { Breed } from 'types/interfaces';

const dogsApiSlice = createApi({
  reducerPath: 'dogs',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = dogsApiSlice;

export default dogsApiSlice;
