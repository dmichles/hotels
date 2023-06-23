import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

function RootLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
