import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import HotelsPage from './pages/Hotels/Hotels';
import HotelPage from './pages/Hotel/Hotel';
import ReservationPage from './pages/Reservation/Reservation';
import ReservationsPage from './pages/Reservations/Reservations';
import ChangeReservationPage from './pages/ChangeReservation/ChangeReservation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      { path: '/hotels', element: <HotelsPage /> },
      { path: 'hotels/:to', element: <HotelPage /> },
      { path: '/reservation', element: <ReservationPage /> },
      { path: '/reservations', element: <ReservationsPage /> },
      { path: '/changereservation', element: <ChangeReservationPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
