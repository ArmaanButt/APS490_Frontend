import React from 'react';
import 'bootstrap/less/bootstrap.less';
import Home from '../Home/Home';

// list of stylesheets
require('../TestComponent/stylesheets/TestComponent.scss');
require('../Portal/stylesheets/Portal.scss');


function App(props) {
  return (
    <Home enableAuth>
      {props.children}
    </Home>
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
