import Route from './components/Route';
import NavBar from './components/NavBar';
import AmanPage from './pages/AmanPage';
import Baccarat from './pages/BaccaratPage';
import FourSeasonsPage from './pages/FourSeasonsPage';
import IntercontinentalPage from './pages/IntercontinentalPage';
import MandarinOrientalPage from './pages/MandarinOrientalPage';
import PierrePage from './pages/PierrePage';
import RitzCarltonPage from './pages/RitzCarltonPage';
import SofitelPage from './pages/SofitelPage';
import HotelsPage from './pages/HotelsPage';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Route path="/">
          <HotelsPage />
        </Route>
        <Route path="/aman">
          <AmanPage />
        </Route>
        <Route path="/baccarat">
          <Baccarat />
        </Route>
        <Route path="/fourseasons">
          <FourSeasonsPage />
        </Route>
        <Route path="/intercontinental">
          <IntercontinentalPage />
        </Route>
        <Route path="/mandarinoriental">
          <MandarinOrientalPage />
        </Route>
        <Route path="/pierre">
          <PierrePage />
        </Route>
        <Route path="/ritzCarlton">
          <RitzCarltonPage />
        </Route>
        <Route path="/sofitel">
          <SofitelPage />
        </Route>
      </div>
    </div>
  );
}
export default App;
