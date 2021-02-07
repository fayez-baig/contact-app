import { useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { LayoutContainer } from 'app/domains/Layout/containers/async';
import * as serviceWorker from 'serviceWorkerRegistration';
import './index.css';

const AppMain = () => {
  useEffect(() => {
    serviceWorker.register();
  }, []);

  return (
    <BrowserRouter>
      <Route path="/" component={LayoutContainer} />
    </BrowserRouter>
  );
};

export default AppMain;
