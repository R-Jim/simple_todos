// Import client startup through a single index entry point

import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Todos from '../../ui/components/Todos';
import configureStore from './configureStore';

export const store = configureStore();

Meteor.startup(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Todos />
    </Provider>
    , document.getElementById('react-root'));
});
