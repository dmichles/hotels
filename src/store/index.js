import { configureStore } from '@reduxjs/toolkit';
import { hotelsApi } from './apis/hotelsApi';
import { reservationsApi } from './apis/reservationsApi';
import startDateSlice from './slices/startDate-slice';
import endDateSlice from './slices/endDate-slice';

const store = configureStore({
  reducer: {
    hotels: hotelsApi.reducer,
    reservations: reservationsApi.reducer,
    startDate: startDateSlice.reducer,
    endDate: endDateSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(
      hotelsApi.middleware,
      reservationsApi.middleware
    );
  },
});

export default store;
export {
  useFetchHotelsQuery,
  useFetchHotelQuery,
  useFetchAmenitiesQuery,
  useFetchRoomsQuery,
} from './apis/hotelsApi';
export {
  useFetchReservationsQuery,
  useDeleteReservationMutation,
  useAddReservationMutation,
} from './apis/reservationsApi';
