import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider, subscribe } from 'react-contextual';

import registerServiceWorker from './registerServiceWorker';

// Components
import header from './components/header';
import sideNavigation from './components/side-navigation';

// Pages
import index from './pages/index';

import { initialState, actions } from './state';

const Header = subscribe()(header);
const SideNavigation = subscribe()(sideNavigation);
const Index = subscribe()(index);

ReactDOM.render(
  <Provider initialState={initialState} actions={actions} >
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <SideNavigation />
        <main className='main-content'>
          <Route exact path='/' component={Index} />
        </main>
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
