import { configureStore } from '@reduxjs/toolkit';
import { hotelsApi } from './apis/hotelsApi';
import { reservationsApi } from './apis/reservationsApi';
import startDateSlice from './slices/startDate-slice';
import endDateSlice from './slices/endDate-slice';
import starsSlice from './slices/stars-slice';
import starsFilterFlagSlice from './slices/starsFilterFlag-slice';
import popularFilterSlice from './slices/popularFilter-slice';
import popularFilterFlagSlice from './slices/popularFilterFlag-slice';

const store = configureStore({
  reducer: {
    hotels: hotelsApi.reducer,
    reservations: reservationsApi.reducer,
    startDate: startDateSlice.reducer,
    endDate: endDateSlice.reducer,
    stars: starsSlice.reducer,
    starsFilterFlag: starsFilterFlagSlice.reducer,
    popularFilter: popularFilterSlice.reducer,
    popularFilterFlag: popularFilterFlagSlice.reducer,
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
  useFetchRoomsQuery,
} from './apis/hotelsApi';
export {
  useFetchReservationsQuery,
  useDeleteReservationMutation,
  useAddReservationMutation,
} from './apis/reservationsApi';
