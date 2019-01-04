/**
 *
 * Loader stories
 *
 */

import React from 'react';
import { storiesOf } from '@storybook/react'; // check docs here https://storybook.js.org/basics/guide-react/
import { withInfo } from '@storybook/addon-info'; // check docs here
import { withKnobs, boolean } from '@storybook/addon-knobs'; // check docs here
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../common_reducer';
import Loader from './index';
import 'babel-polyfill';

const store = createStore(reducer);

const stories = storiesOf('Loader', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
stories.add('Loader', () => {
  const toggleBool = boolean('Toggle', true);
  return (
    <Provider store={store}>
      <Loader toggleBool={toggleBool} />
    </Provider>
  );
});
