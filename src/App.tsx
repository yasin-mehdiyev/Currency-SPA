import { Fragment, Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

// App.css
import './App.css';

// React Routing Dom Library
import { Route, Routes } from "react-router-dom";

// Components
import Loader from "./components/Skeleton/Loader";
import Navigation from './components/Navbar/Navbar';

// Dashboard Page
import Home from './pages/Home/Home';

// Redux
import { selectIsShown } from './redux/features/UI/UISlice';

// Dynamic İmports(Code Splittings)
const CurrenciesPage = lazy(() => import("./pages/Currencies/Currencies"));
const ConverterPage = lazy(() => import("./pages/Converter/Converter"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {

  const isShown = useSelector(selectIsShown);

  return (
    <Fragment>

      <Navigation />

      <Suspense fallback={<><Loader /></>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {
            isShown && (
              <>
                <Route path="/currencies" element={<CurrenciesPage />} />
                <Route path="/converter" element={<ConverterPage />} />
              </>
            )
          }
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;