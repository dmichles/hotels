import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const hotelsApi = createApi({
  reducerPath: 'hotels',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
  }),
  endpoints(builder) {
    return {
      fetchHotels: builder.query({
        query: loc => {
          return {
            url: '/getHotels',
            params: { loc: loc },
            method: 'GET',
          };
        },
      }),
      fetchLocation: builder.query({
        query: str => {
          return {
            url: '/getLocation',
            params: { loc: str },
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

export const {
  useFetchHotelsQuery,
  useFetchHotelQuery,
  useFetchLocationQuery,
  useFetchRoomsQuery,
} = hotelsApi;
export { hotelsApi };
