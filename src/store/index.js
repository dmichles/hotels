import { configureStore } from '@reduxjs/toolkit';
import { hotelsApi } from './apis/hotelsApi';
import { reservationsApi } from './apis/reservationsApi';
import startDateSlice from './slices/startDate-slice';
import endDateSlice from './slices/endDate-slice';
import starsSlice from './slices/stars-slice';
import popularFilterSlice from './slices/popularFilter-slice';
import minPriceSlice from './slices/minPrice-slice';
import maxPriceSlice from './slices/maxPrice-slice';
import daysSlice from './slices/days-slice';
import travelersSlice from './slices/travelers-slice';
import ratingSlice from './slices/rating-sice';
import locationSlice from './slices/location-slice';

const store = configureStore({
  reducer: {
    hotels: hotelsApi.reducer,
    reservations: reservationsApi.reducer,
    startDate: startDateSlice.reducer,
    endDate: endDateSlice.reducer,
    stars: starsSlice.reducer,
    popularFilter: popularFilterSlice.reducer,
    minPrice: minPriceSlice.reducer,
    maxPrice: maxPriceSlice.reducer,
    days: daysSlice.reducer,
    travelers: travelersSlice.reducer,
    rating: ratingSlice.reducer,
    location: locationSlice.reducer,
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
  useFetchLocationQuery,
} from './apis/hotelsApi';
export {
  useFetchReservationsQuery,
  useDeleteReservationMutation,
  useAddReservationMutation,
  useChangeReservationMutation,
} from './apis/reservationsApi';
