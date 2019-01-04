import { configure } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
function importAll(r) {
  r.keys().forEach(r);
}
const req = require.context('../app', true, /stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// initialize react-storybook
configure(loadStories, module);
importAll(require.context('../app/components', true, /\.less|css|scss$/));
