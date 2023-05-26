import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import HotelsPage from './pages/HotelsPage';
import HotelPage from './pages/Hotel';
import ReservationPage from './pages/ReservationPage';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
