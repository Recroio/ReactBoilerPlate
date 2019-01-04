import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);

addDecorator(story => (
  <div style={{ padding: '20px', margin: '20px' }}>{story()}</div>
));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
setAddon(infoAddon);
configure(loadStories, module);
