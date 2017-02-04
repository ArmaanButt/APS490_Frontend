import React from 'react';

import Signin from './components/Signin';
import Signup from './components/Signup';


class PortalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true,
    };
    this.toggleIsSignIn = this.toggleIsSignIn.bind(this);
  }

  toggleIsSignIn() {
    this.setState({ isSignIn: !this.state.isSignIn });
  }

  render() {
    return (
      <div className="portal-container">
        {this.state.isSignIn && <Signin toggle={this.toggleIsSignIn} />}
        {!this.state.isSignIn && <Signup toggle={this.toggleIsSignIn} />}
      </div>
    );
  }
}

PortalContainer.title = 'portal';

export default PortalContainer;
