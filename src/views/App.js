import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {getSymbols} from '../modules/search';
import Search from '../containers/Search';
import Details from '../containers/Details';
import Overlay from '../containers/Overlay';

function App() {
  store.dispatch(getSymbols());
  return (
     <Provider store={store}>
        <div className="app">
          <div className="app-header">Stock Price Search</div>
          <div className="app-body">
              <Search />
              <Details/>
              <Overlay />
          </div>
        </div>
    </Provider>
  );
}

export default App;
