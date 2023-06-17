import { configureStore } from '@reduxjs/toolkit';
import { hotelsApi } from './apis/hotelsApi';
import { reservationsApi } from './apis/reservationsApi';
import startDateSlice from './slices/startDate-slice';
import endDateSlice from './slices/endDate-slice';
import starsSlice from './slices/stars-slice';
import popularFilterSlice from './slices/popularFilter-slice';
import minValueSlice from './slices/minValue-slice';
import maxValueSlice from './slices/maxValue-slice';
import daysSlice from './slices/days-slice';
import travelersSlice from './slices/travelers-slice';

const store = configureStore({
  reducer: {
    hotels: hotelsApi.reducer,
    reservations: reservationsApi.reducer,
    startDate: startDateSlice.reducer,
    endDate: endDateSlice.reducer,
    stars: starsSlice.reducer,
    popularFilter: popularFilterSlice.reducer,
    minValue: minValueSlice.reducer,
    maxValue: maxValueSlice.reducer,
    days: daysSlice.reducer,
    travelers: travelersSlice.reducer,
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
