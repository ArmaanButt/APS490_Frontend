import React from 'react';

import Home from '../Home/Home';

// list of stylesheets
require('../TestComponent/stylesheets/TestComponent.scss');


function App(props) {
  return (
    <div>
      Menu bar
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};
App.defaultProps = {
  children: null,
};


export default App;
