import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const hotelsApi = createApi({
  reducerPath: 'hotels',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
  }),
  endpoints(builder) {
    return {
      fetchHotels: builder.query({
        query: () => {
          return {
            url: '/hotels',
            method: 'GET',
          };
        },
      }),
      fetchHotel: builder.query({
        query: hotel => {
          return {
            url: '/getHotel',
            params: { to: hotel },
            method: 'GET',
          };
        },
      }),
      fetchRooms: builder.query({
        query: hotel => {
          return {
            url: '/getRooms',
            params: { to: hotel },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchHotelsQuery, useFetchHotelQuery, useFetchRoomsQuery } =
  hotelsApi;
export { hotelsApi };
