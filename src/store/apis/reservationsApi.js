import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const reservationsApi = createApi({
  reducerPath: 'reservations',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
  }),
  endpoints(builder) {
    return {
      addReservation: builder.mutation({
        invalidatesTags: ['Reservations'],
        query: reservation => {
          return {
            url: '/addReservation',
            body: {
              startDate: reservation.startDate,
              endDate: reservation.endDate,
              roomId: reservation.roomId,
              travelers: reservation.travelers,
            },
            method: 'POST',
          };
        },
      }),
      changeReservation: builder.mutation({
        invalidatesTags: ['Reservations'],
        query: reservation => {
          return {
            url: '/changeReservation',
            body: {
              id: reservation.id,
              startDate: reservation.startDate,
              endDate: reservation.endDate,
              roomId: reservation.roomId,
              travelers: reservation.travelers,
            },
            method: 'PUT',
          };
        },
      }),
      deleteReservation: builder.mutation({
        invalidatesTags: ['Reservations'],
        query: id => {
          return {
            url: '/deleteReservation',
            params: { id: id },
            method: 'DELETE',
          };
        },
      }),
      fetchReservations: builder.query({
        providesTags: ['Reservations'],
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

export const {
  useFetchReservationsQuery,
  useDeleteReservationMutation,
  useAddReservationMutation,
  useChangeReservationMutation,
} = reservationsApi;
export { reservationsApi };
