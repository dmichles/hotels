import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import HotelsPage from './pages/HotelsPage';
import HotelPage from './pages/Hotel';
import ReservationPage from './pages/Reservation';
import ReservationsPage from './pages/Reservations';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
