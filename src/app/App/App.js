import React from 'react';

import TestComponent from '../TestComponent/TestComponent';

require('../TestComponent/stylesheets/TestComponent.scss');

function App(props) {
  return (
    <TestComponent />
  );
}

export default App;
