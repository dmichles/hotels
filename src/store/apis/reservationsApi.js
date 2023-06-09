import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const reservationsApi = createApi({
  reducerPath: 'reservations',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
  }),
  endpoints(builder) {
    return {
      fetchReservations: builder.query({
        query: () => {
          return {
            url: '/getReservations',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchReservationsQuery } = reservationsApi;
export { reservationsApi };
