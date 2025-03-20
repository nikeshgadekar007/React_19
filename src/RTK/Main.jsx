import React from 'react';
import Todos from './Todos';
import { Provider } from 'react-redux';
import {store} from './store';

function Main() {
  return (
    <Provider store={store}>
        <Todos/>
    </Provider>
  )
}

export default Main