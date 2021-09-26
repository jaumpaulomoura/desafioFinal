import React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/sass/global.scss';
import favicon from './assets/img/favicon.png';

import Home from './pages/home/index.jsx';

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>

      <Home/>
    </>
  );
}

export default App;